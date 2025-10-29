"use client"

import Link from 'next/link'

export default function MobileMenu({ isOpen, setIsOpen }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-primary-light text-text-dark flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-6 border-b border-divider">
        <div className="font-serif text-2xl">ZBC</div>
        <button
          aria-label="Fechar menu"
          onClick={() => setIsOpen(false)}
          className="text-3xl leading-none"
        >
          ×
        </button>
      </div>

      {/* Nav */}
      <nav className="px-6">
        <ul className="flex flex-col text-3xl font-sans uppercase tracking-wide">
          {[
            { href: '/', label: 'Home' },
            { href: '/sobre', label: 'Sobre' },
            { href: '/casos', label: 'Advogados' },
            { href: '/servicos', label: 'Serviços' },
            { href: '/contato', label: 'Contato' },
          ].map((item) => (
            <li key={item.href} className="border-b border-text-dark/60">
              <Link
                href={item.href}
                className="block py-6"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="mt-auto px-6 py-8 text-sm border-t border-divider">
        <p>SHIS QI 5, CONJUNTO 15, CASA 24 – BRASÍLIA/DF</p>
        <p>CEP: 71.615-150 - TEL: +55 61 3364 0025</p>
        <p>CBZBLAW.COM.BR</p>
        <div className="mt-8 border-t border-divider pt-4 text-xs">
          ©2025 CBZBLAW. TODOS OS DIREITOS RESERVADOS.
        </div>
      </div>
    </div>
  )
}


