import { getMixedEpisodes } from '@/lib/rss'
import FeedItem from '@/components/FeedItem'
import SubscribeBar from '@/components/SubscribeBar'
import { PLATFORMS } from '@/lib/data'

export const metadata = {
  title: 'House | Diplomatic Enjoy',
  description: 'Deep House, Lo-Fi, Electronic Soul.'
}

export default async function HousePage() {
  const allMixed = await getMixedEpisodes()

  // LOGIC: Filter for House episodes.
  // We exclude Techno duplicates here to keep the "Vibe" pure.
  const houseEpisodes = allMixed.filter(ep =>
    (ep.genre === 'House' && !ep.title.includes('Techno')) ||
    ep.title.toLowerCase().includes('beach party') ||
    ep.title.toLowerCase().includes('social clubbin') ||
    ep.title.toLowerCase().includes('deep feels')
  )

  return (
    <div className="min-h-screen pt-32 pb-40 px-4 md:px-8 bg-[#050505] selection:bg-cyan-500">

      <div className="max-w-7xl mx-auto mb-16 border-b border-cyan-900/30 pb-8">
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-cyan-900/20 leading-[0.8]">
          HOUSE
        </h1>
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <p className="font-mono text-cyan-500/80 max-w-md text-sm md:text-base">
                /// DEEP / SOUL / LO-FI <br/>
                Swimming pools, sun downers, late night sessions.
            </p>
            {/* Cyan/Blue Buttons */}
            <SubscribeBar links={PLATFORMS.HouseFunk} colorClass="bg-cyan-400" />
        </div>
      </div>

      {/* THE BENTO GRID LAYOUT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
        {houseEpisodes.map((ep) => (
          <FeedItem key={ep.id} episode={ep} />
        ))}
      </div>
    </div>
  )
}