import { Link } from 'react-router-dom'
import { homeCompanies } from '../data/company'
import Reveal from './Reveal'

export default function HomeCompanies() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <Reveal>
          <h2 className="display headline-section uppercase text-ink">Our Companies</h2>
        </Reveal>
        <div className="depth-stage mt-12 grid gap-6 md:grid-cols-2">
          {homeCompanies.map((company, i) => (
            <Reveal key={company.title} delay={i * 0.08}>
              <article className="depth-card h-full overflow-hidden border border-mist/30 bg-white">
                <div className="overflow-hidden">
                  <img
                    src={company.image}
                    alt={company.title}
                    className="depth-media h-56 w-full object-cover sm:h-64"
                  />
                </div>
                <div className="p-6">
                  <h3 className="heading-safe headline-sub uppercase leading-snug text-ink">
                    {company.title}
                  </h3>
                  <Link
                    to={company.link}
                    className="mt-5 inline-block text-sm font-semibold uppercase tracking-[0.14em] text-copper hover:text-copper-bright"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
