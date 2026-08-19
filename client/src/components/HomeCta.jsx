import { Link } from 'react-router-dom'

export default function HomeCta() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <img
        src="/images/official/9010577_orig.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/90" />
      <div className="section-pad relative mx-auto max-w-4xl text-center text-sand">
        <h2 className="display text-2xl font-bold uppercase sm:text-3xl">
          If you need industrial solution... we are available for you
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-mist/85 sm:text-base">
          We provide innovative solutions for sustainable progress. Our professional team works to
          increase productivity and cost effectiveness on the market.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-block bg-copper px-8 py-3 text-sm font-bold uppercase tracking-[0.12em] text-sand transition hover:bg-copper-bright"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}
