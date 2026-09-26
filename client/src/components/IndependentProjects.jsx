import { motion } from 'framer-motion'
import { independentProjects } from '../data/company'

function ProjectShowcase({ project, index }) {
  const leftHeavy = index % 2 === 0
  // Prefer explicit data; fall back to alternating left/right rhythm
  const resolvedTitleAlign = project.titleAlign
    ? project.titleAlign === 'right'
      ? 'text-right'
      : 'text-left'
    : leftHeavy
      ? 'text-left'
      : 'text-right'

  const titleAtBottomOnly = project.titlePosition === 'bottom'
  const imageCount = project.images.length

  const titleClass =
    'heading-safe text-base font-semibold text-ink sm:text-lg lg:text-xl'

  // Outer article: alternate max-width anchoring so blocks don't share one column
  const articleShell = leftHeavy
    ? 'mr-auto w-full max-w-5xl lg:pr-8 xl:pr-16'
    : 'ml-auto w-full max-w-5xl lg:pl-8 xl:pl-16'

  // Mobile: slight horizontal breathing so stacks aren't identical full-bleed
  const mobileNudge = leftHeavy ? 'pl-0 pr-3 sm:pr-0' : 'pl-3 pr-0 sm:pl-0'

  return (
    <motion.article
      id={project.id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`${articleShell} ${mobileNudge}`}
    >
      {!titleAtBottomOnly && (
        <h3 className={`${titleClass} ${resolvedTitleAlign} mb-5 sm:mb-6`}>
          {project.title}
        </h3>
      )}

      {imageCount === 1 ? (
        <SingleImage
          img={project.images[0]}
          leftHeavy={leftHeavy}
        />
      ) : (
        <MultiImageGrid images={project.images} leftHeavy={leftHeavy} />
      )}

      {(titleAtBottomOnly || project.caption) && (
        <div
          className={`mt-5 flex flex-col gap-2 sm:mt-6 ${
            titleAtBottomOnly && project.caption
              ? 'sm:flex-row sm:items-baseline sm:justify-between'
              : ''
          }`}
        >
          {titleAtBottomOnly && (
            <h3 className={`${titleClass} ${resolvedTitleAlign}`}>{project.title}</h3>
          )}
          {project.caption && (
            <p
              className={`text-sm text-steel sm:text-[15px] ${
                project.captionAlign === 'left' ? 'text-left' : 'text-right'
              }`}
            >
              {project.caption}
            </p>
          )}
        </div>
      )}
    </motion.article>
  )
}

function SingleImage({ img, leftHeavy }) {
  // Single image sits offset: left-heavy projects hug left with narrower max;
  // right-heavy hug right — breaks the centered full-width column.
  const frame = leftHeavy
    ? 'mr-auto w-full max-w-full sm:max-w-[92%] lg:max-w-[85%]'
    : 'ml-auto w-full max-w-full sm:max-w-[92%] lg:max-w-[85%]'

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
      className={`overflow-hidden bg-mist/20 ${frame}`}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="aspect-[16/10] w-full object-cover transition duration-700 hover:scale-[1.02] sm:aspect-[2/1]"
        loading="lazy"
      />
    </motion.div>
  )
}

function MultiImageGrid({ images, leftHeavy }) {
  // Asymmetric 2-up on md+: one wider lead + one offset companion.
  // Stacked on mobile with alternating horizontal inset.
  const primary = images[0]
  const secondary = images[1]
  const rest = images.slice(2)

  const gridDir = leftHeavy
    ? 'md:grid-cols-[1.35fr_1fr]'
    : 'md:grid-cols-[1fr_1.35fr]'

  const primaryOrder = leftHeavy ? 'md:order-1' : 'md:order-2'
  const secondaryOrder = leftHeavy ? 'md:order-2' : 'md:order-1'

  // Vertical stagger so the companion sits lower / higher
  const primaryOffset = leftHeavy
    ? 'md:translate-y-0'
    : 'md:translate-y-6 lg:translate-y-10'
  const secondaryOffset = leftHeavy
    ? 'md:translate-y-10 lg:translate-y-14'
    : 'md:translate-y-0'

  // Mobile: alternate inset so images aren't edge-aligned identically
  const primaryMobile = leftHeavy ? 'mr-4 sm:mr-0' : 'ml-4 sm:ml-0'
  const secondaryMobile = leftHeavy ? 'ml-4 sm:ml-0' : 'mr-4 sm:mr-0'

  return (
    <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8">
      <div
        className={`grid gap-5 sm:gap-6 md:items-start md:pb-10 lg:gap-8 lg:pb-14 ${gridDir}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className={`overflow-hidden bg-mist/20 ${primaryOrder} ${primaryOffset} ${primaryMobile}`}
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
          className={`overflow-hidden bg-mist/20 ${secondaryOrder} ${secondaryOffset} ${secondaryMobile}`}
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
        const odd = i % 2 === 0
        const extraFrame = leftHeavy
          ? odd
            ? 'ml-auto w-full max-w-[90%] md:max-w-[70%]'
            : 'mr-auto w-full max-w-[88%] md:max-w-[65%]'
          : odd
            ? 'mr-auto w-full max-w-[90%] md:max-w-[70%]'
            : 'ml-auto w-full max-w-[88%] md:max-w-[65%]'

        return (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: Math.min((i + 2) * 0.06, 0.2), duration: 0.5 }}
            className={`overflow-hidden bg-mist/20 ${extraFrame}`}
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
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
            Portfolio
          </p>
          <h2 className="display heading-safe mt-3 text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
            Independent Projects
          </h2>
          <p className="mt-4 text-sm text-steel sm:text-base">
            Hospitality, retail energy, wellness, pharmaceutical, and rental-car ventures delivered
            under the Fayakoon group.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-20 sm:mt-16 sm:gap-24 lg:gap-36">
          {independentProjects.map((project, index) => (
            <ProjectShowcase key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
