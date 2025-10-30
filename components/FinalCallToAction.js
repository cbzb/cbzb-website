import Link from 'next/link'

export default function FinalCallToAction() {
  return (
    <section className="w-full bg-primary-dark text-text-light px-16 md:pl-20 py-24 border-t-2 border-divider">
      <h2 className="font-serif text-3xl">Pronto para conversar?</h2>
      <p className="mt-4 max-w-3xl text-text-light/80">Agende uma consulta e fale com nossa equipe.</p>
      <div className="mt-8">
        <Link href="/contato" className="border-2 button-border text-text-light uppercase font-sans tracking-wide px-6 py-3 hover:bg-text-light hover:text-text-dark transition-colors">Agendar consulta</Link>
      </div>
    </section>
  )
}


