import { homeValues } from '../data/company'

export default function HomeValues() {
  return (
    <section className="relative z-10 -mt-16 bg-white pb-12 pt-0 sm:-mt-20">
      <div className="section-pad mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {homeValues.map((item) => (
          <article key={item.title} className="border border-mist/40 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold uppercase text-ink">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-steel">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
