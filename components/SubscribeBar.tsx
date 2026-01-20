'use client'
import { SubscribeLink } from '@/lib/data'

interface BarProps {
  links: SubscribeLink[]
  colorClass: string // e.g., "bg-yellow-500", "bg-cyan-400"
}

export default function SubscribeBar({ links, colorClass }: BarProps) {
  return (
    <div className="flex flex-wrap gap-4 items-center my-8">
      {links.map((link) => (
        <a
          key={link.provider}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group transition-transform hover:scale-105"
        >
          {/* add/remove opacity to make it glow on hover.*/}
          <div className={`${colorClass} px-3 py-1.5 rounded-sm opacity-80 group-hover:opacity-100 transition-opacity`}>
            <img
              src={link.icon}
              alt={`Listen on ${link.provider}`}
              // mix-blend-multiply burns the black icon into the colored background
              className="h-6 w-auto object-contain mix-blend-multiply filter contrast-125"
            />
          </div>
        </a>
      ))}
    </div>
  )
}