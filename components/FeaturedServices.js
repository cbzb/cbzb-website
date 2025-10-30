import Link from 'next/link'
import Card from './Card'

export default function FeaturedServices() {
  return (
    <section className="w-full bg-primary-dark text-primary-light px-16 md:pl-20 py-24">
      <h2 className="font-serif text-3xl">Nossas Especialidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <Card title="Direito Trabalhista" href="/servicos" />
        <Card title="Direito Societário e M&A" href="/servicos" />
        <Card title="Direito Desportivo" href="/servicos" />
      </div>
      <div className="mt-10">
        <Link href="/servicos" className="font-sans uppercase tracking-wide text-sm underline">Ver todas as áreas de atuação</Link>
      </div>
    </section>
  )
}


