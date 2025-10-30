export default function Footer() {
  return (
    <footer className="border-t border-divider text-xs md:text-sm text-text-light/90 bg-primary-dark">
      <div className="mx-auto max-w-7xl px-4 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
        <div className="flex-1 text-start w-full">
          <p className="mb-1">©2025 CBZBLAW. TODOS OS DIREITOS RESERVADOS.</p>
        </div>
        <div className="flex-1 flex gap-8 justify-end">
          <a href="#" className="hover:opacity-80 tracking-wide uppercase text-xs">Instagram</a>
          <a href="#" className="hover:opacity-80 tracking-wide uppercase text-xs">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}


