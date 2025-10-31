"use client"

import { motion, AnimatePresence } from "framer-motion"
import { scaleUp, smoothTransition, springTransition } from "./animations"
import Link from "next/link"

export default function ServiceModal({ area, isVisible, onClose }) {
  if (!area) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay escuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={smoothTransition}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal centralizado */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={scaleUp.initial}
              animate={scaleUp.animate}
              exit={scaleUp.exit}
              transition={springTransition}
              onClick={(e) => e.stopPropagation()}
              className="bg-primary-dark border-2 border-divider p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto relative"
            >
              {/* Título */}
              <h2 className="font-sans font-medium text-2xl md:text-3xl mb-6 text-[var(--color-divider-base)] uppercase tracking-wide">
                {area.name}
              </h2>

              {/* Descrição detalhada */}
              <div className="mb-8">
                <p className="text-text-light/70 font-sans text-base leading-relaxed mb-4">
                  {area.detailedDescription}
                </p>
              </div>

              {/* Responsáveis */}
              {area.responsaveis && area.responsaveis.length > 0 && (
                <div className="mb-8 border-t-2 border-divider pt-6">
                  <h3 className="font-sans uppercase tracking-wide text-sm mb-4 text-text-light/90">
                    Responsáveis pela área
                  </h3>
                  <ul className="space-y-3">
                    {area.responsaveis.map((resp, index) => (
                      <li key={index} className="text-text-light/70 font-sans text-sm">
                        <span className="text-[var(--color-divider-base)] font-medium">{resp.nome}</span>
                        {resp.cargo && <span className="text-text-light/50"> — {resp.cargo}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Botões */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="flex-1 border-2 button-border text-text-light uppercase font-sans tracking-wide px-6 py-3 hover:bg-text-light hover:text-text-dark transition-colors"
                >
                  Fechar
                </motion.button>
                <Link
                  href="/contato"
                  className="flex-1 border-2 button-border text-text-light uppercase font-sans tracking-wide px-6 py-3 hover:bg-text-light hover:text-text-dark transition-colors text-center"
                >
                  Entre em contato
                </Link>
              </div>

              {/* Botão de fechar no canto */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 text-text-light/60 hover:text-text-light transition-colors"
                aria-label="Fechar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

