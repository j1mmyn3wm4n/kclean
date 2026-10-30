import { MotionConfig } from 'motion/react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WhyUs } from './components/WhyUs'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/anim/ScrollProgress'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Pricing />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App
