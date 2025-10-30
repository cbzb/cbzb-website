export default function SobrePage() {
  return (
    <section className="w-full px-16 md:ml-20 py-16">
      <h1 className="font-sans font-medium text-4xl md:text-5xl mb-8">Sobre</h1>
      <div className="border-t-2 border-divider pt-8 text-text-light/80 leading-relaxed">
        <p className="max-w-3xl">
          Conteúdo institucional do escritório será detalhado conforme materiais do cliente. 
          Esta seção apresentará história, valores, atuação e diferenciais, com imagens e destaques seguindo o design.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-text-light/70">
          <div className="border-t-2 border-divider pt-6">
            <h2 className="font-sans font-medium tracking-wide uppercase text-sm mb-3">Missão</h2>
            <p>Texto a definir pelo cliente.</p>
          </div>
          <div className="border-t-2 border-divider pt-6">
            <h2 className="font-sans font-medium tracking-wide uppercase text-sm mb-3">Visão</h2>
            <p>Texto a definir pelo cliente.</p>
          </div>
          <div className="border-t-2 border-divider pt-6">
            <h2 className="font-sans font-medium tracking-wide uppercase text-sm mb-3">Valores</h2>
            <p>Texto a definir pelo cliente.</p>
          </div>
        </div>
      </div>
    </section>
  )
}


