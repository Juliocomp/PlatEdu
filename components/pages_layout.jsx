'use client'

import Navbar from '@/components/navbar'
import { Inter } from 'next/font/google'
import { NextAuthProvider } from '@/app/Providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
     
      {children}
    </NextAuthProvider>
  )
}