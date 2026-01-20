import { getMixedEpisodes } from '@/lib/rss'
import FeedItem from '@/components/FeedItem'
import SubscribeBar from '@/components/SubscribeBar'
import { PLATFORMS } from '@/lib/data'

export const metadata = {
  title: 'Funk',
  description: 'Rare Groove, 70s Soul, and Hip Hop beats. Digging in the crates.',
}
export default async function Home() {
  const allMixed = await getMixedEpisodes()

  // Filter for Funk + Hip Hop
  const funkEpisodes = allMixed.filter(ep =>
    ep.genre === 'Funk' ||
    ep.title.toLowerCase().includes('funk') ||
    ep.title.toLowerCase().includes('stones throw')
  )

  return (
    <div className="min-h-screen pt-32 pb-40 px-4 md:px-8 bg-[#050505] selection:bg-yellow-500">

      <div className="max-w-7xl mx-auto mb-16 border-b border-yellow-900/30 pb-8">
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 to-yellow-900/20 leading-[0.8]">
          FUNK
        </h1>
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <p className="font-mono text-yellow-500/80 max-w-md text-sm md:text-base">
                /// RARE GROOVE / 70s / BREAKS <br/>
                Stones Throw vibes. Dusty crates and analog warmth.
            </p>
            {/* Theme Colored Buttons */}
            <SubscribeBar links={PLATFORMS.HouseFunk} colorClass="bg-yellow-500" />
        </div>
      </div>

      {/*  Bento Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
        {funkEpisodes.map((ep) => (
          <FeedItem key={ep.id} episode={ep} />
        ))}
      </div>
    </div>
  )
}