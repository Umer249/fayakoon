import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { company, heroImage } from '../data/company'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          className="h-full w-full object-cover object-[center_30%] animate-[heroZoom_28s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/45" />
        <div className="absolute inset-0 grid-lines opacity-40" />
      </div>

      <div className="relative section-pad flex min-h-[100svh] flex-col justify-end pb-20 pt-28 lg:pb-28 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="display text-[clamp(4.2rem,14vw,9.5rem)] leading-[0.85] font-bold text-sand"
          >
            FAYAKOON
          </motion.h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist/85 sm:text-xl">
            {company.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-sm bg-copper px-6 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-copper-bright"
            >
              View Services
              <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-mist/25 px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-sand transition hover:border-copper hover:text-copper-bright"
            >
              Talk to Us
            </Link>
          </div>
        </motion.div>

        <a
          href="#gallery"
          className="absolute bottom-6 right-6 hidden items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-steel transition hover:text-sand md:inline-flex lg:right-12"
        >
          Scroll
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
