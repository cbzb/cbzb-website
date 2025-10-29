"use client"

import { useState } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-divider">
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between mx-auto max-w-7xl px-6 lg:px-10 py-6">
        <div className="font-serif text-text-light/90 text-lg tracking-wide pr-6 lg:pr-10">
          CAPUTO BASTOS ZVEITER & BARBOSA
        </div>
        <nav className="font-sans uppercase text-sm tracking-wide text-text-light/90 border-x border-divider px-8 lg:px-12">
          <ul className="flex gap-10">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="/casos">Advogados</Link></li>
            <li><Link href="/servicos">Serviços</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </nav>
        <div className="font-serif text-text-light/80 pl-6 lg:pl-10">ZBC</div>
      </div>

      {/* Mobile */}
      <div className="md:hidden mx-auto max-w-7xl px-4 py-5 flex items-center justify-between">
        <div className="font-serif text-text-light/90">ZBC</div>
        <button
          aria-label="Abrir menu"
          className="flex flex-col gap-1.5 items-end"
          onClick={() => setIsMenuOpen(true)}
        >
          <span className="block h-0.5 w-7 bg-text-light"></span>
          <span className="block h-0.5 w-7 bg-text-light"></span>
          <span className="block h-0.5 w-7 bg-text-light"></span>
        </button>
      </div>

      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </header>
  )
}


