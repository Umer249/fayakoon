import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import Mission from '../components/Mission'
import Ceo from '../components/Ceo'
import Clients from '../components/Clients'
import Projects from '../components/Projects'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <Mission />
      <Ceo />
      <Clients />
      <Projects />
      <section className="section-pad border-t border-mist/10 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
              Next step
            </p>
            <h2 className="display mt-3 text-4xl font-bold text-sand sm:text-5xl">
              Ready to build with Fayakoon?
            </h2>
            <p className="mt-3 max-w-md text-mist/70">
              Tell us about your civil, mechanical, fiber, or depot project and our team
              will respond.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-copper px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-copper-bright"
          >
            Contact Us
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
