import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/theme-provider'
import { CyberCursor } from '@/components/cyber-cursor'
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
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self';"
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CyberCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>

  )
}
