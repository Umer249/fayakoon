import { motion } from 'framer-motion'
import { leadership, stats, company } from '../data/company'

export default function Leadership() {
  return (
    <section id="team" className="border-y border-mist/10 bg-forest/30">
      <div className="section-pad mx-auto max-w-7xl py-24 lg:py-28">
        <div className="grid grid-cols-2 gap-6 border-b border-mist/10 pb-12 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="display text-4xl font-semibold text-sand sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-steel">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
              People
            </p>
            <h2 className="display mt-4 text-5xl font-bold text-sand sm:text-6xl">
              Leadership Team
            </h2>
          </div>
          <p className="max-w-md text-sm text-mist/70">
            Experienced specialists across projects, quality, EHS, finance, and field
            operations—led by {company.ceo}.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((person, i) => (
            <motion.div
              key={person.role}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="border border-mist/10 bg-ink/40 px-5 py-4"
            >
              <h3 className="font-semibold text-sand">{person.role}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-steel">
                {person.quals} · {person.experience}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
