export default function AdvogadosPage() {
  const advogados = [
    { nome: 'Terence Zveiter', foto: '/Fotos/Terence.jpg' },
    { nome: 'Leonardo Caputo', foto: '/Fotos/Leonardo.jpg' },
    { nome: 'Igor Barbosa', foto: '/Fotos/Igor.jpg' },
    { nome: 'Aline Loureiro', foto: '/Fotos/Aline.jpg' },
    { nome: 'João Victor', foto: '/Fotos/João Victor.jpg' },
    { nome: 'Fabiana Faria', foto: '/Fotos/Fabiana.jpg' },
    { nome: 'Alexandre Alves', foto: '/Fotos/Alexandre.JPG' },
    { nome: 'Gabriel Rodrigues', foto: '/Fotos/Gabriel.jpg' },
    { nome: 'Vítor Düvelius', foto: '/Fotos/Vitor.jpg' },
  ]

  return (
    <section className="w-full px-16 md:ml-20 py-16">
      <h1 className="font-sans font-medium text-4xl md:text-5xl mb-8">Advogados</h1>
      <div className="border-t-2 border-divider pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advogados.map((a) => (
            <article key={a.nome} className="border-2 border-divider">
              <div className="aspect-[4/3] bg-primary-dark/40">
                <img src={a.foto} alt={a.nome} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 border-t-2 border-divider">
                <h3 className="font-sans font-medium uppercase tracking-wide text-sm">{a.nome}</h3>
                <p className="mt-2 text-text-light/70 text-sm">Bio e foto a confirmar.</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-text-light/60">Serão até 10 perfis. Conteúdos e fotos pendentes serão adicionados assim que fornecidos.</p>
      </div>
    </section>
  )
}


