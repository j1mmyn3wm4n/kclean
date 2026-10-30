import { motion } from 'motion/react'
import { services } from '../content'
import { Reveal } from './anim/Reveal'

export function Services() {
  return (
    <section id="services" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-dark">
            Kclean Cleaning Services
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Commercial and Residential Cleaning
          </h2>
          <p className="mt-4 text-lg text-muted">
            Professional cleaning solutions for your home and business in Southend on Sea and
            surrounding areas. Whether you're a homeowner or a business owner, our tailored
            cleaning solutions are designed to meet your needs.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.65,
                delay: (i % 3) * 0.12,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border-t-4 border-brand p-6">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
