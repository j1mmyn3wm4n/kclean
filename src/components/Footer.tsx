import { nav, site } from '../content'

export function Footer() {
  return (
    <footer className="bg-ink py-12 text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center">
          <img src="/images/logo.png" alt="Kclean – We Clean, You Relax" className="h-16 w-auto" />
        </a>
        <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm transition hover:text-brand">
              {item.label}
            </a>
          ))}
        </nav>
        <p className="text-sm">
          <a href={`tel:${site.phone}`} className="hover:text-brand">
            {site.phone}
          </a>
          {' · '}
          <a href={`mailto:${site.email}`} className="hover:text-brand">
            {site.email}
          </a>
        </p>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Kclean Ltd · {site.motto}
        </p>
      </div>
    </footer>
  )
}
