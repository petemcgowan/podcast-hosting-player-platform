
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import TheDeck from '@/components/TheDeck'
import NavBar from '@/components/NavBar'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://diplomaticenjoy.com'),
  title: {
    default: 'Diplomatic Enjoy | Audio Culture',
    template: '%s | Diplomatic Enjoy',
  },
  description: 'Underground Music Culture. Selected works in Techno, Deep House, and Funk. Original productions and DJ mixes from Berlin, Detroit, and beyond.',
  openGraph: {
    title: 'Diplomatic Enjoy | Underground Audio',
    description: 'House, Funk n Techno podcasts & remixes',
    url: 'https://diplomaticenjoy.com',
    siteName: 'Diplomatic Enjoy',
    images: [
      {
        url: '/images/og_pete_google_image.jpg',
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
    description: 'House, Funk n Techno podcasts & remixes',
    images: ['/images/og_pete_google_image.jpg'],
  },

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
  manifest: '/site.webmanifest',
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

        {/* Audio Player */}
        <TheDeck />

      </body>
    </html>
  )
}