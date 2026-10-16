import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import DivorceCalculator from '../components/DivorceCalculator'
import Requirements from '../components/Requirements'
import ProcessSteps from '../components/ProcessSteps'
import AboutUs from '../components/AboutUs'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import { usePageMeta } from '../hooks/usePageMeta'

export default function HomePage() {
  usePageMeta({
    title: 'Divorcio Express en Bogotá y Colombia | ELITH LEX GROUP',
    description:
      'Abogados de divorcio en Bogotá: divorcio de mutuo acuerdo, con hijos menores, con bienes, unilateral y desde el exterior. Honorarios publicados y consulta por WhatsApp.',
    path: '/',
  })

  return (
    <>
      <Hero />
      <ServicesGrid />
      <DivorceCalculator />
      <Requirements />
      <ProcessSteps />
      <AboutUs />
      <FAQ />
      <Contact />
    </>
  )
}
