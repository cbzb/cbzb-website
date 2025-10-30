import Hero from '../../components/Hero'
import FirmIntro from '../../components/FirmIntro'
import FeaturedServices from '../../components/FeaturedServices'
import Partners from '../../components/Partners'
import FinalCallToAction from '../../components/FinalCallToAction'

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <FirmIntro />
      <FeaturedServices />
      <Partners />
      <FinalCallToAction />
    </main>
  )
}


