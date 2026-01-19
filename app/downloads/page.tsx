import { REMIXES } from '@/lib/data'
import ArchiveRow from '@/components/ArchiveRow'

// Placeholder for your original productions (House/Techno)
// You can paste your iframe HTML strings here later
const ORIGINALS = [
  {
    title: "Original Techno Productions",
    // Example: Replace this string with your real Spotify embed URL
    embedUrl: "https://open.spotify.com/embed/artist/0hFzAYqKLJFEBp5jd8RhmK?utm_source=generator&theme=0"
  },
  // Add another object here if you have a specific Soundcloud playlist embed
]

export const metadata = {
  title: 'Archive | Diplomatic Enjoy',
  description: 'DJ Edits, White Labels, and Original Productions.'
}

export default function DownloadsPage() {
  return (
    <div className="min-h-screen pt-32 pb-40 px-4 md:px-12 bg-[#080808] selection:bg-white selection:text-black">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto mb-20 border-b border-white/20 pb-8">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-2">
          THE VAULT
        </h1>
        <p className="font-mono text-gray-400">
          /// WHITE LABELS / EDITS / REMIXES <br />
          Free downloads for DJ use.
        </p>
      </div>

      {/* SECTION 1: FUNK & DISCO EDITS (The List) */}
      <div className="max-w-4xl mx-auto mb-32">
        <h2 className="text-sm font-mono text-red-500 mb-8 tracking-[0.2em] border-l-2 border-red-500 pl-4">
          01 // FUNK & BREAKS EDITS
        </h2>

        <div className="flex flex-col">
          {REMIXES.map((track, index) => (
          <ArchiveRow
  key={track.id}
  id={track.id} // <--- Added ID prop
  index={index}
  artist={track.artist}
  song={track.song}
  link={track.link}
  audioUrl={(track as any).audioUrl} // <--- Pass the direct MP3 link if you add it later
  image={track.image}
/>
          ))}
        </div>
      </div>

      {/* SECTION 2: ORIGINAL PRODUCTIONS (Embeds) */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-cyan-500 mb-8 tracking-[0.2em] border-l-2 border-cyan-500 pl-4">
          02 // ORIGINAL PRODUCTIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ORIGINALS.map((item, i) => (
            <div key={i} className="bg-neutral-900 border border-white/5 p-4 rounded-sm">
                <iframe
                    style={{ borderRadius: '12px' }}
                    src={item.embedUrl}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}