import { motion } from 'framer-motion'
import { company, intro } from '../data/company'

export default function Introduction() {
  return (
    <section id="introduction" className="relative overflow-hidden bg-sand text-ink">
      <div className="section-pad mx-auto max-w-7xl py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
            Company
          </p>
          <h2 className="display mt-4 text-5xl font-bold text-forest sm:text-6xl lg:text-7xl">
            Introduction
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5 text-base leading-relaxed text-ink/75 lg:col-span-8 lg:text-lg"
          >
            {intro.paragraphs.map((p) => (
              <p key={p.slice(0, 36)}>{p}</p>
            ))}
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="lg:col-span-4"
          >
            <div className="border border-ink/10 bg-white p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-steel">
                At a glance
              </p>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-steel">Founded</dt>
                  <dd className="mt-1 text-lg font-semibold text-forest">{company.founded}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-steel">PEC</dt>
                  <dd className="mt-1 font-semibold text-forest">{company.pec}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-steel">Focus</dt>
                  <dd className="mt-2 flex flex-wrap gap-1.5">
                    {company.sectors.slice(0, 4).map((s) => (
                      <span
                        key={s}
                        className="border border-ink/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/65"
                      >
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
