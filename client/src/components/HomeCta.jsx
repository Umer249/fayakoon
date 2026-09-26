import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function HomeCta() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <img
        src="/images/hero/hero-engineering.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[center_58%]"
      />
      <div className="absolute inset-0 bg-ink/82" />
      <div className="section-pad relative mx-auto max-w-5xl text-center text-sand">
        <Reveal>
          <h2 className="display headline-section uppercase">
            If you need industrial solution... we are available for you
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-mist/85 sm:text-lg">
            We provide innovative solutions for sustainable progress. Our professional team works to
            increase productivity and cost effectiveness on the market.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-block bg-copper px-8 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-sand transition hover:-translate-y-0.5 hover:bg-copper-bright"
          >
            Contact Us
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
