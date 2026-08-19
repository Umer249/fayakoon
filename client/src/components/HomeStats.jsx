import { homeStats } from '../data/company'

export default function HomeStats() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 lg:py-20">
      <img
        src="/images/official/hse-2.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-ink/90" />
      <div className="section-pad relative mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {homeStats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="text-5xl font-bold text-moss">{stat.value}</p>
            <p className="mt-2 text-sm uppercase tracking-wide text-sand/90">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
