import type { Metadata, Viewport } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Victoria Beauty Salon | Mission, BC',
  description: 'South Asian & traditional beauty services — bridal makeup, mehndi, threading, facials, hair, and more. Your community salon in Mission, British Columbia.',
  generator: 'v0.app',
  keywords: ['beauty salon', 'Mission BC', 'bridal makeup', 'mehndi', 'henna', 'threading', 'South Asian beauty', 'Punjabi salon'],
  icons: {
    icon: [{ url: '/logo.png' }],
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Victoria Beauty Salon | Mission, BC',
    description: 'South Asian & traditional beauty services — bridal makeup, mehndi, threading, facials, hair, and more.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#c026d3',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
