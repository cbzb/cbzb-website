import Button from './Button'

export default function Hero() {
  return (
    <section className="border-b-2 border-divider">
      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-2 min-h-[540px] lg:min-h-[680px]">
        {/* Left column */}
        <div className="bg-primary-dark text-text-light flex flex-col justify-center px-8 lg:px-20 py-20 relative border-r border-divider">
          <h1 className="font-serif font-normal text-5xl leading-tight max-w-2xl">
            Excelência jurídica com olhar estratégico.
          </h1>
          <p className="mt-8 font-sans text-lg text-text-light/80 max-w-xl">
            Expertise em Direito Trabalhista,<br />Empresarial e Desportivo.
          </p>
          <div className="mt-12">
            <Button href="#contato">Agendar consulta</Button>
          </div>
        </div>

        {/* Right column - image */}
        <div className="relative">
          <img
            src="/hero.jpeg"
            alt="Profissionais em reunião"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden relative overflow-hidden">
        <div className="relative bg-primary-dark text-text-light px-5 py-16 min-h-[90dvh] flex flex-col">
          {/* Watermark */}
          <div className="pointer-events-none absolute inset-0 opacity-10 select-none" aria-hidden>
            <div className="absolute -right-12 -top-10 text-[44dvw] font-serif leading-none">ZBC</div>
          </div>

          <div className="mt-10">
            <h1 className="font-serif font-bold text-4xl leading-tight">
              Excelência jurídica com olhar estratégico.
            </h1>
            <p className="mt-5 font-sans text-base text-text-light/85">
              Expertise em Direito Trabalhista, Empresarial e Desportivo.
            </p>
            <div className="mt-8">
              <Button href="#contato">Agendar consulta</Button>
            </div>
          </div>

          <div className="mt-auto flex items-center gap-10 text-sm text-text-light/80 pt-6 border-t border-divider/60">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}


