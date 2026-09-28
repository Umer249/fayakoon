import { motion } from 'framer-motion'
import { independentProjects } from '../data/company'

function ProjectShowcase({ project }) {
  const titleAtBottomOnly = project.titlePosition === 'bottom'
  const imageCount = project.images.length

  const titleClass =
    'heading-safe text-left text-base font-semibold text-ink sm:text-lg lg:text-xl'

  return (
    <motion.article
      id={project.id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      {!titleAtBottomOnly && (
        <h3 className={`${titleClass} mb-5 sm:mb-6`}>
          {project.title}
        </h3>
      )}

      {project.images.every((img) => img.fit === 'contain') ? (
        <div className="flex flex-wrap items-start gap-5">
          {project.images.map((img) => (
            <SingleImage key={img.src} img={img} />
          ))}
        </div>
      ) : imageCount === 1 ? (
        <SingleImage img={project.images[0]} />
      ) : (
        <MultiImageGrid images={project.images} />
      )}

      {(titleAtBottomOnly || project.caption) && (
        <div className="mt-5 flex flex-col items-start gap-2 text-left sm:mt-6">
          {titleAtBottomOnly && (
            <h3 className={titleClass}>{project.title}</h3>
          )}
          {project.caption && (
            <p className="text-left text-sm text-steel sm:text-[15px]">
              {project.caption}
            </p>
          )}
        </div>
      )}
    </motion.article>
  )
}

function SingleImage({ img }) {
  const natural = img.fit === 'contain'
  const frame = natural ? 'mr-auto w-fit max-w-full' : 'mr-auto w-full'

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className={`bg-mist/20 ${frame}`}
    >
      <img
        src={img.src}
        alt={img.alt}
        width={natural ? img.width : undefined}
        height={natural ? img.height : undefined}
        className={
          natural
            ? 'block h-auto max-w-full'
            : 'aspect-[16/10] w-full object-cover transition duration-700 hover:scale-[1.02] sm:aspect-[2/1]'
        }
        style={natural ? { width: img.width } : undefined}
        loading={natural ? 'eager' : 'lazy'}
      />
    </motion.div>
  )
}

function MultiImageGrid({ images }) {
  const primary = images[0]
  const secondary = images[1]
  const rest = images.slice(2)

  return (
    <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 md:items-start lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden bg-mist/20"
        >
          <img
            src={primary.src}
            alt={primary.alt}
            className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.02] md:aspect-[5/4] lg:min-h-[280px] lg:aspect-auto"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: 0.08, duration: 0.5 }}
          className="overflow-hidden bg-mist/20"
        >
          <img
            src={secondary.src}
            alt={secondary.alt}
            className="aspect-[16/10] w-full object-cover transition duration-700 hover:scale-[1.02] md:aspect-[4/5] lg:min-h-[220px] lg:aspect-auto"
            loading="lazy"
          />
        </motion.div>
      </div>

      {rest.map((img, i) => {
        return (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: Math.min((i + 2) * 0.06, 0.2), duration: 0.5 }}
            className="overflow-hidden bg-mist/20"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="aspect-[16/9] w-full object-cover transition duration-700 hover:scale-[1.02]"
              loading="lazy"
            />
          </motion.div>
        )
      })}
    </div>
  )
}

export default function IndependentProjects() {
  return (
    <section id="independent" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <div className="max-w-2xl text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
            Portfolio
          </p>
          <h2 className="display heading-safe mt-3 text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            Independent Projects
          </h2>
          <p className="mt-4 text-sm text-steel sm:text-base">
            Hospitality, retail energy, wellness, pharmaceutical, and Japanese vehicle-import ventures delivered
            under the Fayakoon group.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-20 sm:mt-16 sm:gap-24 lg:gap-36">
          {independentProjects.map((project) => (
            <ProjectShowcase key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
