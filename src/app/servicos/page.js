"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { smoothTransition } from "../../../components/animations"
import ServiceModal from "../../../components/ServiceModal"

export default function ServicosPage() {
  const [selectedArea, setSelectedArea] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const areas = [
    {
      name: 'Arbitragem e Mediação',
      description: 'Soluções alternativas de resolução de conflitos, atuando em processos arbitrais nacionais e internacionais, além de mediação e conciliação.',
      detailedDescription: 'Oferecemos soluções alternativas de resolução de conflitos, incluindo processos arbitrais nacionais e internacionais. Atuamos também em mediação e conciliação, proporcionando aos nossos clientes formas eficientes e menos custosas de resolver disputas, com expertise em negociações complexas e procedimentos arbitrais perante as principais câmaras arbitrais do país.',
      responsaveis: [
        { nome: 'Terence Zveiter', cargo: 'Sócio' }
      ]
    },
    {
      name: 'Direito Civil e do Consumidor',
      description: 'Atendimento completo em questões contratuais, responsabilidade civil, relações de consumo e defesa dos direitos do consumidor.',
      detailedDescription: 'Atendimento completo em questões contratuais, responsabilidade civil e relações de consumo. Defendemos os direitos do consumidor em todas as esferas, incluindo questões contratuais complexas, responsabilidade civil extracontratual e contratual, bem como ações coletivas e individuais em defesa do consumidor.',
      responsaveis: [
        { nome: 'Terence Zveiter', cargo: 'Sócio' },
        { nome: 'Leonardo Caputo Bastos Zveiter', cargo: 'Sócio' },
        { nome: 'Igor Barbosa Faria', cargo: 'Sócio' },
        { nome: 'Aline Arantes Oliveira Loureiro', cargo: 'Associada' },
        { nome: 'João Víctor Pereira da Silva', cargo: 'Associado' },
        { nome: 'Vítor Fortini Düvelius', cargo: 'Associado' }
      ]
    },
    {
      name: 'Direito da Concorrência',
      description: 'Assessoria em questões antitruste, defesa em processos administrativos e judiciais perante o CADE, além de análise de atos de concentração.',
      detailedDescription: 'Assessoria especializada em questões antitruste, com ampla experiência em defesa em processos administrativos e judiciais perante o Conselho Administrativo de Defesa Econômica (CADE). Oferecemos análise de atos de concentração, defesa em processos de cartelização e assessoria em políticas de compliance antitruste.',
      responsaveis: [
        { nome: 'Terence Zveiter', cargo: 'Sócio' }
      ]
    },
    {
      name: 'Direito Desportivo',
      description: 'Representação de atletas, clubes e entidades esportivas em questões contratuais, disciplinares e transferências.',
      detailedDescription: 'Representação especializada de atletas, clubes e entidades esportivas em questões contratuais, disciplinares e transferências. Atuamos perante tribunais desportivos, confederações e federações, com expertise em negociação de contratos esportivos, questões disciplinares e processos de transferência nacional e internacional.',
      responsaveis: [
        { nome: 'Terence Zveiter', cargo: 'Sócio' },
        { nome: 'Leonardo Caputo Bastos Zveiter', cargo: 'Sócio' }
      ]
    },
    {
      name: 'Direito Marítimo e Portuário',
      description: 'Atuação em questões relacionadas ao transporte marítimo, contratos portuários, navegação e regulamentações marítimas.',
      detailedDescription: 'Especialização em questões relacionadas ao transporte marítimo, contratos portuários, navegação e regulamentações marítimas. Atuamos em questões trabalhistas portuárias, contratos de afretamento, seguro marítimo, salvamento e assistência, além de questões regulatórias portuárias.',
      responsaveis: [
        { nome: 'Terence Zveiter', cargo: 'Sócio' }
      ]
    },
    {
      name: 'Direito de Família e de Sucessões',
      description: 'Assessoria em divórcios, partilhas, inventários, pensões alimentícias, guarda de menores e planejamento sucessório.',
      detailedDescription: 'Assessoria completa em questões familiares, incluindo divórcios consensuais e litigiosos, partilha de bens, inventários, pensões alimentícias, guarda e regulamentação de visitas de menores. Oferecemos também planejamento sucessório, elaboração de testamentos e mediação familiar.',
      responsaveis: [
        { nome: 'Igor Barbosa Faria', cargo: 'Sócio' }
      ]
    },
    {
      name: 'Direito Imobiliário e da Construção Civil',
      description: 'Acompanhamento de negócios imobiliários, contratos de construção, incorporação imobiliária e questões condominiais.',
      detailedDescription: 'Acompanhamento completo de negócios imobiliários, incluindo contratos de compra e venda, locação, incorporação imobiliária e questões condominiais. Atuamos na elaboração e revisão de contratos, due diligence imobiliária, regularização de imóveis e questões relacionadas à construção civil.',
      responsaveis: [
        { nome: 'Aline Arantes Oliveira Loureiro', cargo: 'Associada' }
      ]
    },
    {
      name: 'Direito Médico e Hospitalar',
      description: 'Defesa de profissionais da saúde e instituições hospitalares em processos éticos, trabalhistas e de responsabilidade civil.',
      detailedDescription: 'Defesa especializada de profissionais da saúde e instituições hospitalares em processos éticos perante conselhos de classe, processos trabalhistas específicos do setor de saúde e ações de responsabilidade civil. Atuamos também em questões relacionadas à saúde suplementar e regulamentações do setor.',
      responsaveis: [
        { nome: 'Terence Zveiter', cargo: 'Sócio' },
        { nome: 'Leonardo Caputo Bastos Zveiter', cargo: 'Sócio' }
      ]
    },
    {
      name: 'Direito Público',
      description: 'Atuação em licitações, contratos administrativos, processos de improbidade administrativa e questões tributárias públicas.',
      detailedDescription: 'Atuação completa em licitações e contratos administrativos, incluindo preparação de editais, defesa em recursos e impugnações. Representamos clientes em processos de improbidade administrativa e questões tributárias públicas, além de assessoria em parcerias público-privadas e contratos de concessão.',
      responsaveis: [
        { nome: 'Terence Zveiter', cargo: 'Sócio' },
        { nome: 'Igor Barbosa Faria', cargo: 'Sócio' }
      ]
    },
    {
      name: 'Direito Societário e M&A',
      description: 'Assessoria em operações de fusão e aquisição, constituição de empresas, reestruturações societárias e governança corporativa.',
      detailedDescription: 'Assessoria especializada em operações de fusão e aquisição (M&A), constituição e reorganização de empresas, reestruturações societárias, joint ventures e governança corporativa. Oferecemos due diligence, elaboração de contratos societários e assessoria em questões regulatórias relacionadas a operações societárias.',
      responsaveis: [
        { nome: 'Terence Zveiter', cargo: 'Sócio' },
        { nome: 'Alexandre Gomes da Silva Alves', cargo: 'Associado' }
      ]
    },
    {
      name: 'Direito Trabalhista',
      description: 'Representação de empresas e trabalhadores em questões trabalhistas, negociações coletivas e processos trabalhistas.',
      detailedDescription: 'Representação completa de empresas e trabalhadores em questões trabalhistas, incluindo negociações coletivas, elaboração de contratos de trabalho, defesa em processos trabalhistas e assessoria em compliance trabalhista. Atuamos também em questões de direito coletivo do trabalho e relações sindicais.',
      responsaveis: [
        { nome: 'Terence Zveiter', cargo: 'Sócio' },
        { nome: 'Leonardo Caputo Bastos Zveiter', cargo: 'Sócio' },
        { nome: 'Fabiana da Silva Lelis Faria', cargo: 'Associada' },
        { nome: 'Gabriel Cunha Rodrigues', cargo: 'Associado' },
        { nome: 'Vítor Fortini Düvelius', cargo: 'Associado' }
      ]
    },
    {
      name: 'Direito Tributário',
      description: 'Planejamento tributário, consultoria em questões fiscais, defesa em processos administrativos e judiciais tributários.',
      detailedDescription: 'Planejamento tributário estratégico, consultoria em questões fiscais e defesa em processos administrativos e judiciais tributários. Atuamos em recuperação de créditos tributários, parcelamentos, defesa em autuações fiscais e consultoria em questões de tributação internacional, além de representação perante os principais tribunais tributários do país.',
      responsaveis: [
        { nome: 'Terence Zveiter', cargo: 'Sócio' },
        { nome: 'Igor Barbosa Faria', cargo: 'Sócio' },
        { nome: 'Alexandre Gomes da Silva Alves', cargo: 'Associado' }
      ]
    },
  ]

  const handleOpenModal = (area) => {
    setSelectedArea(area)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedArea(null)
  }

  return (
    <>
      <section className="w-full pl-10 pr-10 md:pl-28 md:pr-[80px] py-16">
        <h1 className="font-sans font-medium text-4xl md:text-5xl mb-8">Serviços</h1>

        <div className="border-t-2 border-divider pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, ...smoothTransition }}
              >
                <div className="border-2 border-divider p-6 h-full flex flex-col group hover:bg-primary-dark/5 transition-colors">
                  <h3 className="font-sans tracking-wide uppercase text-sm md:text-base text-text-light mb-4 transition-colors">
                    {area.name}
                  </h3>
                  
                  <p className="text-text-light/70 font-sans text-sm leading-relaxed mb-6 flex-1">
                    {area.description}
                  </p>
                  
                  <button
                    onClick={() => handleOpenModal(area)}
                    className="inline-flex items-center gap-2 text-[var(--color-divider-base)] hover:text-[var(--color-primary-light)] font-sans uppercase tracking-wide text-xs underline transition-colors group-hover:gap-3 text-left"
                  >
                    Saiba mais
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceModal
        area={selectedArea}
        isVisible={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}


