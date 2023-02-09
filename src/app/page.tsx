'use client'
import Image from 'next/image'
import { Inter, Roboto_Flex } from '@next/font/google'
import styles from './page.module.css'

import { Button } from '@/components/Button/Button'
import { Grid } from '@/components/Grid/Grid'
import { Box } from '@mui/material'

const inter = Roboto_Flex({ subsets: ["latin"] })// Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          UTinder
        </h1>
        <div>
          <Button variant='text'>ログイン</Button>
          <Button variant='contained'>サインアップ</Button>
        </div>
      </div>

      <div className={styles.center}>
        <h1>東京大学の<b>教授</b>を探す</h1>
      </div>
      <div className={styles.center}>
        <Button variant='text'>教科を探す</Button>
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
