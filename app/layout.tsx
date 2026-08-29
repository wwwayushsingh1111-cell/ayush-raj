import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Ayush Raj | AI/ML Student & Aspiring Software Engineer',
  description:
    'Portfolio of Ayush Raj — a B.Tech Computer Science Engineering student specializing in Artificial Intelligence & Machine Learning at Lovely Professional University. Explore projects, skills, and learning journey.',
  generator: 'v0.app',
  keywords: [
    'Ayush Raj',
    'AI/ML Student',
    'Software Engineer',
    'Machine Learning',
    'Artificial Intelligence',
    'Lovely Professional University',
    'Portfolio',
  ],
  authors: [{ name: 'Ayush Raj' }],
  openGraph: {
    title: 'Ayush Raj | AI/ML Student & Aspiring Software Engineer',
    description:
      'B.Tech CSE (AI & ML) student building practical AI/ML, IoT and web projects. Explore my portfolio.',
    type: 'website',
    // Replace with your deployed URL and OG image before publishing
    url: 'https://your-portfolio-url.com',
    siteName: 'Ayush Raj Portfolio',
    images: [{ url: '/hero-ai-visual.png', width: 1200, height: 630, alt: 'Ayush Raj Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayush Raj | AI/ML Student & Aspiring Software Engineer',
    description: 'B.Tech CSE (AI & ML) student building practical AI/ML, IoT and web projects.',
    images: ['/hero-ai-visual.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f7fb' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0d17' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
