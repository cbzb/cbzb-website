"use client"

import { useState } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // --- 1. AJUSTES DE BORDA ---
  const borderColor = "border-secondary"
  const borderThickness = {
    horizontal: "border-b-2", // Engrossado para 2px
    vertical: "border-r-1",   // Engrossado para 2px
    verticalLeft: "border-l" // Engrossado para 2px
  }
  
  // --- 2. AJUSTE DE PADDING ("Borda" lateral) ---
  // Aumentado de px-12 para px-16 (4rem) para mais respiro
  const globalPaddingX = "px-10" 

  return (
    <header className="w-full relative bg-primary-dark">
      
      {/* --- Desktop Header --- */}
      <div className="hidden md:grid grid-cols-[auto_1fr_auto] items-stretch border-b-2 border-secondary ml-20">
          
        {/* Coluna 1: Logo Principal */}
        {/* Aplicado padding 'pl-0 pr-16' e borda 'border-r-2' */}
        <div className={`pl-0 pr-16 pt-6 pb-6 ${borderThickness.vertical} ${borderColor}`}>
          <img src="/logo.png" alt="Caputo Bastos Zveiter & Barbosa" className="h-[65px] w-auto ml-[-12px]" />
          
          {/* Linha horizontal removida conforme solicitação */}
        </div>

        {/* Coluna 2: Navegação Centralizada */}
        <nav className="font-sans text-xs xl:text-sm tracking-widest text-text-light/90 flex items-center justify-center">
          <ul className="flex items-center gap-10 xl:gap-14 uppercase">
            <li><Link href="/" className="hover:text-text-light/100 transition-colors">Home</Link></li>
            <li><Link href="/sobre" className="hover:text-text-light/100 transition-colors">Sobre</Link></li>
            <li><Link href="/advogados" className="hover:text-text-light/100 transition-colors">Advogados</Link></li>
            <li><Link href="/servicos" className="hover:text-text-light/100 transition-colors">Serviços</Link></li>
            <li><Link href="/contato" className="hover:text-text-light/100 transition-colors">Contato</Link></li>
          </ul>
        </nav>

        {/* Coluna 3: Monograma ZBC */}
        {/* Borda à esquerda encostada no ícone e ícone próximo da direita */}
        <div className={`relative flex items-center justify-end pl-4 pr-2 border-l-2 ${borderColor}`}>
          <img src="/icone.png" alt="ZBC" className="h-[70px] w-auto" />
        </div>
          
      </div>

      {/* --- Mobile Header --- */}
      {/* Aplicado 'px-16' no mobile também */}
      <div className={`md:hidden ${globalPaddingX} py-12 flex items-center justify-between`}>
        <div>
          <img src="/icone.png" alt="ZBC" className="h-[96px] w-auto" />
        </div>
        <button
          aria-label="Abrir menu"
          className="flex flex-col gap-2.5 items-end"
          onClick={() => setIsMenuOpen(true)}
        >
          <span className="block h-0.5 w-10 bg-[var(--color-divider-base)]"></span>
          <span className="block h-0.5 w-10 bg-[var(--color-divider-base)]"></span>
          <span className="block h-0.5 w-10 bg-[var(--color-divider-base)]"></span>
        </button>
      </div>

      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </header>
  )
}