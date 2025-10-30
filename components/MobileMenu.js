"use client"

import Link from 'next/link'

export default function MobileMenu({ isOpen, setIsOpen }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-primary-light text-text-dark flex flex-col font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-7 py-7 border-b-2 border-divider">
        <div>
          <img src="/icone.png" alt="ZBC" className="h-[32px] w-auto" />
        </div>
        <button
          aria-label="Fechar menu"
          onClick={() => setIsOpen(false)}
          className="text-4xl leading-none pr-1 text-text-dark hover:opacity-70"
        >
          ×
        </button>
      </div>
      {/* Nav */}
      <nav className="px-7">
        <ul className="flex flex-col text-2xl font-sans uppercase tracking-widest">
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
                className="block py-7 px-1 hover:text-primary-dark transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Footer */}
      <div className="mt-auto px-7 py-8 text-sm border-t-2 border-divider">
        <div>
          <p>SHIS QI 5, CONJUNTO 15, CASA 24 – BRASÍLIA/DF</p>
          <p>CEP: 71.615-150 - TEL: +55 61 3364 0025</p>
          <p>CBZBLAW.COM.BR</p>
        </div>
        <div className="mt-8 border-t-2 border-divider pt-3 text-xs text-text-dark/80">
          ©2025 CBZBLAW. TODOS OS DIREITOS RESERVADOS.
        </div>
      </div>
    </div>
  )
}


