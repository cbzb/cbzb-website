import Link from 'next/link'

export default function Card({ title, href = '#' }) {
  return (
    <Link href={href} className="group block border-2 border-divider p-6 bg-transparent hover:bg-primary-dark/5 transition-colors">
      <div className="flex items-center justify-between">
        <h3 className="font-sans uppercase tracking-wide text-sm text-text-dark group-hover:text-text-dark/90">{title}</h3>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-text-dark/70">
          <path d="M8 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>
  )
}


