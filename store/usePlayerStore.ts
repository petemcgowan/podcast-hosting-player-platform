import { create } from 'zustand'

export type Track = {
  id: string
  title: string
  artist: string
  url: string // S3 Cloudfront URL
  coverArt: string
}

interface PlayerState {
  currentTrack: Track | null
  isPlaying: boolean
  volume: number
  mood: 'techno' | 'house' | 'funk' | 'neutral'
  setTrack: (track: Track) => void
  togglePlay: () => void
  setMood: (mood: 'techno' | 'house' | 'funk' | 'neutral') => void
}

export const usePlayerStore = create<PlayerState>((set) => ({
  currentTrack: null,
  isPlaying: false,
  volume: 1,
  mood: 'neutral',
  setTrack: (track) => set({ currentTrack: track, isPlaying: true }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setMood: (mood) => set({ mood }),
}))