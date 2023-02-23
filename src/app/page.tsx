'use client'
import { useEffect, useState, ReactNode } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Roboto_Flex, Noto_Sans_JP } from '@next/font/google'
import { useRouter } from 'next/navigation'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'

import { getUniversities, db } from '@/features/database'

import { Grid } from '@/components/Grid/Grid'
import { Autocomplete } from '@/components/Autocomplete/Autocomplete'
import { TextField, TextFieldProps } from '@/components/TextField/TextField'
import { Navigation } from '@/features/navigation'
import { Container } from '@/components/Container/Container'
import { Box } from '@/components/Box/Box'
import { Typography } from '@/components/Typography/Typography'
import { Footer } from '@/components/Footer/Footer'
import { Firestore } from 'firebase/firestore/lite';
import { University } from '@/types';


// const inter = Roboto_Flex({ subsets: ["latin"] })// Inter({ subsets: ['latin'] })
const inter = Noto_Sans_JP({
  weight: '400',
  preload: false,
})

export default function Home(): ReactNode {
  const router = useRouter();

  const handleOptionSelected = (option: University) => {
    router.push(`/${option.url}`);
  };

  const [unis_state, setState] = useState<University[]>([]);

  useEffect(() => {
    const access_db = async (db: Firestore) => {
      const unis = await getUniversities(db)
      setState(unis)
    };
    access_db(db)
  }, [])


  return (<>
    <Navigation />
    <main style={{ minHeight: '50vh' }}>
      <Container maxWidth='lg'>
        <Box marginTop={30}>
          <Typography variant="h3" align="center"> <b>大学</b>を探す</Typography>
        </Box>
        <Box justifyContent={'center'} display='flex' marginTop={15}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={unis_state}
            sx={{ width: 300 }}
            renderInput={(params: TextFieldProps) => <TextField {...params} label="大学名" />}
            renderOption={(props: object, option: University, { inputValue }: { inputValue: string }) => {
              const matches = match(option.label, inputValue, { insideWords: true });
              const parts = parse(option.label, matches);
              return (
                <li {...props} style={{ padding: 0 }} >
                  <Link href={`/${option.url}`} style={{ margin: 0, padding: 8, display: 'block', width: '100%' }}>
                    {parts.map((part, index) => (
                      <span
                        key={index}
                        style={{
                          fontWeight: part.highlight ? 700 : 400,
                        }}
                      >
                        {part.text}
                      </span>
                    ))}
                  </Link>
                </li>
              )
            }}
            getOptionLabel={(option: University | string) => typeof option === 'string' ? option : option.label}
            onInputChange={(event: any, value: string) => {
              if (event?.type === 'keydown' && event.key === 'Enter') {
                const selectedOption = unis_state.find((option) => option.label === value);
                if (selectedOption) {
                  handleOptionSelected(selectedOption);
                }
              }
            }}
          />
        </Box>
        <Box justifyContent={'center'} display='flex' marginTop={15}>
          <Grid container spacing={10} style={{ textAlign: "center" }}>
            <Grid item xs={12} md={4}  >
              <h2 className={inter.className}>
                評価の管理・編集
              </h2>
            </Grid>
            <Grid item xs={12} md={4} >
              <h2 className={inter.className}>
                匿名で評価を投稿
              </h2>
            </Grid>
            <Grid item xs={12} md={4} >
              <h2 className={inter.className}>
                投稿を評価
              </h2>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
    <Footer />
  </>)
}
