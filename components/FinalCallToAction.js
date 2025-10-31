"use client"

import { motion } from "framer-motion"
import Link from 'next/link'
import { fadeIn, slideUp, smoothTransition } from "../components/animations"

export default function FinalCallToAction() {
  return (
    <section className="w-full bg-primary-dark text-text-light pl-10 pr-10 md:pl-28 md:pr-[80px] py-24 border-t-2 border-divider">
      <motion.h2
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={smoothTransition}
        className="font-sans font-medium text-3xl"
      >
        Pronto para conversar?
      </motion.h2>
      <motion.p
        initial={slideUp.initial}
        animate={slideUp.animate}
        transition={{ ...smoothTransition, delay: 0.1 }}
        className="mt-4 max-w-3xl text-text-light/80"
      >
        Agende uma consulta e fale com nossa equipe.
      </motion.p>
      <motion.div
        initial={slideUp.initial}
        animate={slideUp.animate}
        transition={{ ...smoothTransition, delay: 0.2 }}
        className="mt-8"
      >
        <Link href="/contato" className="border-2 button-border text-text-light uppercase font-sans tracking-wide px-6 py-3 hover:bg-text-light hover:text-text-dark transition-colors">Agendar consulta</Link>
      </motion.div>
    </section>
  )
}


