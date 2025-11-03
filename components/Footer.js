export default function Footer() {
  return (
    <footer className="border-t-2 border-divider text-xs md:text-sm text-text-light/90 bg-primary-dark w-full">
      <div className="w-full pl-10 pr-10 md:pl-28 md:pr-[80px] py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
        {/* Copyright */}
        <div className="text-center md:text-start w-full md:flex-1">
          <p className="mb-1">
            ©2025 CBZB TODOS OS DIREITOS RESERVADOS
            <span className=" md:inline"> |<a href="http://coruss.com.br" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 "> Desenvolvido por Coruss</a></span>
          </p>
        </div>
        {/* Redes sociais (visível em todas as larguras) */}
        <div className="flex gap-4 items-center self-center md:self-auto md:ml-auto">
          <a href="https://www.instagram.com/zb.law/" target="_blank" rel="noopener noreferrer" className="flex items-center" aria-label="Instagram">
            <img src="https://img.icons8.com/ios-filled/100/instagram-new--v1.png" alt="Instagram" className="w-6 h-6 invert shrink-0" />
          </a>
          <a href="https://www.linkedin.com/company/zblaw/" target="_blank" rel="noopener noreferrer" className=" flex items-center" aria-label="LinkedIn">
            <img src="https://img.icons8.com/ios-filled/100/linkedin.png" alt="LinkedIn" className="w-6 h-6 invert shrink-0" />
          </a>
        </div>
      </div>
    </footer>
  )
}


