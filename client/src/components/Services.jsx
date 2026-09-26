import { motion } from 'framer-motion'
import { services, operations } from '../data/company'

export default function Services() {
  const serviceImageMap = {
    Dams: {
      src: '/images/uploads/uploads-234.webp',
      alt: 'Dam and civil infrastructure works',
    },
    'Fuel Storage Tanks & Depots': {
      src: '/images/uploads/uploads-333.jpeg',
      alt: 'Fuel storage tanks and depot construction',
    },
    'High Rise Buildings': {
      src: '/images/uploads/uploads-222.webp',
      alt: 'High rise and structural development',
    },
    'Mega Canals': {
      src: '/images/uploads/uploads-123.jpeg',
      alt: 'Canal and trench civil works',
    },
    'Asphalt Roads': {
      src: '/images/uploads/uploads-11.png',
      alt: 'Road and corridor development',
    },
    'Optical Fibre Deployment': {
      src: '/images/uploads/uploads-fiber.jpeg',
      alt: 'Optical fiber deployment works',
    },
  }

  const operationsHeroImage = '/images/uploads/uploads-12345.png'
  const serviceGallery = [
    {
      src: '/images/uploads/uploads-234.webp',
      alt: 'Civil Construction and Flow Line',
      label: 'Civil Construction / Flow Line',
    },
    {
      src: '/images/uploads/uploads-3334.jpeg',
      alt: 'Mechanical Fabrication, Plant Turnaround',
      label: 'Mechanical / Plant Turnaround',
    },
    {
      src: '/images/uploads/uploads-111.png',
      alt: 'E and I Works with Optical Fibre Deployment',
      label: 'E & I Works / Optical Fibre',
    },
    {
      src: '/images/uploads/uploads-222.webp',
      alt: 'Procurement, Manpower Supply, Equipment Rental',
      label: 'Procurement / Manpower / Equipment',
    },
  ]

  return (
    <section className="section-pad py-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="max-w-2xl text-sm leading-relaxed text-steel sm:text-base">
          From mega depots and canals to fiber corridors and high-rise packages, one
          disciplined delivery model across civil, mechanical, and communications.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const img = serviceImageMap[service.title] || {
              src: '/images/uploads/uploads-12345.png',
              alt: service.title,
            }
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
                  <h3 className="display heading-safe mt-2 text-xl text-sand sm:text-2xl lg:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist/80">{service.desc}</p>
                </div>
              </motion.article>
            )
          })}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="relative min-h-[320px] overflow-hidden lg:col-span-5">
            <img
              src={operationsHeroImage}
              alt="Operations and services"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
          </div>
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
              Operations & Services
            </p>
            <h3 className="display mt-3 text-4xl text-ink">In-house expertise</h3>
            <ul className="mt-8 columns-1 gap-x-10 sm:columns-2">
              {operations.map((item) => (
                <li
                  key={item}
                  className="mb-3 flex break-inside-avoid items-start gap-3 text-sm text-steel"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {serviceGallery.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative min-h-[160px] overflow-hidden md:min-h-[200px]"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-ink/65 px-2 py-1.5">
                <p className="heading-safe text-[10px] font-semibold uppercase leading-snug tracking-[0.08em] text-sand">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
