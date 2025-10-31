"use client"

import { motion } from "framer-motion"
import { fadeIn, slideUp, smoothTransition } from "../../../components/animations"

export default function SobrePage() {
  return (
    <section className="w-full pl-10 pr-10 md:pl-28 md:pr-[80px] py-16">
      <motion.h1
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={smoothTransition}
        className="font-sans font-medium text-4xl md:text-5xl mb-8"
      >
        Sobre
      </motion.h1>
      <motion.div
        initial={slideUp.initial}
        animate={slideUp.animate}
        transition={{ ...smoothTransition, delay: 0.1 }}
        className="border-t-2 border-divider pt-8 text-text-light/80 leading-relaxed"
      >
        <p className="max-w-3xl">
          Conteúdo institucional do escritório será detalhado conforme materiais do cliente. 
          Esta seção apresentará história, valores, atuação e diferenciais, com imagens e destaques seguindo o design.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-text-light/70">
          {['Missão', 'Visão', 'Valores'].map((item, index) => (
            <motion.div
              key={item}
              initial={slideUp.initial}
              animate={slideUp.animate}
              transition={{ ...smoothTransition, delay: 0.2 + index * 0.1 }}
              className="border-t-2 border-divider pt-6"
            >
              <h2 className="font-sans font-medium tracking-wide uppercase text-sm mb-3">{item}</h2>
              <p>Texto a definir pelo cliente.</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}


