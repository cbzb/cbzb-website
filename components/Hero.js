"use client"

import { useState, useEffect } from 'react'
import Button from './Button'

export default function Hero() {
  const images = [
    { src: '/fotos_capa/foto-1.jpg', alt: 'Profissionais em reunião' },
    { src: '/fotos_capa/foto-2.jpg', alt: 'Profissionais em reunião' },
    { src: '/fotos_capa/foto-3-jpg.jpg', alt: 'Profissionais em reunião' }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Troca a cada 5 segundos

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="border-b-2 border-divider">
      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-2 min-h-[540px] lg:min-h-[680px]">
        {/* Left column */}
        <div className="bg-primary-dark text-text-light flex flex-col justify-center px-10 md:pl-28 md:pr-0 lg:pl-28 lg:pr-0 py-20 relative border-r border-divider">
          <h1 className="font-title font-light text-5xl leading-tight max-w-2xl animate-fade-up">
            Excelência jurídica com olhar estratégico.
          </h1>
          
          <div className="mt-12 animate-fade" style={{animationDelay:'240ms'}}>
            <Button href="/contato">Agendar consulta</Button>
          </div>
        </div>

        {/* Right column - carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-text-light' 
                    : 'w-2 bg-text-light/50 hover:bg-text-light/75'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden relative overflow-visible">
        <div className="relative bg-primary-dark text-text-light px-10 py-16 min-h-[90dvh] flex flex-col overflow-visible">
          {/* Watermark image only on mobile hero (grande e parcialmente visível) */}
          <img
            src="/icone_black.png"
            alt="Marca d'água"
            className="pointer-events-none select-none fixed right-[-30%] top-[-20%] w-[180%] h-[130%] opacity-35 object-cover"
            style={{ zIndex: 9999 }}
            aria-hidden
          />

          <div className="mt-4">
            <h1 className="font-title font-light text-5xl leading-tight">
              Excelência jurídica com olhar estratégico.
            </h1>
            <p className="mt-5 font-title font-light text-lg text-text-light/80 text-justify">
              Direito Trabalhista,<br />Empresarial e Desportivo.
            </p>
            <div className="mt-8">
              <Button href="/contato">Agendar consulta</Button>
            </div>
          </div>

          {/* Social links removidos: já presentes no Footer */}
        </div>
      </div>
    </section>
  )
}


