'use client'
import Image from 'next/image'
import { Roboto_Flex, Noto_Sans_JP } from '@next/font/google'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import { useRouter } from 'next/navigation'

import { Grid } from '@/components/Grid/Grid'
import { Autocomplete } from '@/components/Autocomplete/Autocomplete'
import { TextField, TextFieldProps } from '@/components/TextField/TextField'
import { Navigation } from '@/features/navigation'
import { Container } from '@/components/Container/Container'
import { Box } from '@/components/Box/Box'
import { Typography } from '@/components/Typography/Typography'
import { Footer } from '@/components/Footer/Footer'
import Link from 'next/link'
import React from 'react'

type Option = {
  id: number
  label: string
  slug: string
}
const options: Option[] = [{ id: 1, label: '東京大学', slug: 'utokyo' }, { id: 2, label: '慶應義塾大学', slug: 'keio' }]

// const inter = Roboto_Flex({ subsets: ["latin"] })// Inter({ subsets: ['latin'] })
const inter = Noto_Sans_JP({
  weight: '400',
  preload: false,
})

export default function Home(): JSX.Element {
  const router = useRouter();

  const handleOptionSelected = (option: Option) => {
    router.push(`/${option.slug}`);
  };

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
            options={options}
            sx={{ width: 300 }}
            renderInput={(params: TextFieldProps) => <TextField {...params} label="大学名" />}
            renderOption={(props: object, option: Option, { inputValue }: { inputValue: string }) => {
              const matches = match(option.label, inputValue, { insideWords: true });
              const parts = parse(option.label, matches);
              return (
                <li {...props} style={{ padding: 0 }} >
                  <Link href={`/${option.slug}`} style={{ margin: 0, padding: 8, display: 'block', width: '100%' }}>
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
            getOptionLabel={(option: Option | string) => typeof option === 'string' ? option : option.label}
            onInputChange={(event: any, value: string) => {
              if (event?.type === 'keydown' && event.key === 'Enter') {
                const selectedOption = options.find((option) => option.label === value);
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
