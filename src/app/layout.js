import './globals.css'
import { Playfair_Display, Montserrat } from 'next/font/google'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata = {
  title: 'CBZBLAW',
  description: 'Website institucional CBZBLAW',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="min-h-dvh bg-primary-dark text-text-light">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}


