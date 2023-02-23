import * as dotenv from 'dotenv'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'standalone'
}

dotenv.config()

module.exports = nextConfig
