import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vihan Goenka',
  description: 'Math-CS at UC San Diego. Building products, shipping code, solving hard problems.',
  openGraph: {
    title: 'Vihan Goenka',
    description: 'Math-CS at UC San Diego. Builder.',
    url: 'https://vihangoenka.com',
  },
  twitter: {
    card: 'summary',
    title: 'Vihan Goenka',
    description: 'Math-CS at UC San Diego. Builder.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
