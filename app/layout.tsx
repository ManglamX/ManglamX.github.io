import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manglam Jaiswal - Full Stack Developer',
  description: 'Portfolio of Manglam Jaiswal - B.E. Electronics & Computer Science (Cybersecurity Honors) | IoT Lead & Full-Stack Developer',
  keywords: 'Manglam Jaiswal, Full Stack Developer, Cybersecurity, IoT, Portfolio, Web Developer',
  authors: [{ name: 'Manglam Jaiswal' }],
  creator: 'Manglam Jaiswal',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>

  )
}
