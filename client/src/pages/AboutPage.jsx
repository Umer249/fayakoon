import Introduction from '../components/Introduction'
import Mission from '../components/Mission'
import Ceo from '../components/Ceo'
import Quality from '../components/Quality'
import Leadership from '../components/Leadership'
import Gallery from '../components/Gallery'
import { fieldImages } from '../data/company'

export default function AboutPage() {
  return (
    <>
      <div className="relative overflow-hidden border-b border-mist/10 pb-10 pt-28 lg:pt-32">
        <img
          src={fieldImages[20].src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70" />
        <div className="section-pad relative">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
            Company
          </p>
          <h1 className="display mt-3 text-5xl font-bold text-sand sm:text-6xl lg:text-7xl">
            About Fayakoon
          </h1>
          <p className="mt-4 max-w-2xl text-mist/75">
            Engineering and construction excellence since 1994—built on talent, community
            commitment, and honest delivery.
          </p>
        </div>
      </div>
      <Introduction />
      <Mission />
      <Ceo />
      <Gallery
        images={fieldImages.slice(55, 67)}
        title="Our people on site"
        eyebrow="Teams"
        dense
      />
      <Leadership />
      <Quality />
    </>
  )
}
