import { motion } from 'motion/react'
import { BadgePercent } from 'lucide-react'
import { prices } from '../content'
import { Reveal } from './anim/Reveal'

export function Pricing() {
  return (
    <section id="prices" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-dark">Prices</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Our Services &amp; Prices
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="mt-12 overflow-hidden rounded-2xl border border-mist shadow-lg">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-ink text-white">
                <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">Service</th>
                <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">Price</th>
                <th className="hidden px-6 py-4 text-sm font-bold uppercase tracking-wide sm:table-cell">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {prices.map((row, i) => (
                <motion.tr
                  key={row.service}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.09 }}
                  className={i % 2 ? 'bg-mist/60' : 'bg-white'}
                >
                  <td className="px-6 py-5 font-semibold">
                    {row.service}
                    <span className="mt-1 block text-sm font-normal text-muted sm:hidden">
                      {row.notes}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-5 font-bold text-brand-dark">
                    {row.price}
                  </td>
                  <td className="hidden px-6 py-5 text-muted sm:table-cell">{row.notes}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <Reveal delay={0.3} className="mt-8 flex items-start justify-center gap-3 text-center text-muted">
          <BadgePercent className="mt-0.5 h-5 w-5 shrink-0 text-brand-dark" />
          <p className="max-w-2xl text-sm italic">
            Prices may vary depending on the size and condition of the property. Special discounts
            available when combining multiple services.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
