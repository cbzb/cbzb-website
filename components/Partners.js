import Link from 'next/link'
import PartnerCard from './PartnerCard'

export default function Partners() {
  return (
    <section className="w-full bg-primary-dark text-text-light px-16 md:pl-20 py-24">
      <h2 className="font-serif text-3xl">Conheça os Sócios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <PartnerCard nome="TERENCE ZVEITER" cargo="Sócio" />
        <PartnerCard nome="LEONARDO CAPUTO BASTOS ZVEITER" cargo="Sócio" />
        <PartnerCard nome="IGOR BARBOSA FARIA" cargo="Sócio" />
      </div>
      <div className="mt-10">
        <Link href="/advogados" className="font-sans uppercase tracking-wide text-sm underline">Conheça nossa equipe completa</Link>
      </div>
    </section>
  )
}


