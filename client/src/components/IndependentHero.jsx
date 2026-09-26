import { motion } from 'framer-motion'

export default function IndependentHero() {
  return (
    <section className="relative overflow-hidden border-b border-mist/10 pb-10 pt-28 lg:pt-32">
      <img
        src="/images/independent/hero-banner.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70" />

      <div className="section-pad relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
            Portfolio
          </p>
          <h1 className="display heading-safe mt-3 text-4xl font-bold text-white sm:text-6xl lg:text-7xl">
            Independent Projects
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Owned ventures across hospitality, retail, petroleum, trading, and rental cars — built
            alongside Fayakoon&apos;s engineering work.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
