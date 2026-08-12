import { motion } from 'framer-motion'
import { company, intro, mission } from '../data/company'

export default function About() {
  return (
    <section className="section-pad relative py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
            Introduction
          </p>
          <h2 className="display mt-4 text-5xl font-bold text-sand sm:text-6xl lg:text-7xl">
            Built for
            <br />
            critical work
          </h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {company.sectors.map((s) => (
              <span
                key={s}
                className="border border-mist/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-mist/70"
              >
                {s}
              </span>
            ))}
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.2em] text-steel">PEC</dt>
              <dd className="mt-1 text-sand">{company.pec}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.2em] text-steel">NTN</dt>
              <dd className="mt-1 text-sand">{company.ntn}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.2em] text-steel">Founded</dt>
              <dd className="mt-1 text-sand">{company.founded}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.2em] text-steel">Contact</dt>
              <dd className="mt-1 text-sand">{company.phone}</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-5 text-base leading-relaxed text-mist/80 lg:col-span-7 lg:text-lg"
        >
          {intro.paragraphs.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl border-t border-mist/10 pt-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
          Our Mission
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {mission.map((item, i) => (
            <motion.div
              key={item.slice(0, 24)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="flex gap-4 border-l-2 border-copper/60 pl-5"
            >
              <span className="display text-2xl text-copper">{String(i + 1).padStart(2, '0')}</span>
              <p className="text-sm leading-relaxed text-mist/80 sm:text-base">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
