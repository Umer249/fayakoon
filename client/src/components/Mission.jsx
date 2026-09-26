import { motion } from 'framer-motion'
import { mission, missionClosing } from '../data/company'

export default function Mission() {
  return (
    <section id="mission" className="relative overflow-hidden bg-white text-ink">
      <div className="section-pad mx-auto max-w-7xl py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
            Purpose
          </p>
          <h2 className="display headline-section mt-4 font-bold text-forest">
            Our Mission
          </h2>
        </motion.div>

        <div className="mt-12 space-y-8">
          {mission.map((item, i) => (
            <motion.div
              key={item.slice(0, 40)}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="depth-card grid gap-4 border-l-4 border-copper bg-white/60 pl-5 sm:grid-cols-[auto_1fr] sm:gap-8 sm:pl-8"
            >
              <span className="display text-3xl text-copper sm:text-4xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="max-w-4xl text-base leading-relaxed text-ink/75 sm:text-lg">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl border-t border-ink/10 pt-8 text-base leading-relaxed text-ink/70 sm:text-lg"
        >
          {missionClosing}
        </motion.p>
      </div>
    </section>
  )
}
