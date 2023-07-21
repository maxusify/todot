import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todot',
  description: 'Demo Todo App by Michał Pędzik',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className='flex flex-col justify-center items-center'>
            <div className='md:max-w-[1280px] h-full'>{children}</div>
          </div>
        </ThemeProvider> 
      </body>
    </html>
  )
}
