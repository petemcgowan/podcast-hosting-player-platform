'use client'

import { usePlayerStore } from '@/store/usePlayerStore'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, SkipForward, SkipBack, Disc } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function TheDeck() {
  const { currentTrack, isPlaying, togglePlay, mood } = usePlayerStore()
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Color Mapping based on Mood
  const accentColor = {
    techno: 'text-red-600 border-red-600',
    house: 'text-cyan-500 border-cyan-500',
    funk: 'text-yellow-500 border-yellow-500',
    neutral: 'text-white border-white',
  }[mood]

  const glow = {
    techno: 'shadow-[0_0_20px_rgba(220,38,38,0.5)]',
    house: 'shadow-[0_0_20px_rgba(6,182,212,0.5)]',
    funk: 'shadow-[0_0_20px_rgba(234,179,8,0.5)]',
    neutral: 'shadow-none',
  }[mood]

  // Handle Audio Logic
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.play()
      else audioRef.current.pause()
    }
  }, [isPlaying, currentTrack])

  if (!currentTrack) return null // Hide if nothing is loaded


  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 w-full z-50 pointer-events-none"
    >
      {/* Hidden Native Audio Element - The Engine */}
      <audio
        ref={audioRef}
        src={currentTrack.url}
        onEnded={() => usePlayerStore.setState({ isPlaying: false })}
      />

      {/*  Visual Interface */}
      <div className={`
        mx-auto w-full md:w-[600px] mb-4
        backdrop-blur-xl bg-black/80
        border-t border-x ${accentColor.split(' ')[1]} ${glow}
        rounded-t-2xl p-4 pointer-events-auto
        flex items-center justify-between
        transition-colors duration-700 ease-in-out
      `}>

        {/* Track Info */}
        <div className="flex items-center gap-4 w-1/3 overflow-hidden">
            <motion.div
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
                <Disc className={`w-8 h-8 ${accentColor.split(' ')[0]}`} />
            </motion.div>
            <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-gray-400">Now Playing</span>
                <span className="text-sm font-bold truncate text-white font-mono uppercase">
                    {currentTrack.title}
                </span>
            </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6 justify-center w-1/3">
           <SkipBack className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
           <button
             onClick={togglePlay}
             className={`p-3 rounded-full border ${accentColor} hover:bg-white/10 transition-all`}
           >
             {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 pl-1" />}
           </button>
           <SkipForward className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
        </div>

        {/* Time / Waveform Placeholder */}
        <div className="hidden md:flex w-1/3 justify-end items-center">
            <div className="flex gap-1 h-4 items-end">
                {/* Fake Visualizer bars */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ height: isPlaying ? [4, 16, 8, 12] : 4 }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                        className={`w-1 bg-current ${accentColor.split(' ')[0]}`}
                    />
                ))}
            </div>
        </div>

      </div>
    </motion.div>
  )
}