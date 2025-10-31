"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { scaleUp, smoothTransition, springTransition } from "./animations"

export default function Notification({ message, type = "success", isVisible, onClose }) {
  useEffect(() => {
    if (isVisible && type === "success") {
      const timer = setTimeout(() => {
        onClose()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, type, onClose])

  const isSuccess = type === "success"

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
              className="bg-primary-dark border-2 border-divider p-8 md:p-12 max-w-md w-full pointer-events-auto relative"
            >
              {/* Ícone */}
              <div className="flex justify-center mb-6">
                {isSuccess ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2, stiffness: 200 }}
                    className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center border-2 border-emerald-500"
                  >
                    <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2, stiffness: 200 }}
                    className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center border-2 border-red-500"
                  >
                    <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.div>
                )}
              </div>

              {/* Mensagem */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-serif text-2xl md:text-3xl text-center mb-4 text-text-light"
              >
                {isSuccess ? "Mensagem Enviada" : "Erro ao Enviar"}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-sans text-base text-text-light/80 text-center leading-relaxed mb-8"
              >
                {message}
              </motion.p>

              {/* Botão */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="w-full border-2 button-border text-text-light uppercase font-sans tracking-wide px-6 py-3 hover:bg-text-light hover:text-text-dark transition-colors"
              >
                {isSuccess ? "Fechar" : "Tentar Novamente"}
              </motion.button>

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

