'use client'

import '../public/antd.min.css'
import './globals.css'
import withTheme from '../theme'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>{withTheme(<>{children}</>)}</body>
    </html>
  )
}
