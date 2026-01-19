// app/layout.tsx

import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import TheDeck from '@/components/TheDeck'
import NavBar from '@/components/NavBar' // <--- IMPORT THIS

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://diplomaticenjoy.com'),
  title: {
    default: 'Diplomatic Enjoy | Leftfield Audio Culture',
    template: '%s | Diplomatic Enjoy', // e.g., "Techno | Diplomatic Enjoy"
  },
  description: 'Underground Music Culture. Selected works in Techno, Deep House, and Funk. Original productions and DJ mixes from Berlin, Detroit, and beyond.',
  openGraph: {
    title: 'Diplomatic Enjoy | Underground Audio',
    description: 'Curated Techno, House, and Funk. No pop. No major labels.',
    url: 'https://diplomaticenjoy.com',
    siteName: 'Diplomatic Enjoy',
    images: [
      {
        url: '/images/og_pete_google_image.jpg', // <--- You need to create this! 1200x630px
        width: 1200,
        height: 630,
        alt: 'Diplomatic Enjoy Audio Visuals',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diplomatic Enjoy',
    description: 'Leftfield Audio & Visuals.',
    images: ['/images/og_pete_google_image.jpg'], // Reuse the same image
  },
  // NEW: The complete icon definition
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest', // Points to the file you renamed in /public
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  'name': 'Diplomatic Enjoy',
  'url': 'https://diplomaticenjoy.com',
  'genre': ['Techno', 'House', 'Funk'],
  'sameAs': [
    'https://www.instagram.com/diplomaticenjoy',
    'https://soundcloud.com/diplomaticenjoy',
    'https://open.spotify.com/artist/0hFzAYqKLJFEBp5jd8RhmK'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.className} bg-[#050505] text-white overflow-x-hidden selection:bg-red-500 selection:text-white`}>

        {/* 1. The Navbar goes here, forcing it to be on every page */}
        <NavBar />
        {/* Inject JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main className="min-h-screen relative z-10">
            {children}
        </main>

        {/* Noise overlay for that analog feel */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        {/* The Audio Player */}
        <TheDeck />

      </body>
    </html>
  )
}