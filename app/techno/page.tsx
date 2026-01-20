import { getTechnoEpisodes } from '@/lib/rss'
import FeedItem from '@/components/FeedItem'
import SubscribeBar from '@/components/SubscribeBar'
import { PLATFORMS } from '@/lib/data'

export const metadata = {
  title: 'Techno',
  description: 'Pure Underground Techno. Warehouse vibes from Berlin and Detroit.',
}

export default async function TechnoPage() {
  const episodes = await getTechnoEpisodes()

  return (
    <div className="min-h-screen pt-32 pb-40 px-4 md:px-8 bg-[#050505] selection:bg-red-500">

      <div className="max-w-7xl mx-auto mb-16 border-b border-white/10 pb-8">
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-black/20 leading-[0.8]">
          TECHNO
        </h1>
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <p className="font-mono text-gray-400 max-w-md text-sm md:text-base">
                /// PURE UNDERGROUND <br/>
                Berlin / Detroit / Warehouse / Industrial.
            </p>
            <SubscribeBar links={PLATFORMS.Techno} colorClass="bg-red-600" />
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
        {episodes.map((ep) => (
          <FeedItem key={ep.id} episode={ep} />
        ))}
      </div>
    </div>
  )
}