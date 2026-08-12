import { motion } from 'framer-motion'
import { services, operations, serviceImages, fieldImages } from '../data/company'

export default function Services() {
  return (
    <section className="section-pad py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="max-w-2xl text-sm leading-relaxed text-mist/70 sm:text-base">
          From mega depots and canals to fiber corridors and high-rise packages—one
          disciplined delivery model across civil, mechanical, and communications.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const img = serviceImages[i % serviceImages.length]
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                className="group relative min-h-[280px] overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <span className="display text-3xl text-copper-bright">{service.id}</span>
                  <h3 className="display mt-2 text-3xl text-sand">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist/80">{service.desc}</p>
                </div>
              </motion.article>
            )
          })}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="relative min-h-[320px] overflow-hidden lg:col-span-5">
            <img
              src={fieldImages[10].src}
              alt={fieldImages[10].alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
          </div>
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
              Operations & Services
            </p>
            <h3 className="display mt-3 text-4xl text-sand">In-house expertise</h3>
            <ul className="mt-8 columns-1 gap-x-10 sm:columns-2">
              {operations.map((item) => (
                <li
                  key={item}
                  className="mb-3 flex break-inside-avoid items-start gap-3 text-sm text-mist/80"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[12, 25, 48, 55].map((idx, i) => (
            <motion.div
              key={fieldImages[idx].src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative min-h-[160px] overflow-hidden md:min-h-[200px]"
            >
              <img
                src={fieldImages[idx].src}
                alt={fieldImages[idx].alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
