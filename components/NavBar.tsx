
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-start mix-blend-difference text-white">

      {/* Logo / Home Link */}
      <Link href="/" className="group">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-black tracking-tighter group-hover:opacity-80 transition-opacity">
            DIPLOMATIC ENJOY
          </h1>
          {/* NEW TAGLINE */}
          <span className="text-[10px] tracking-[0.3em] font-mono opacity-60 text-red-500">
            HOUSE FUNK TECHNO
          </span>
        </div>
      </Link>

      {/* The Menu */}
      <nav className="flex flex-col md:flex-row gap-2 md:gap-8 text-right md:text-left font-mono text-sm tracking-widest">

        <Link
          href="/"
          className={`hover:opacity-100 transition-all ${isActive('/') ? 'opacity-100 font-bold text-red-500' : 'opacity-50'}`}
        >
          FUNK
        </Link>

        <Link
          href="/house"
          className={`hover:opacity-100 transition-all ${isActive('/house') ? 'opacity-100 font-bold text-cyan-400' : 'opacity-50'}`}
        >
          HOUSE
        </Link>

        <Link
          href="/techno"
          className={`hover:opacity-100 transition-all ${isActive('/funk') ? 'opacity-100 font-bold text-yellow-400' : 'opacity-50'}`}
        >
          TECHNO
        </Link>

        {/* Separator for Downloads */}
        <span className="hidden md:inline opacity-20">|</span>

        <Link
          href="/downloads"
          className="opacity-50 hover:opacity-100 transition-opacity"
        >
          DLs
        </Link>

      </nav>
    </header>
  )
}