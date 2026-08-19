import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <div className="relative overflow-hidden border-b border-mist/10 pb-10 pt-28 lg:pt-32">
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/75" />
        <div className="section-pad relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
            Connect
          </p>
          <h1 className="display mt-3 text-5xl font-bold text-sand sm:text-6xl lg:text-7xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-mist/75">
            Reach our offices in Rahim Yar Khan, Karachi, Lahore, and Rawalpindi, or send an
            inquiry online.
          </p>
        </div>
      </div>
      <Contact />
    </>
  )
}
