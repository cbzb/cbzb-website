"use client"

import { motion } from "framer-motion"
import Link from 'next/link'
import Card from './Card'
import { fadeIn, slideUp, smoothTransition } from "../components/animations"

export default function FeaturedServices() {
  return (
    <section className="w-full bg-primary-dark text-text-light pl-10 pr-10 md:pl-28 md:pr-[80px] py-24">
      <motion.h2
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={smoothTransition}
        className="font-sans font-medium text-3xl"
      >
        Nossas Especialidades
      </motion.h2>
      <motion.div
        initial={slideUp.initial}
        animate={slideUp.animate}
        transition={{ ...smoothTransition, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
      >
        {['Direito Trabalhista', 'Direito Societário e M&A', 'Direito Desportivo'].map((title, index) => (
          <motion.div
            key={title}
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...smoothTransition, delay: 0.2 + index * 0.1 }}
          >
            <Card title={title} href="/servicos" />
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={slideUp.initial}
        animate={slideUp.animate}
        transition={{ ...smoothTransition, delay: 0.4 }}
        className="mt-10"
      >
        <Link href="/servicos" className="font-sans uppercase tracking-wide text-sm underline">Ver todas as áreas de atuação</Link>
      </motion.div>
    </section>
  )
}


