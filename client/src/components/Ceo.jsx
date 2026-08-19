import { motion } from 'framer-motion'
import { ceoMessage } from '../data/company'

export default function Ceo() {
  return (
    <section id="ceo" className="relative overflow-hidden border-y border-mist/10">
      <div className="bg-forest">
        <div className="section-pad mx-auto max-w-7xl py-12 sm:py-14 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper-bright">
              Leadership
            </p>
            <h2 className="display heading-safe mt-3 text-3xl font-bold text-sand sm:text-5xl lg:text-6xl">
              Message from the
              <span className="mt-1 block text-5xl text-sand sm:text-7xl lg:text-8xl">CEO</span>
            </h2>
            <div className="mt-4 h-1 w-24 bg-sand/80" />
            <p className="mt-4 text-lg text-mist/85 sm:text-xl">{ceoMessage.name}</p>
            <p className="mt-1 text-sm tracking-wide text-steel">{ceoMessage.role}</p>
          </motion.div>
        </div>
      </div>

      <div className="bg-sand text-ink">
        <div className="section-pad relative mx-auto max-w-7xl py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <p className="text-lg font-semibold text-forest sm:text-xl">{ceoMessage.greeting}</p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/75 sm:text-lg">
              {ceoMessage.body.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-forest">
              Our continued success is anchored in three core principles
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {ceoMessage.principles.map((p, i) => (
                <div key={p.title} className="border border-ink/10 bg-white p-5">
                  <span className="display text-xl text-copper">0{i + 1}</span>
                  <h3 className="mt-2 font-semibold text-forest">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-base leading-relaxed text-ink/75 sm:text-lg">
              {ceoMessage.closing}
            </p>
            <p className="mt-8 text-sm text-ink/55">{ceoMessage.signOff}</p>
            <p className="display mt-2 text-3xl text-forest">{ceoMessage.name}</p>
            <p className="mt-1 text-sm text-ink/55">{ceoMessage.role}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
