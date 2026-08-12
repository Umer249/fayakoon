import { motion } from 'framer-motion'
import { clients, fieldImages } from '../data/company'

export default function Clients() {
  return (
    <section id="clients" className="relative overflow-hidden border-y border-mist/10 bg-ink-soft/60">
      <div className="absolute inset-0 opacity-25">
        <img
          src={fieldImages[55].src}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/85" />
      </div>

      <div className="section-pad relative mx-auto max-w-7xl py-24 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
            Trust
          </p>
          <h2 className="display mt-4 text-5xl font-bold text-sand sm:text-6xl">
            Our Clients
          </h2>
          <p className="mt-4 max-w-lg text-mist/70">
            Long-standing partnerships with energy, telecom, fertilizer, FMCG, and
            industrial leaders across Pakistan.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-3 sm:gap-4">
          {clients.map((client, i) => (
            <motion.span
              key={client}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.35 }}
              className="border border-mist/15 bg-ink/50 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-sand/90"
            >
              {client}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
