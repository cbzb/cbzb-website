"use client"

import { motion } from "framer-motion"
import { fadeIn, slideUp, smoothTransition } from "../../../components/animations"

export default function LeonardoPage() {
  const especialidades = ['Tribunais Superiores', 'Trabalhista', 'Desportivo', 'Civil']

  return (
    <section className="w-full bg-primary-dark text-text-light pl-10 pr-10 md:pl-28 md:pr-[80px] py-16">
      <motion.h1
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={smoothTransition}
        className="font-title font-light text-4xl md:text-5xl mb-8"
      >
        Leonardo Caputo Bastos Zveiter
      </motion.h1>
      <motion.div
        initial={slideUp.initial}
        animate={slideUp.animate}
        transition={{ ...smoothTransition, delay: 0.1 }}
        className="border-t-2 border-divider pt-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-[2/3] bg-primary-dark/40 flex items-center justify-center border-2 border-divider">
            <img src="/Fotos/Leonardo.png" alt="Leonardo Caputo Bastos Zveiter" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="inline-block mb-4 text-[11px] uppercase tracking-wide px-2 py-1 border border-[var(--color-divider-base)] bg-[var(--color-divider-base)]/20 text-[var(--color-divider-base)]">
              Sócio
            </span>
            <h2 className="font-title font-light text-2xl mb-6">Especialidades</h2>
            <ul className="space-y-2 text-sm text-text-light/80 list-disc list-inside">
              {especialidades.map((esp) => (
                <li key={esp}>{esp}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

