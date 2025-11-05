"use client"

import { motion } from "framer-motion"
import { fadeIn, slideUp, smoothTransition } from "../../../components/animations"

export default function AdvogadosPage() {
  const advogados = [
    { 
      nome: 'Terence Zveiter', 
      cargo: 'Sócio',
      foto: '/Fotos/Terence.png', 
      especialidades: ['Tribunais Superiores', 'Trabalhista', 'Concorrência', 'Arbitragem e Mediação', 'Desportivo', 'Médico e Hospitalar', 'Público', 'Societário e M&A', 'Civil', 'Consumidor', 'Advocacy'] 
    },
    { 
      nome: 'Leonardo Caputo Bastos Zveiter', 
      cargo: 'Sócio',
      foto: '/Fotos/Leonardo.png', 
      especialidades: ['Civil', 'Trabalhista', 'Desportivo', 'Consumidor', 'Médico e Hospitalar', 'Tribunais Superiores'] 
    },
    { 
      nome: 'Igor Barbosa Faria', 
      cargo: 'Sócio',
      foto: '/Fotos/Igor.png', 
      especialidades: ['Público', 'Família e Sucessões', 'Civil', 'Consumidor', 'Tributário', 'Advocacy'] 
    },
    { 
      nome: 'Aline Arantes Oliveira Loureiro', 
      cargo: 'Associada',
      foto: '/Fotos/aline.png', 
      especialidades: ['Imobiliário', 'Civil', 'Consumidor'] 
    },
    { 
      nome: 'João Víctor Pereira da Silva', 
      cargo: 'Associado',
      foto: '/Fotos/joao.png', 
      especialidades: ['Civil', 'Consumidor'] 
    },
    { 
      nome: 'Fabiana da Silva Lelis Faria', 
      cargo: 'Associada',
      foto: '/Fotos/Fabiana.png', 
      especialidades: ['Trabalhista'] 
    },
    { 
      nome: 'Alexandre Gomes da Silva Alves', 
      cargo: 'Associado',
      foto: '/Fotos/Alexandre.png', 
      especialidades: ['Societário', 'Civil', 'Tributário'] 
    },
    { 
      nome: 'Gabriel Cunha Rodrigues', 
      cargo: 'Associado',
      foto: '/Fotos/Gabriel.png', 
      especialidades: ['Trabalhista', 'Civil', 'Tribunais Superiores'] 
    },
    { 
      nome: 'Vítor Fortini Düvelius', 
      cargo: 'Associado',
      foto: '/Fotos/Vitor.png', 
      especialidades: ['Tribunais Superiores', 'Trabalhista', 'Civil', 'Consumidor', 'Compliance'] 
    },
  ]

  return (
    <section className="w-full bg-primary-dark text-text-light pl-10 pr-10 md:pl-28 md:pr-[80px] py-16">
      <motion.h1
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={smoothTransition}
        className="font-title font-light text-4xl md:text-5xl mb-8"
      >
        Advogados
      </motion.h1>
      <motion.div
        initial={slideUp.initial}
        animate={slideUp.animate}
        transition={{ ...smoothTransition, delay: 0.1 }}
        className="border-t-2 border-divider pt-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advogados.map((a, index) => (
            <motion.article
              key={a.nome}
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...smoothTransition, delay: 0.2 + index * 0.05 }}
              className="border-2 border-divider"
            >
              <div className="aspect-[2/3] bg-primary-dark/40 flex items-center justify-center">
                {a.foto ? (
                  <img src={a.foto} alt={a.nome} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-text-light/60 font-title font-light uppercase tracking-wide text-sm">Foto indisponível</div>
                )}
              </div>
              <div className="p-5 border-t-2 border-divider">
                <h3 className="font-title font-light uppercase tracking-wide text-sm">{a.nome}</h3>
                
                {a.cargo && (
                  <span className={`inline-block mt-2 text-[11px] uppercase tracking-wide px-2 py-1 border ${
                    a.cargo.toLowerCase() === 'sócio' || a.cargo.toLowerCase() === 'sócia'
                      ? 'border-[var(--color-divider-base)] bg-[var(--color-divider-base)]/20 text-[var(--color-divider-base)]' 
                      : 'button-border text-text-light/80'
                  }`}>
                    {a.cargo}
                  </span>
                )}

                {Array.isArray(a.especialidades) && a.especialidades.length > 0 && (
                  <ul className="mt-3 space-y-1 text-sm text-text-light/80 list-disc list-inside text-justify">
                    {a.especialidades.map((esp) => (
                      <li key={esp}>{esp}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}


