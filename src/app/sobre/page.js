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
        {/* Conteúdo Institucional */}
        <div className="max-w-3xl mb-12">
          <p className="mb-4 text-justify">
            O escritório Caputo Bastos Zveiter & Barbosa – CBZB é referência no cenário jurídico brasileiro, reconhecido pela 
            excelência técnica, pela atuação estratégica e pelo compromisso com resultados concretos para seus clientes.
          </p>
          <p className="mb-4 text-justify">
            Com uma equipe multidisciplinar de profissionais altamente especializados, o escritório atua em diversas 
            áreas do Direito — abrangendo Direito Trabalhista, Empresarial, Público, Tributário, Civil, entre outras 
            especialidades. Nossa trajetória é marcada pela entrega de soluções jurídicas precisas e inovadoras, sempre 
            pautadas pelos mais elevados padrões éticos e legais da advocacia.
          </p>
          <p className="text-justify">
            Valorizamos a relação de confiança e transparência com nossos clientes, conduzindo cada caso com rigor técnico, 
            agilidade e dedicação integral. Mantemos uma postura proativa e colaborativa, investindo continuamente em 
            atualização profissional e incentivando a solução consensual de conflitos, com respeito, urbanidade e 
            excelência em cada interação.
          </p>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-text-light/70">
          <motion.div
            initial={slideUp.initial}
            animate={slideUp.animate}
            transition={{ ...smoothTransition, delay: 0.2 }}
            className="border-t-2 border-divider pt-6"
          >
            <h2 className="font-sans font-medium tracking-wide uppercase text-sm mb-3">Missão</h2>
            <p className="leading-relaxed text-justify">
              Garantir excelência, rapidez e economia nas soluções apresentadas aos seus clientes, com o propósito 
              de se tornar referência no mercado jurídico e acadêmico, além de contribuirmos para o desenvolvimento 
              social e sustentável de nosso planeta.
            </p>
          </motion.div>
          
          <motion.div
            initial={slideUp.initial}
            animate={slideUp.animate}
            transition={{ ...smoothTransition, delay: 0.3 }}
            className="border-t-2 border-divider pt-6"
          >
            <h2 className="font-sans font-medium tracking-wide uppercase text-sm mb-3">Visão</h2>
            <p className="leading-relaxed text-justify">
              Estar entre os principais escritórios de advocacia do mercado e ser reconhecido pelos trabalhos 
              desenvolvidos. Foco nos resultados, eficiência e transparência.
            </p>
          </motion.div>
          
          <motion.div
            initial={slideUp.initial}
            animate={slideUp.animate}
            transition={{ ...smoothTransition, delay: 0.4 }}
            className="border-t-2 border-divider pt-6"
          >
            <h2 className="font-sans font-medium tracking-wide uppercase text-sm mb-3">Valores</h2>
            <ul className="leading-relaxed space-y-2 list-disc list-inside">
              <li>
                Prestar serviços jurídicos sempre atento às normas legais e éticas que sustentam o ordenamento jurídico.
              </li>
              <li>
                Atuar com liberdade e altivez em busca do bem da vida almejado por nosso cliente.
              </li>
              <li>
                Interagir para com os colegas advogados, membros do MP, magistrados, servidores e partes de forma cortês e urbana.
              </li>
              <li>
                Incentivar a solução pacífica do conflito.
              </li>
              <li>
                Apoiar-se no estudo como fonte perene de atualizações, de forma a permitir aos colaboradores mais rigor técnico jurídico na solução dos casos a nós confiados.
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}


