import Button from './Button'

export default function Hero() {
  return (
    <section className="border-b-2 border-divider">
      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-2 min-h-[540px] lg:min-h-[680px]">
        {/* Left column */}
        <div className="bg-primary-dark text-text-light flex flex-col justify-center px-10 md:pl-28 md:pr-0 lg:pl-28 lg:pr-0 py-20 relative border-r border-divider">
          <h1 className="font-sans font-medium text-5xl leading-tight max-w-2xl animate-fade-up">
            Excelência jurídica com olhar estratégico.
          </h1>
          <p className="mt-8 font-sans text-lg text-text-light/80 max-w-xl animate-fade-up" style={{animationDelay:'120ms'}}>
            Expertise em Direito Trabalhista,<br />Empresarial e Desportivo.
          </p>
          <div className="mt-12 animate-fade" style={{animationDelay:'240ms'}}>
            <Button href="/contato">Agendar consulta</Button>
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
      <div className="md:hidden relative overflow-visible">
        <div className="relative bg-primary-dark text-text-light px-10 py-16 min-h-[90dvh] flex flex-col overflow-visible">
          {/* Watermark image only on mobile hero (grande e parcialmente visível) */}
          <img
            src="/icone_black.png"
            alt="Marca d'água"
            className="pointer-events-none select-none fixed right-[-30%] top-[-20%] w-[180%] h-[130%] opacity-35 object-cover"
            style={{ zIndex: 9999 }}
            aria-hidden
          />

          <div className="mt-4">
            <h1 className="font-sans font-medium text-5xl leading-tight">
              Excelência jurídica com olhar estratégico.
            </h1>
            <p className="mt-5 font-sans text-lg text-text-light/80">
              Expertise em Direito Trabalhista,<br />Empresarial e Desportivo.
            </p>
            <div className="mt-8">
              <Button href="/contato">Agendar consulta</Button>
            </div>
          </div>

          {/* Social links removidos: já presentes no Footer */}
        </div>
      </div>
    </section>
  )
}


