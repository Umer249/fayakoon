import { motion } from 'framer-motion'
import { ceoMessage } from '../data/company'

export default function Ceo() {
  return (
    <section className="relative overflow-hidden border-y border-mist/10 bg-forest/40">
      <div className="absolute inset-0 grid-lines opacity-30" />
      <div className="section-pad relative mx-auto max-w-7xl py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
              Leadership
            </p>
            <h2 className="display mt-4 text-5xl font-bold text-sand sm:text-6xl">
              Message from
              <br />
              the CEO
            </h2>
            <div className="mt-10 border-t border-mist/15 pt-6">
              <p className="display text-3xl text-sand">{ceoMessage.name}</p>
              <p className="mt-1 text-sm tracking-wide text-steel">{ceoMessage.role}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <p className="text-sm italic text-copper-bright">{ceoMessage.greeting}</p>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-mist/85 sm:text-lg">
              {ceoMessage.body.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-sand">
              Our continued success is anchored in three core principles
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {ceoMessage.principles.map((p, i) => (
                <div key={p.title} className="border border-mist/10 bg-ink/30 p-5">
                  <span className="display text-copper text-xl">0{i + 1}</span>
                  <h3 className="mt-2 font-semibold text-sand">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist/70">{p.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-base leading-relaxed text-mist/85">{ceoMessage.closing}</p>
            <p className="mt-6 text-sm text-steel">{ceoMessage.signOff}</p>
            <p className="display mt-1 text-2xl text-sand">{ceoMessage.name}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
