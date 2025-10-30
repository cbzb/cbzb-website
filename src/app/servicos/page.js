export default function ServicosPage() {
  const areas = [
    'Arbitragem e Mediação',
    'Direito Civil e do Consumidor',
    'Direito da Concorrência',
    'Direito Desportivo',
    'Direito Marítimo e Portuário',
    'Direito de Família e de Sucessões',
    'Direito Imobiliário e da Construção Civil',
    'Direito Médico e Hospitalar',
    'Direito Público',
    'Direito Societário e M&A',
    'Direito Trabalhista',
    'Direito Tributário',
  ]

  return (
    <section className="w-full px-16 md:pl-20 py-16">
      <h1 className="font-sans font-medium text-4xl md:text-5xl mb-8">Serviços</h1>
      <div className="border-t-2 border-divider">
        <ul className="divide-y-2 divide-[var(--color-divider-base)]">
          {areas.map((area) => (
            <li key={area} className="py-5 flex items-start justify-between">
              <span className="font-sans tracking-wide uppercase text-sm md:text-base text-text-light/90">{area}</span>
              <span className="text-text-light/60 text-xs hidden md:block">Saiba mais</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}


