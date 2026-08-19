import { homeAbout } from '../data/company'

export default function HomeAbout() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="section-pad mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-copper">About Us</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
          <h2 className="display text-3xl font-bold text-ink sm:text-4xl lg:col-span-5">
            Fayakoon Group
          </h2>
          <p className="text-base leading-relaxed text-steel lg:col-span-7 lg:text-lg">
            {homeAbout}
          </p>
        </div>
      </div>
    </section>
  )
}
