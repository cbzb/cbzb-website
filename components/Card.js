"use client"

import Link from 'next/link'

export default function Card({ title, href = '#' }) {
  return (
    <div className="border-2 border-divider p-6 h-full flex flex-col group hover:bg-primary-dark/5 transition-colors">
      <h3 className="font-sans tracking-wide uppercase text-sm md:text-base text-text-light mb-6 flex-1 transition-colors">
        {title}
      </h3>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-[var(--color-divider-base)] hover:text-[var(--color-primary-light)] font-sans uppercase tracking-wide text-xs underline transition-colors group-hover:gap-3"
      >
        Saiba mais
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  )
}


