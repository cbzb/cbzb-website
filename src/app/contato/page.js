"use client"

import { useState } from "react"

export default function ContatoPage() {
  const [status, setStatus] = useState("idle")

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus("sending")
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form)
    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Falha ao enviar')
      setStatus("success")
      e.currentTarget.reset()
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <section className="w-full px-16 md:ml-20 py-16">
      <h1 className="font-sans font-medium text-4xl md:text-5xl mb-6">Contato</h1>
      <p className="text-text-light/80 max-w-3xl leading-relaxed">
        SHIS QI 5, Conjunto 15, Casa 24 – Brasília/DF — CEP: 71.615-150 — Tel: +55 61 3364 0025 — cbzblaw.com.br
      </p>

      <div className="mt-12 border-t-2 border-divider pt-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
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
            <label className="font-sans uppercase text-xs tracking-wide">Mensagem</label>
            <textarea name="mensagem" rows={5} required className="bg-transparent border-2 border-divider button-border px-4 py-3 outline-none text-text-light placeholder:text-text-light/50" placeholder="Como podemos ajudar?" />
          </div>
          <div className="md:col-span-2">
            <button type="submit" disabled={status==='sending'} className="border-2 button-border text-text-light uppercase font-sans tracking-wide px-6 py-3 hover:bg-text-light hover:text-text-dark transition-colors">
              {status==='sending' ? 'Enviando…' : 'Enviar mensagem'}
            </button>
          </div>
        </form>
        {status==='success' && <p className="mt-6 text-emerald-300">Mensagem enviada com sucesso. Retornaremos em breve.</p>}
        {status==='error' && <p className="mt-6 text-red-300">Não foi possível enviar. Tente novamente.</p>}
      </div>
    </section>
  )
}


