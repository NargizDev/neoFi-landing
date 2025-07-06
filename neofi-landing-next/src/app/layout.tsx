import './globals.css'
import { ReactNode } from 'react'
import { ThemeProvider } from './providers/ThemeProvider'
import { QueryProvider } from './providers/QueryProvider'

export const metadata = {
  title: 'NeoFi',
  description: 'Next.js App Router Landing',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
