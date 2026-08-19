import { useEffect, useState } from 'react'
import { homeSlides } from '../data/company'

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((v) => (v + 1) % homeSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[300px] overflow-hidden h-[58vh] sm:h-[62vh] lg:h-[600px]">
      {homeSlides.map((slide, idx) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/45" />
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center sm:px-6">
            <h1 className="display max-w-5xl text-2xl font-bold text-sand sm:text-4xl lg:text-5xl">
              {slide.title}
            </h1>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {homeSlides.map((slide, idx) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setActive(idx)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              idx === active ? 'bg-copper' : 'bg-sand/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
