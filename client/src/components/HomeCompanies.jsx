import { Link } from 'react-router-dom'
import { homeCompanies } from '../data/company'

export default function HomeCompanies() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="section-pad mx-auto max-w-7xl">
        <h2 className="display text-3xl font-bold uppercase text-ink sm:text-4xl">Our Companies</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {homeCompanies.map((company) => (
            <article key={company.title} className="overflow-hidden border border-mist/30 bg-white shadow-sm">
              <img src={company.image} alt={company.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-sm font-bold uppercase leading-snug text-ink">{company.title}</h3>
                <Link to={company.link} className="mt-4 inline-block text-sm font-semibold text-copper hover:text-copper-bright">
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
