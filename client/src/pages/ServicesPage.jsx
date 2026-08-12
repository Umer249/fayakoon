import Services from '../components/Services'
import Projects from '../components/Projects'
import Gallery from '../components/Gallery'
import { fieldImages } from '../data/company'

export default function ServicesPage() {
  return (
    <>
      <div className="section-pad border-b border-mist/10 bg-forest/25 pb-10 pt-28 lg:pt-32">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
          Capabilities
        </p>
        <h1 className="display mt-3 text-5xl font-bold text-sand sm:text-6xl lg:text-7xl">
          Services
        </h1>
        <p className="mt-4 max-w-2xl text-mist/75">
          Civil construction, mechanical packages, optical fiber deployment, and mega
          infrastructure—delivered nationwide.
        </p>
      </div>
      <Services />
      <Projects />
      <Gallery
        images={fieldImages}
        title="Field documentation"
        eyebrow="Proof of work"
        limit={16}
        showVideo
        dense
      />
    </>
  )
}
