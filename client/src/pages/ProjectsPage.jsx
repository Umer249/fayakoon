import IndependentHero from '../components/IndependentHero'
import IndependentProjects from '../components/IndependentProjects'
import { Link } from 'react-router-dom'

export default function ProjectsPage() {
  return (
    <>
      <IndependentHero />
      <IndependentProjects />

      <section className="border-t border-mist/30 bg-white py-12 sm:py-14">
        <div className="section-pad mx-auto flex max-w-7xl flex-col items-start gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-copper">
              Engineering
            </p>
            <p className="mt-2 max-w-xl text-sm text-steel sm:text-base">
              Looking for civil, fiber, and depot delivery records? Browse the full engineering
              portfolio on Services.
            </p>
          </div>
          <Link
            to="/services#projects"
            className="inline-flex border border-ink bg-ink px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:border-copper hover:bg-copper"
          >
            Engineering Portfolio
          </Link>
        </div>
      </section>
    </>
  )
}
