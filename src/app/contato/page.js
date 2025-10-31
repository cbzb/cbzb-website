"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { fadeIn, slideUp, smoothTransition } from "../../../components/animations"
import Notification from "../../../components/Notification"

export default function ContatoPage() {
  const [status, setStatus] = useState("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const [showNotification, setShowNotification] = useState(false)
  const formRef = useRef(null)

  const areasAtuacao = [
    'Arbitragem e Mediação',
    'Direito Civil e do Consumidor',
    'Direito da Concorrência',
    'Direito Desportivo',
    'Direito Marítimo e Portuário',
    'Direito de Família e de Sucessões',
    'Direito Imobiliário e da Construção Civil',
    'Direito Médico e Hospitalar',
    'Direito Público',
    'Direito Societário e M&A',
    'Direito Trabalhista',
    'Direito Tributário'
  ]

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus("sending")
    const form = formRef.current
    if (!form) return
    
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData)
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) {
        let apiError = 'Falha ao enviar'
        try {
          const data = await res.json()
          if (data?.error) apiError = data.error
        } catch {}
        throw new Error(apiError)
      }
      setStatus("success")
      setErrorMsg("")
      setShowNotification(true)
      form.reset()
    } catch (err) {
      setStatus("error")
      const errorMessage = err?.message || 'Não foi possível enviar. Tente novamente.'
      setErrorMsg(errorMessage)
      setShowNotification(true)
    }
  }

  const handleCloseNotification = () => {
    setShowNotification(false)
    setStatus("idle")
    setErrorMsg("")
  }

  return (
    <section className="w-full pl-10 pr-10 md:pl-28 md:pr-[80px] py-16">
      <motion.h1
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={smoothTransition}
        className="font-sans font-medium text-4xl md:text-5xl mb-6"
      >
        Contato
      </motion.h1>
      <motion.p
        initial={slideUp.initial}
        animate={slideUp.animate}
        transition={{ ...smoothTransition, delay: 0.1 }}
        className="text-text-light/80 max-w-3xl leading-relaxed"
      >
        SHIS QI 5, Conjunto 15, Casa 24 – Brasília/DF — CEP: 71.615-150 — Tel: +55 61 3364 0025
      </motion.p>

      <motion.div
        initial={slideUp.initial}
        animate={slideUp.animate}
        transition={{ ...smoothTransition, delay: 0.2 }}
        className="mt-12 border-t-2 border-divider pt-8"
      >
        <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          <div className="flex flex-col gap-2">
            <label className="font-sans uppercase text-xs tracking-wide">Nome</label>
            <input name="nome" required className="bg-transparent border-2 border-divider button-border px-4 py-3 outline-none text-text-light placeholder:text-text-light/50" placeholder="Seu nome completo" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-sans uppercase text-xs tracking-wide">E-mail</label>
            <input type="email" name="email" required className="bg-transparent border-2 border-divider button-border px-4 py-3 outline-none text-text-light placeholder:text-text-light/50" placeholder="seu@email.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-sans uppercase text-xs tracking-wide">Telefone</label>
            <input name="telefone" className="bg-transparent border-2 border-divider button-border px-4 py-3 outline-none text-text-light placeholder:text-text-light/50" placeholder="(00) 00000-0000" />
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="font-sans uppercase text-xs tracking-wide">Área de Interesse</label>
            <select name="area" required className="bg-transparent border-2 border-divider button-border px-4 py-3 outline-none text-text-light">
              <option value="" className="bg-primary-dark text-text-light">Selecione uma área</option>
              {areasAtuacao.map((area) => (
                <option key={area} value={area} className="bg-primary-dark text-text-light">
                  {area}
                </option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="font-sans uppercase text-xs tracking-wide">Mensagem</label>
            <textarea name="mensagem" rows={5} className="bg-transparent border-2 border-divider button-border px-4 py-3 outline-none text-text-light placeholder:text-text-light/50" placeholder="Como podemos ajudar?" />
          </div>
          <div className="md:col-span-2">
            <button type="submit" disabled={status==='sending'} className="border-2 button-border text-text-light uppercase font-sans tracking-wide px-6 py-3 hover:bg-text-light hover:text-text-dark transition-colors">
              {status==='sending' ? 'Enviando…' : 'Enviar mensagem'}
            </button>
          </div>
        </form>
      </motion.div>

      <Notification
        message={status === 'success' ? 'Recebemos sua mensagem com sucesso. Nossa equipe entrará em contato em breve.' : errorMsg || 'Não foi possível enviar sua mensagem. Verifique os dados e tente novamente.'}
        type={status === 'success' ? 'success' : 'error'}
        isVisible={showNotification}
        onClose={handleCloseNotification}
      />

      <motion.div
        initial={slideUp.initial}
        animate={slideUp.animate}
        transition={{ ...smoothTransition, delay: 0.3 }}
        className="mt-16"
      >
        <h2 className="font-sans font-medium text-2xl md:text-3xl mb-6">Nossa Localização</h2>
        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...smoothTransition, delay: 0.4 }}
          className="w-full h-[400px] md:h-[500px] border-2 border-divider"
        >
          <iframe
            src="https://www.google.com/maps?q=-15.84869770330964,-47.89988315008753&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização CBZBLAW - SHIS QI 5, Conjunto 15, Casa 24, Brasília/DF"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}


