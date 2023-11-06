'use client'

import Navbar from '@/components/navbar'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from './Providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <NextAuthProvider>
        <Navbar />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}