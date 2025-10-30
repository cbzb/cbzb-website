import Link from 'next/link'

export default function Button({ href = '#', children }) {
  return (
    <Link
      href={href}
      className="inline-block border-2 button-border text-text-light uppercase font-sans tracking-wide px-6 py-3 hover:bg-text-light hover:text-text-dark transition-colors"
    >
      {children}
    </Link>
  )
}


