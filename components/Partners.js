"use client"

import { motion } from "framer-motion"
import Link from 'next/link'
import PartnerCard from './PartnerCard'
import { fadeIn, slideUp, smoothTransition } from "../components/animations"

export default function Partners() {
  const partners = [
    {
      nome: "TERENCE ZVEITER",
      cargo: "Sócio",
      foto: "/Fotos/Terence.png",
      especialidades: ["Civil", "Trabalhista", "Tributário", "Arbitragem e Mediação"]
    },
    {
      nome: "LEONARDO CAPUTO BASTOS ZVEITER",
      cargo: "Sócio",
      foto: null,
      especialidades: ["Civil", "Trabalhista", "Desportivo", "Tribunais Superiores"]
    },
    {
      nome: "IGOR BARBOSA FARIA",
      cargo: "Sócio",
      foto: null,
      especialidades: ["Tributário", "Público", "Família e Sucessões", "Societário"]
    }
  ]

  return (
    <section className="w-full bg-primary-dark text-text-light pl-10 pr-10 md:pl-28 md:pr-[80px] py-24">
      <motion.h2
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={smoothTransition}
        className="font-sans font-medium text-3xl"
      >
        Conheça os Sócios
      </motion.h2>
      <motion.div
        initial={slideUp.initial}
        animate={slideUp.animate}
        transition={{ ...smoothTransition, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
      >
        {partners.map((partner, index) => (
          <motion.div
            key={partner.nome}
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...smoothTransition, delay: 0.2 + index * 0.1 }}
          >
            <PartnerCard
              nome={partner.nome}
              cargo={partner.cargo}
              foto={partner.foto}
              especialidades={partner.especialidades}
            />
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={slideUp.initial}
        animate={slideUp.animate}
        transition={{ ...smoothTransition, delay: 0.4 }}
        className="mt-10"
      >
        <Link href="/advogados" className="font-sans uppercase tracking-wide text-sm underline">Conheça nossa equipe completa</Link>
      </motion.div>
    </section>
  )
}


