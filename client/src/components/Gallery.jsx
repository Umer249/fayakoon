import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { fieldImages, fieldVideo } from '../data/company'

export default function Gallery({
  images,
  title = 'In the field',
  eyebrow = 'Visual Showcase',
  limit,
  showVideo = false,
  dense = false,
}) {
  const items = images || fieldImages
  const [expanded, setExpanded] = useState(false)
  const [lightbox, setLightbox] = useState(null)

  const visible = useMemo(() => {
    if (!limit || expanded) return items
    return items.slice(0, limit)
  }, [items, limit, expanded])

  return (
    <section id="gallery" className="section-pad py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
          {eyebrow}
        </p>
        <h2 className="display mt-4 text-5xl font-bold text-ink sm:text-6xl">{title}</h2>
        <p className="mt-3 max-w-xl text-sm text-steel">
          Documented field operations across fiber corridors, civil trenching, HDD, and
          utility installation.
        </p>

        {showVideo && (
          <div className="mt-10 overflow-hidden border border-mist/10 bg-ink">
            <video
              className="aspect-video w-full object-cover"
              src={fieldVideo}
              controls
              playsInline
              preload="metadata"
              poster={items[40]?.src || items[0]?.src}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <div
          className={`mt-10 grid gap-3 ${
            dense
              ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
              : 'grid-cols-2 md:grid-cols-3 md:gap-4'
          }`}
        >
          {visible.map((item, i) => (
            <motion.button
              type="button"
              key={item.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: Math.min(i * 0.03, 0.35), duration: 0.45 }}
              onClick={() => setLightbox(item)}
              className={`group relative overflow-hidden text-left ${
                !dense && (i === 0 || i === 3)
                  ? 'md:row-span-2 min-h-[240px] md:min-h-[380px]'
                  : 'min-h-[160px] md:min-h-[200px]'
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent opacity-70 transition group-hover:opacity-40" />
            </motion.button>
          ))}
        </div>

        {limit && items.length > limit && (
          <div className="mt-8">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="border border-mist/20 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-sand transition hover:border-copper hover:text-copper-bright"
            >
              {expanded ? 'Show less' : `View all ${items.length} photos`}
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              className="absolute right-5 top-5 rounded-sm border border-mist/20 p-2 text-sand"
              aria-label="Close"
              onClick={() => setLightbox(null)}
            >
              <X size={20} />
            </button>
            <motion.img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[90vh] max-w-[95vw] object-contain"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
