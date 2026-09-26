import { motion } from 'framer-motion'
import { leadership, stats, company } from '../data/company'

export default function Leadership() {
  return (
    <section id="team" className="border-y border-mist/20 bg-[#eff3f6]">
      <div className="section-pad mx-auto max-w-7xl py-24 lg:py-28">
        <div className="grid grid-cols-2 gap-6 border-b border-mist/40 pb-12 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="display text-4xl font-semibold text-ink sm:text-5xl">
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
            <h2 className="display headline-section mt-4 font-bold text-ink">
              Leadership Team
            </h2>
          </div>
          <p className="max-w-md text-sm text-steel">
            Experienced specialists across projects, quality, EHS, finance, and field
            operations, led by {company.ceo}.
          </p>
        </div>

        <div className="depth-stage mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {leadership.map((person, i) => (
            <motion.div
              key={person.role}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="depth-card border border-mist/40 bg-white px-5 py-5"
            >
              <h3 className="text-lg font-semibold text-ink sm:text-xl">{person.role}</h3>
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
