import { useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'motion/react'
import { ArrowRight, ChevronDown, MapPin } from 'lucide-react'
import { site } from '../content'

const BUBBLES = [
  { left: '6%', size: 18, delay: 0, duration: 13 },
  { left: '18%', size: 10, delay: 3.5, duration: 10 },
  { left: '32%', size: 14, delay: 1.5, duration: 15 },
  { left: '55%', size: 8, delay: 5, duration: 11 },
  { left: '68%', size: 20, delay: 2, duration: 14 },
  { left: '82%', size: 12, delay: 6, duration: 12 },
  { left: '93%', size: 16, delay: 4, duration: 16 },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 110])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink"
    >
      <motion.img
        src="/images/hero.jpg"
        alt="A roof in Essex, half restored by Kclean's low-pressure cleaning"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        style={{ y: imageY, scale: imageScale }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            className="bubble"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
            }}
          />
        ))}
      </div>
      <motion.div
        className="relative mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8"
        style={{ y: contentY, opacity: contentOpacity }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-sm font-semibold text-brand"
        >
          <MapPin className="h-4 w-4" />
          {site.area}
        </motion.p>
        <motion.h1
          variants={item}
          className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          From Roofs to Gardens — Cleaning in Essex
        </motion.h1>
        <motion.p variants={item} className="mt-6 text-2xl font-bold text-brand sm:text-3xl">
          “{site.motto}”
        </motion.p>
        <motion.p variants={item} className="mt-4 max-w-xl text-lg text-white/75">
          At Kclean, we bring new life to your property with professional cleaning services
          tailored for every surface.
        </motion.p>
        <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="shine relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-brand px-7 py-3.5 text-base font-bold text-ink transition hover:bg-brand-dark"
          >
            Get a Free Quote
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#prices"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 text-base font-bold text-white transition hover:border-brand hover:text-brand"
          >
            View Prices
          </a>
        </motion.div>
      </motion.div>
      <motion.a
        href="#why-us"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 transition hover:text-brand"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ opacity: contentOpacity }}
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </motion.a>
    </section>
  )
}
