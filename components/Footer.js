export default function Footer() {
  return (
    <footer className="border-t-2 border-divider text-xs md:text-sm text-text-light/90 bg-primary-dark w-full">
      <div className="w-full pl-10 pr-10 md:pl-28 md:pr-[80px] py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
        {/* Mobile: redes sociais primeiro */}
        <div className="flex gap-8 md:hidden">
          <a href="https://www.instagram.com/zb.law/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 tracking-wide uppercase text-xs">Instagram</a>
          <a href="https://www.linkedin.com/company/zblaw/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 tracking-wide uppercase text-xs">LinkedIn</a>
        </div>
        {/* Mobile: copyright abaixo */}
        <div className="text-center md:text-start w-full md:flex-1 md:flex-initial">
          <p className="mb-1">
            ©2025 CBZB TODOS OS DIREITOS RESERVADOS
            <span className="hidden md:inline"> |<a href="http://coruss.com.br" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 "> Desenvolvido com ❤️ por Coruss</a></span>
          </p>
        </div>
        {/* Desktop: redes sociais à direita */}
        <div className="hidden md:flex flex-1 gap-8 justify-end">
          <a href="https://www.instagram.com/zb.law/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 tracking-wide uppercase text-xs">Instagram</a>
          <a href="https://www.linkedin.com/company/zblaw/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 tracking-wide uppercase text-xs">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}


