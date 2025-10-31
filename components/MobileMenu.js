"use client"

import Link from 'next/link'

export default function MobileMenu({ isOpen, setIsOpen }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-primary-light text-[var(--color-divider-base)] flex flex-col font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-10 py-12 ">
        <div>
          <Link href="/" onClick={() => setIsOpen(false)}>
            <img src="/icone_black.png" alt="ZBC" className="h-[96px] w-auto" />
          </Link>
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
      <nav className="px-10 flex-1">
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
      <div className=" px-10 py-8">
        <div className="flex flex-col gap-4 text-sm text-black/80">
          {/* Informações de contato */}
          <div className="flex flex-col gap-2">
            
            <p className="text-sm leading-relaxed">
              SHIS QI 5, Conjunto 15, Casa 24<br />
              Brasília/DF — CEP: 71.615-150<br />
              Tel: +55 (61) 3364-0025<br />
              cbzb.com.br
            </p>
          </div>
          
          {/* Redes sociais */}
          <div className="flex flex-col gap-2 mt-4">
            
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/zb.law/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-70 tracking-wide uppercase text-xs transition-opacity"
              >
                Instagram
              </a>
              <a 
                href="https://www.linkedin.com/company/zblaw/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:opacity-70 tracking-wide uppercase text-xs transition-opacity"
              >
                LinkedIn
              </a>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}


