import { homeStats } from '../data/company'
import Reveal from './Reveal'

export default function HomeStats() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 lg:py-28">
      <img
        src="/images/hero/hero-petroleum.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[center_22%] opacity-35"
      />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="section-pad relative mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {homeStats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06} className="text-center sm:text-left">
            <p className="display text-6xl font-bold text-sand sm:text-7xl">{stat.value}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.16em] text-sand/80">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
