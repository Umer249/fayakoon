import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { homeSlides } from '../data/company'

export default function Hero() {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '14%'])

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((v) => (v + 1) % homeSlides.length)
    }, 6500)
    return () => clearInterval(timer)
  }, [])

  const slide = homeSlides[active]

  return (
    <section
      ref={ref}
      className="depth-stage relative h-[72vh] min-h-[480px] overflow-hidden lg:h-[82vh]"
    >
      {homeSlides.map((item, idx) => (
        <div
          key={item.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === active ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <motion.div className="absolute -inset-8" style={{ y: idx === active ? imageY : 0 }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ objectPosition: item.position || 'center center' }}
              className={`h-full w-full object-cover ${
                idx === active && !reduce ? 'hero-kenburns' : ''
              }`}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
          <div className="absolute inset-0 bg-ink/25" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center justify-center px-5 pb-28 sm:px-8 sm:pb-32">
        <motion.h1
          key={slide.title}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="display heading-safe mx-auto w-full max-w-4xl text-center text-[clamp(1.85rem,4.4vw,4.35rem)] leading-[1.08] text-sand"
          style={{ transform: 'translateZ(40px)' }}
        >
          {slide.title}
        </motion.h1>
      </div>

      <div className="absolute bottom-16 left-1/2 z-20 flex -translate-x-1/2 gap-2.5 sm:bottom-[4.5rem]">
        {homeSlides.map((item, idx) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setActive(idx)}
            className={`h-2.5 rounded-full transition ${
              idx === active ? 'w-8 bg-copper' : 'w-2.5 bg-sand/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
