import { motion } from 'framer-motion'
import { qualityPoints, hse } from '../data/company'

export default function Quality() {
  return (
    <section id="quality" className="section-pad bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
              Standards
            </p>
            <h2 className="display mt-4 text-5xl font-bold text-ink sm:text-6xl">
              Quality Policy
            </h2>
            <p className="mt-5 text-steel leading-relaxed">
              Every employee is committed to customer satisfaction, delivering exceptional
              value while upholding the integrity of the Fayakoon name through continual
              improvement.
            </p>
            <ul className="mt-8 space-y-3">
              {qualityPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-steel">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-copper" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
              HSE
            </p>
            <h2 className="display mt-4 text-5xl font-bold text-ink sm:text-6xl">
              Health, Safety & Environment
            </h2>
            <p className="mt-5 text-steel leading-relaxed">
              A safe, healthy, and environmentally responsible workplace, backed by
              clear policies, audits, and field discipline.
            </p>

            <div className="mt-8 space-y-8">
              {[
                { title: 'Health', items: hse.health },
                { title: 'Safety', items: hse.safety },
                { title: 'Environment', items: hse.environment },
              ].map((block) => (
                <div key={block.title} className="border-l border-copper/50 pl-5">
                  <h3 className="display text-2xl text-ink">{block.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {block.items.map((item) => (
                      <li key={item} className="text-sm text-steel">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
