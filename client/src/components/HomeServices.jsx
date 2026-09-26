import { Link } from 'react-router-dom'
import { homeServices } from '../data/company'
import Reveal from './Reveal'

export default function HomeServices() {
  return (
    <section className="bg-[#eff3f6] py-20 lg:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <Reveal>
          <h2 className="display headline-section uppercase text-ink">Our Services</h2>
        </Reveal>
        <div className="depth-stage mt-12 grid gap-6 md:grid-cols-3">
          {homeServices.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <article className="depth-card h-full overflow-hidden bg-white">
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="depth-media h-56 w-full object-cover sm:h-64"
                  />
                </div>
                <div className="p-6">
                  <h3 className="heading-safe headline-sub uppercase text-ink">{service.title}</h3>
                  <Link
                    to={service.link}
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
