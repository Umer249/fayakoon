import { motion } from 'framer-motion'
import { clients } from '../data/company'

export default function Clients() {
  return (
    <section id="clients" className="relative border-y border-mist/10 bg-sand">
      <div className="section-pad mx-auto max-w-7xl py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
            Trust
          </p>
          <h2 className="display mt-4 text-5xl font-bold text-ink sm:text-6xl">
            Our Clients
          </h2>
          <p className="mt-4 text-ink/65">
            Trusted by energy, telecom, fertilizer, infrastructure, and public-sector
            leaders across Pakistan.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
              className="group flex aspect-[5/4] items-center justify-center bg-white px-4 py-5 shadow-[0_1px_0_rgba(11,20,18,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(11,20,18,0.08)]"
              title={client.name}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
