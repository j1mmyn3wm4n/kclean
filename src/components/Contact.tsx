import { useState } from 'react'
import { Mail, Phone, Send } from 'lucide-react'
import { site } from '../content'
import { Reveal } from './anim/Reveal'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      'Quote request from ' + form.name,
    )}&body=${encodeURIComponent(body)}`
  }

  const inputClass =
    'w-full rounded-xl border border-mist bg-white px-4 py-3 text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40'

  return (
    <section id="contact" className="bg-mist py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal from="left">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-dark">Contact</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Get in Touch with Kclean
          </h2>
          <p className="mt-4 max-w-md text-lg text-muted">
            Ready for a spotless home? Contact Kclean for expert exterior cleaning. We clean, you
            relax.
          </p>
          <div className="mt-10 space-y-4">
            <a
              href={`tel:${site.phone}`}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand">
                <Phone className="h-5 w-5 text-ink" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-muted">Call us</p>
                <p className="text-lg font-bold">{site.phone}</p>
              </div>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand">
                <Mail className="h-5 w-5 text-ink" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-muted">
                  Email us
                </p>
                <p className="text-lg font-bold">{site.email}</p>
              </div>
            </a>
          </div>
        </Reveal>
        <Reveal from="right" delay={0.15}>
        <form onSubmit={submit} className="rounded-3xl bg-white p-8 shadow-lg sm:p-10">
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-bold">
                Your First Name <span className="text-brand-dark">*</span>
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                placeholder="Your First Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-bold">
                Your Email Address <span className="text-brand-dark">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                placeholder="Your Email Address"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-bold">
                Your Message Here <span className="text-brand-dark">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={inputClass}
                placeholder="Your Message Here"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-base font-bold text-ink transition hover:bg-brand-dark"
            >
              Submit Your Request Now
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
        </Reveal>
      </div>
    </section>
  )
}
