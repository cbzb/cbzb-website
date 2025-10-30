export default function AdvogadosPage() {
  const advogados = [
    { nome: 'Terence Zveiter', foto: '/Fotos/Terence.jpg', resumo: 'Sócio. Especialista em Direito Civil, Tributário e Econômico. Atuação: Tribunais Superiores, Trabalhista, Concorrência, Arbitragem e Mediação, Desportivo, Médico/Hospitalar, Público, Societário e M&A, Civil/Consumidor e Advocacy.' },
    { nome: 'Leonardo Caputo', foto: null, resumo: 'Sócio. Mestrando no IDP. Atuação: Civil, Trabalhista, Desportivo, Consumidor, Médico Hospitalar e Tribunais Superiores.' },
    { nome: 'Igor Barbosa', foto: null, resumo: 'Sócio. Especialista pelo IBET. Atuação: Público, Família e Sucessões, Civil/Consumidor, Tributário e Advocacy.' },
    { nome: 'Aline Loureiro', foto: '/Fotos/Aline.jpg', resumo: 'Associada. Atuação: Imobiliário e Civil/Consumidor.' },
    { nome: 'João Víctor Pereira da Silva', foto: '/Fotos/João Victor.jpg', resumo: 'Associado. Atuação: Civil e Consumidor.' },
    { nome: 'Fabiana da Silva Lelis Faria', foto: null, resumo: 'Associada. Especialista em Direito e Processo do Trabalho. Atuação: Trabalho.' },
    { nome: 'Alexandre Gomes da Silva Alves', foto: '/Fotos/Alexandre.JPG', resumo: 'Associado. Atuação: Societário, Civil e Tributário.' },
    { nome: 'Gabriel Cunha Rodrigues', foto: null, resumo: 'Associado. Especialista em Trabalho, Civil e Processual Civil. Atuação: Trabalho, Civil e Tribunais Superiores.' },
    { nome: 'Vítor Fortini Düvelius', foto: '/Fotos/Vitor.jpg', resumo: 'Associado. Especialista em Direito do Trabalho e prática em Tribunais. Atuação: Tribunais Superiores, Trabalhista, Civil/Consumidor e Compliance.' },
  ]

  return (
    <section className="w-full px-16 md:pl-20 py-16">
      <h1 className="font-sans font-medium text-4xl md:text-5xl mb-8">Advogados</h1>
      <div className="border-t-2 border-divider pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advogados.map((a) => (
            <article key={a.nome} className="border-2 border-divider">
              <div className="aspect-[4/3] bg-primary-dark/40 flex items-center justify-center">
                {a.foto ? (
                  <img src={a.foto} alt={a.nome} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-text-light/60 font-sans uppercase tracking-wide text-sm">Foto indisponível</div>
                )}
              </div>
              <div className="p-5 border-t-2 border-divider">
                <h3 className="font-sans font-medium uppercase tracking-wide text-sm">{a.nome}</h3>
                <p className="mt-2 text-text-light/70 text-sm">{a.resumo}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-text-light/60">Serão até 10 perfis. Conteúdos e fotos pendentes serão adicionados assim que fornecidos.</p>
      </div>
    </section>
  )
}


