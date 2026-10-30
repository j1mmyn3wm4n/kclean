import { motion } from 'motion/react'
import { gallery } from '../content'
import { Reveal } from './anim/Reveal'

const DIRTY = 'grayscale(0.85) sepia(0.3) brightness(0.65)'
const CLEAN = 'grayscale(0) sepia(0) brightness(1)'

export function Gallery() {
  return (
    <section id="work" className="bg-ink py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Our Work</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Results That Speak for Themselves
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Roofs, driveways, gutters, windows and gardens across Essex — watch them clean up as
            you scroll.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {gallery.map((item, i) => (
            <motion.img
              key={item.src}
              src={item.src}
              alt={item.alt}
              loading="lazy"
              initial={{ opacity: 0, y: 32, filter: DIRTY }}
              whileInView={{ opacity: 1, y: 0, filter: CLEAN }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.9,
                delay: (i % 4) * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="aspect-square w-full rounded-xl object-cover transition hover:scale-[1.03] hover:ring-2 hover:ring-brand"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
