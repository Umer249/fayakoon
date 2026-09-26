import { clients } from '../data/company'
import Reveal from './Reveal'

export default function Clients() {
  return (
    <section id="clients" className="relative bg-[#eff3f6] py-20 lg:py-28">
      <div className="section-pad mx-auto max-w-7xl">
        <Reveal>
          <h2 className="display headline-section font-bold uppercase text-ink">
            Our Core Partners
          </h2>
        </Reveal>

        <div className="depth-stage mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="lift-card flex aspect-[5/4] items-center justify-center bg-white px-4 py-5 shadow-sm"
              title={client.name}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
