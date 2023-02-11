'use client'
import Image from 'next/image'
import { Roboto_Flex, Noto_Sans_JP } from '@next/font/google'
import styles from './page.module.css'

import { Button } from '@/components/Button/Button'
import { Grid } from '@/components/Grid/Grid'
import { Stack } from '@/components/Stack/Stack'

// const inter = Roboto_Flex({ subsets: ["latin"] })// Inter({ subsets: ['latin'] })
const inter = Noto_Sans_JP({
  weight: '400',
  preload: false,
})
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={inter.className}>
          UTinder
        </h1>
        <Stack spacing={2} direction='row'>
          <Button variant='text' color='inherit'>ログイン</Button>
          <Button variant='contained'>サインアップ</Button>
        </Stack>
      </div>

      <div className={styles.center}>
        <h1 className={inter.className}>東京大学の<b>教授</b>を探す</h1>
      </div>
      <div className={styles.center}>
        <Button variant='text' color='inherit'><b>教科を探す</b></Button>
      </div>
      <div className={styles.grid}>
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
      </div>
    </main>
  )
}
