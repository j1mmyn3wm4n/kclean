import { Leaf, ShieldCheck, Sparkles, ThumbsUp } from 'lucide-react'
import { Reveal } from './anim/Reveal'

const highlights = [
  { icon: ShieldCheck, label: 'Fully insured' },
  { icon: Leaf, label: 'Eco-friendly methods' },
  { icon: Sparkles, label: 'Latest equipment' },
  { icon: ThumbsUp, label: 'Dedicated to customer satisfaction' },
]

export function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal from="left">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-dark">
            Kclean · Why us
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Your Trusted Cleaning Experts
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Kclean is a trusted leader in professional exterior cleaning and gardening services.
            Our skilled team uses the latest equipment and eco-friendly methods to deliver
            outstanding results every time. From window cleaning and gutter care to roof
            restoration, driveway and patio cleaning, block paving renewal, building front
            cleaning, and solar panel washing, plus expert garden maintenance — we cover all your
            outdoor needs. Fully insured and dedicated to customer satisfaction, we ensure your
            property looks immaculate and stays well-maintained year-round.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand/15">
                  <Icon className="h-5 w-5 text-brand-dark" />
                </span>
                <span className="font-semibold">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal from="right" delay={0.15} className="relative">
          <div className="absolute -inset-3 -z-10 rounded-3xl bg-brand/20" />
          <img
            src="/images/why-us.jpg"
            alt="Kclean window cleaning on a commercial building front"
            className="h-80 w-full rounded-2xl object-cover shadow-xl lg:h-[28rem]"
          />
        </Reveal>
      </div>
    </section>
  )
}
