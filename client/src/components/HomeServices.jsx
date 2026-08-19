import { Link } from 'react-router-dom'
import { homeServices } from '../data/company'

export default function HomeServices() {
  return (
    <section className="bg-[#eff3f6] py-16 lg:py-20">
      <div className="section-pad mx-auto max-w-7xl">
        <h2 className="display text-3xl font-bold uppercase text-ink sm:text-4xl">Our Services</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {homeServices.map((service) => (
            <article key={service.title} className="overflow-hidden bg-white shadow-sm">
              <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="heading-safe text-base font-bold uppercase text-ink">{service.title}</h3>
                <Link to={service.link} className="mt-4 inline-block text-sm font-semibold text-copper hover:text-copper-bright">
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
