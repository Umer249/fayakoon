import { company, homeAbout } from '../data/company'
import Reveal from './Reveal'

export default function HomeAbout() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-copper">About Us</p>
        </Reveal>
        <div className="depth-stage mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <p className="display text-6xl font-bold leading-none text-ink/10 sm:text-8xl">
              {company.founded}
            </p>
            <h2 className="display headline-section -mt-6 text-ink sm:-mt-10">Fayakoon Group</h2>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.1}>
            <p className="text-base leading-relaxed text-steel sm:text-lg">{homeAbout}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
