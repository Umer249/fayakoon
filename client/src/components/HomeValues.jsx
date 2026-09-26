import { homeValues } from '../data/company'
import Reveal from './Reveal'

export default function HomeValues() {
  return (
    <section className="depth-stage relative z-10 -mt-8 bg-transparent pb-8 pt-0 sm:-mt-10">
      <div className="section-pad mx-auto grid max-w-7xl gap-8 md:grid-cols-3 lg:gap-10">
        {homeValues.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <article className="depth-card h-full border border-mist/40 bg-white p-7 sm:p-8">
              <h2 className="display headline-sub text-ink">{item.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-steel sm:text-base">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
