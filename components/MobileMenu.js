"use client"

import Link from 'next/link'

export default function MobileMenu({ isOpen, setIsOpen }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-primary-light text-[var(--color-divider-base)] flex flex-col font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-10 py-12 ">
        <div>
          <img src="/icone_black.png" alt="ZBC" className="h-[96px] w-auto" />
        </div>
        <button
          aria-label="Fechar menu"
          onClick={() => setIsOpen(false)}
          className="text-6xl text-black/80 leading-none pr-1 hover:opacity-70"
        >
          ×
        </button>
      </div>
      {/* Nav */}
      <nav className="px-12">
        <ul className="flex flex-col text-xl text-black font-sans uppercase tracking-widest">
          {[
            { href: '/', label: 'Home' },
            { href: '/sobre', label: 'Sobre' },
            { href: '/advogados', label: 'Advogados' },
            { href: '/servicos', label: 'Serviços' },
            { href: '/contato', label: 'Contato' },
          ].map((item) => (
            <li key={item.href} className="border-b-2 border-divider">
              <Link
                href={item.href}
                className="block py-7 px-1 hover:text-[var(--color-text-dark)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Footer */}
      
    </div>
  )
}


