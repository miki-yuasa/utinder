'use client'
import Image from 'next/image'
import { Inter, Roboto_Flex } from '@next/font/google'
import styles from './page.module.css'

import { Button } from '@/components/Button/Button'

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
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            評価の管理・編集
          </h2>
          <p className={inter.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            匿名で評価を投稿
          </h2>
          <p className={inter.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            投稿を評価
          </h2>
          <p className={inter.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
