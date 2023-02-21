'use client'
import Image from 'next/image'
import { Roboto_Flex, Noto_Sans_JP } from '@next/font/google'
import styles from './page.module.css'

import { Button } from '@/components/Button/Button'
import { Grid } from '@/components/Grid/Grid'
import { Stack } from '@/components/Stack/Stack'
import { Autocomplete } from '@/components/Autocomplete/Autocomplete'
import { TextField, TextFieldProps } from '@/components/TextField/TextField'
import { Navigation } from '@/features/navigation'
import { Container } from '@/components/Container/Container'
import { Box } from '@/components/Box/Box'
import { Typography } from '@/components/Typography/Typography'

const options = [{ id: 1, label: '東京大学' }, { id: 2, label: '慶應義塾大学' }]

// const inter = Roboto_Flex({ subsets: ["latin"] })// Inter({ subsets: ['latin'] })
const inter = Noto_Sans_JP({
  weight: '400',
  preload: false,
})
export default function Home() {
  return (<>
    <Navigation />
    <main >
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
  </>)
}
