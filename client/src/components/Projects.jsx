import { projects } from '../data/company'

export default function Projects() {
  return (
    <section id="projects" className="bg-[#eff3f6] py-16 lg:py-20">
      <div className="section-pad mx-auto max-w-7xl">
        <h2 className="display text-3xl font-bold uppercase text-ink sm:text-4xl">Our Projects</h2>

        <div className="mt-8 grid gap-4 md:hidden">
          {projects.map((p) => (
            <article key={`${p.title}-${p.year}`} className="border border-mist/50 bg-white p-4 shadow-sm">
              <h3 className="font-semibold text-ink">{p.title}</h3>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-copper">{p.category}</p>
              <p className="mt-3 text-sm text-steel"><span className="font-semibold text-ink">Client:</span> {p.client}</p>
              <p className="mt-1 text-sm text-steel"><span className="font-semibold text-ink">Location:</span> {p.location}</p>
              <p className="mt-1 text-sm text-steel"><span className="font-semibold text-ink">Year:</span> {p.year}</p>
              <p className="mt-1 text-sm text-steel"><span className="font-semibold text-ink">Value:</span> {p.value}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 hidden overflow-x-auto md:block">
          <table className="w-full min-w-[720px] border-collapse bg-white text-left shadow-sm">
            <thead>
              <tr className="border-b border-mist bg-white text-[10px] uppercase tracking-[0.22em] text-steel">
                <th className="px-4 py-4 font-semibold">Project</th>
                <th className="px-4 py-4 font-semibold">Client</th>
                <th className="px-4 py-4 font-semibold">Location</th>
                <th className="px-4 py-4 font-semibold">Year</th>
                <th className="px-4 py-4 font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={`${p.title}-${p.year}`} className="border-b border-mist/60">
                  <td className="px-4 py-4">
                    <div className="font-semibold text-ink">{p.title}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-copper">
                      {p.category}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-steel">{p.client}</td>
                  <td className="px-4 py-4 text-sm text-steel">{p.location}</td>
                  <td className="px-4 py-4 text-sm text-steel">{p.year}</td>
                  <td className="px-4 py-4 text-sm font-semibold text-ink">{p.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
