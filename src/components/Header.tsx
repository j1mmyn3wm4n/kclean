import { motion } from 'motion/react'
import { Phone } from 'lucide-react'
import { nav, site } from '../content'

export function Header() {
  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center">
          <img src="/images/logo.png" alt="Kclean – We Clean, You Relax" className="h-12 w-auto" />
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 transition hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`tel:${site.phone}`}
          className="flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-bold text-ink transition hover:bg-brand-dark"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">{site.phone}</span>
          <span className="sm:hidden">Call us</span>
        </a>
      </div>
    </motion.header>
  )
}
