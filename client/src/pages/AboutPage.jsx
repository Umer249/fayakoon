import Introduction from '../components/Introduction'
import Mission from '../components/Mission'
import Ceo from '../components/Ceo'
import Quality from '../components/Quality'
import Leadership from '../components/Leadership'
import Gallery from '../components/Gallery'
import Reveal from '../components/Reveal'
import { uploadImages } from '../data/company'

export default function AboutPage() {
  return (
    <>
      <section className="depth-stage relative flex min-h-[68vh] items-end overflow-hidden">
        <img
          src="/images/hero/hero-engineering.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_58%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/35 to-transparent" />
        <div className="section-pad relative w-full pb-16 pt-16 lg:pb-20">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-copper">Company</p>
            <h1 className="display heading-safe headline-hero mt-4 max-w-5xl text-sand">
              About Fayakoon
            </h1>
            <p className="mt-6 max-w-2xl text-base text-sand/85 sm:text-lg">
              Engineering and construction excellence since 1994, built on talent, community
              commitment, and honest delivery.
            </p>
          </Reveal>
        </div>
      </section>
      <Introduction />
      <Mission />
      <Ceo />
      <Leadership />
      <Quality />
      <Gallery
        images={uploadImages}
        title="Our people on site"
        eyebrow="Teams"
        dense
      />
    </>
  )
}
