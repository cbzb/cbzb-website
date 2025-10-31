"use client"

import { motion } from "framer-motion"
import { slideUp, smoothTransition } from "../components/animations"

export default function FirmIntro() {
  return (
    <section className="w-full bg-primary-dark text-text-light pl-10 pr-10 md:pl-28 md:pr-[80px] py-24">
      <motion.p
        initial={slideUp.initial}
        animate={slideUp.animate}
        transition={smoothTransition}
        className="max-w-4xl font-sans text-xl leading-relaxed"
      >
        Combinamos profundo conhecimento jurídico com uma visão estratégica de negócios para
        defender os interesses dos nossos clientes nos mais complexos cenários.
      </motion.p>
    </section>
  )
}


