'use client'
import { Download, Play, Pause, BarChart3 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { usePlayerStore } from '@/store/usePlayerStore'

interface RowProps {
  id: string
  artist: string
  song: string
  link: string //  Download Link (e.g. Bitly)
  audioUrl?: string //  Direct MP3 Link
  image: string
  index: number
}

export default function ArchiveRow({ id, artist, song, link, audioUrl, image, index }: RowProps) {
  const [isHovered, setHovered] = useState(false)
  const { currentTrack, isPlaying, togglePlay, setTrack } = usePlayerStore()

  const isCurrent = currentTrack?.id === id
  const isRowPlaying = isCurrent && isPlaying

  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault() // Stop it from opening the link if we clicked the play area

    if (isCurrent) {
      togglePlay()
    } else {
      setTrack({
        id: id,
        title: song,
        artist: artist,
        url: audioUrl || link, // Tries audioUrl first, then falls back to the bitly link
        coverArt: image
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex items-center justify-between border-b border-white/10 py-6 px-4 transition-colors ${isCurrent ? 'bg-white/10 border-white/30' : 'hover:bg-white/5'}`}
    >
      {/* THE HOVER IMAGE REVEAL (Kept from previous step) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 -top-12 z-50 pointer-events-none hidden md:block drop-shadow-2xl"
          >
             <div className="w-64 h-64 bg-black border-2 border-white/20 p-1 rounded-sm shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                <img
                  src={image}
                  alt={song}
                  className="w-full h-full object-cover"
                />
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-6 z-10 w-full md:w-auto overflow-hidden">
        {/* PLAY BUTTON */}
        <button
          onClick={handlePlay}
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all
            ${isCurrent ? 'bg-white text-black scale-110' : 'bg-transparent text-gray-500 hover:text-white border border-white/20 hover:border-white'}
          `}
        >
          {isRowPlaying ? (
            <BarChart3 size={18} className="animate-pulse" /> // Equalizer Icon when playing
          ) : (
            <Play size={18} fill={isCurrent ? "black" : "currentColor"} className={isCurrent ? "" : "ml-1"} />
          )}
        </button>

        <div className="flex flex-col truncate pr-4">
          <span className={`text-xl md:text-2xl font-bold uppercase tracking-tight transition-colors truncate ${isCurrent ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
            {song}
          </span>
          <span className="text-sm font-mono text-gray-500 uppercase tracking-widest truncate">
            {artist}
          </span>
        </div>
      </div>

      {/* DOWNLOAD BUTTON  */}
      <div className="flex items-center gap-4 z-10 shrink-0 ml-auto">
        <span className="hidden md:inline text-xs font-mono text-gray-600 group-hover:text-white transition-colors uppercase">
            [ Download ]
        </span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-white/10 rounded-full hover:border-white hover:bg-white hover:text-black transition-all"
        >
          <Download size={20} />
        </a>
      </div>
    </motion.div>
  )
}