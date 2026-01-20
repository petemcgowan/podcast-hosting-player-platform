'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, ListMusic, Download } from 'lucide-react'
import { usePlayerStore } from '@/store/usePlayerStore'
import { Episode } from '@/lib/data'

interface FeedProps {
  episode: Episode
  videoSrc?: string
}

export default function FeedItem({ episode, videoSrc }: FeedProps) {
  const [showTracklist, setShowTracklist] = useState(false)
  const { currentTrack, isPlaying, togglePlay, setTrack } = usePlayerStore()

  const isCurrentTrack = currentTrack?.id === episode.id
  const isTrackPlaying = isCurrentTrack && isPlaying

  const handlePlay = () => {
    if (isCurrentTrack) togglePlay()
    else setTrack({
      id: episode.id,
      title: episode.title,
      artist: `Diplomatic Enjoy [${episode.genre}]`,
      url: episode.audioUrl,
      coverArt: episode.image
    })
  }

  return (
    <div className="mb-32 w-full max-w-4xl mx-auto group">

      {/* Main Media Card */}
      <div className="relative aspect-square md:aspect-[21/9] bg-neutral-900 overflow-hidden border border-white/5">

        {/* Background: Either Video Loop or Blurry Cover Art */}
        <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
           {videoSrc ? (
             <video src={videoSrc} muted loop autoPlay playsInline className="w-full h-full object-cover" />
           ) : (
             <img src={episode.image} alt={episode.title} className="w-full h-full object-cover filter blur-sm scale-110" />
           )}
        </div>

        {/* Foreground: The Record Cover */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-8 p-8 z-10">

            {/* Album Art */}
            <motion.div
                animate={{ rotate: isTrackPlaying ? 360 : 0 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className={`relative w-48 h-48 md:w-64 md:h-64 shadow-2xl rounded-sm overflow-hidden border-2 ${isTrackPlaying ? 'border-white' : 'border-transparent'}`}
            >
                <img src={episode.image} alt={episode.title} className="w-full h-full object-cover" />
                {/* Center Hole for Vinyl Look */}
                <div className="absolute inset-0 m-auto w-4 h-4 bg-black rounded-full border border-white/20"></div>
            </motion.div>

            {/* Controls (Desktop) */}
            <button
                onClick={handlePlay}
                className="hidden md:flex bg-white text-black p-4 rounded-full hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
                {isTrackPlaying ? <Pause size={32} /> : <Play size={32} fill="black" />}
            </button>
        </div>

        {/* Mobile Play Button Overlay */}
        <div className="absolute bottom-4 right-4 md:hidden">
             <button onClick={handlePlay} className="bg-white text-black p-3 rounded-full shadow-lg">
                {isTrackPlaying ? <Pause size={24} /> : <Play size={24} />}
             </button>
        </div>
      </div>

      {/* Metadata & Tracklist Toggle */}
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex justify-between items-start">
            <h2 className="text-2xl md:text-4xl font-bold uppercase leading-none text-white font-mono">
                {episode.title}
            </h2>
            <div className="flex gap-2">
                 {/* Download Button */}
                 <a href={episode.audioUrl} className="p-2 border border-white/20 text-gray-400 hover:text-white hover:border-white transition-colors" title="Download MP3">
                    <Download size={18} />
                 </a>
                 {/* Tracklist Toggle */}
                 <button
                    onClick={() => setShowTracklist(!showTracklist)}
                    className={`p-2 border border-white/20 hover:text-white hover:border-white transition-colors ${showTracklist ? 'bg-white text-black border-white' : 'text-gray-400'}`}
                 >
                    <ListMusic size={18} />
                 </button>
            </div>
        </div>

        {/* SEO-Friendly Tracklist Drawer */}
        <AnimatePresence>
            {showTracklist && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                >
                    <div className="pt-4 pb-8 text-gray-400 font-mono text-sm leading-relaxed border-b border-gray-800">

                        <p className="mb-4 font-bold text-white">/// TRACKLISTING & INFO</p>
                        {episode.tracklist ? (
                             <div dangerouslySetInnerHTML={{ __html: episode.tracklist }} />
                        ) : (
                            <p>No tracklist available.</p>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  )
}