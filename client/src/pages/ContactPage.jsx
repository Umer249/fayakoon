import Contact from '../components/Contact'
import { fieldImages } from '../data/company'

export default function ContactPage() {
  return (
    <>
      <div className="relative overflow-hidden border-b border-mist/10 pb-10 pt-28 lg:pt-32">
        <img
          src={fieldImages[5].src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/75" />
        <div className="section-pad relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
            Connect
          </p>
          <h1 className="display mt-3 text-5xl font-bold text-sand sm:text-6xl lg:text-7xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-mist/75">
            Reach our offices in Rahim Yar Khan, Karachi, Lahore, and Rawalpindi—or send an
            inquiry online.
          </p>
        </div>
      </div>
      <Contact />
      <div className="section-pad pb-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-4">
          {[8, 18, 38, 68].map((idx) => (
            <div key={idx} className="relative min-h-[140px] overflow-hidden md:min-h-[180px]">
              <img
                src={fieldImages[idx].src}
                alt={fieldImages[idx].alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
