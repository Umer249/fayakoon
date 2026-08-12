import { motion } from 'framer-motion'
import { projects } from '../data/company'

export default function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-mist/10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-copper">
              Track Record
            </p>
            <h2 className="display mt-4 text-5xl font-bold text-sand sm:text-6xl lg:text-7xl">
              Selected Projects
            </h2>
          </div>
          <p className="max-w-sm text-sm text-mist/70">
            Highlights from three decades of civil, telecom, housing, and energy
            infrastructure delivery across Pakistan.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-mist/20 text-[10px] uppercase tracking-[0.22em] text-steel">
                <th className="pb-4 pr-4 font-semibold">Project</th>
                <th className="pb-4 pr-4 font-semibold">Client</th>
                <th className="pb-4 pr-4 font-semibold">Location</th>
                <th className="pb-4 pr-4 font-semibold">Year</th>
                <th className="pb-4 font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <motion.tr
                  key={`${p.title}-${p.year}`}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.35 }}
                  className="group border-b border-mist/10 transition hover:bg-mist/[0.03]"
                >
                  <td className="py-5 pr-4">
                    <div className="font-semibold text-sand">{p.title}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-copper">
                      {p.category}
                    </div>
                  </td>
                  <td className="py-5 pr-4 text-sm text-mist/75">{p.client}</td>
                  <td className="py-5 pr-4 text-sm text-mist/75">{p.location}</td>
                  <td className="py-5 pr-4 text-sm text-mist/75">{p.year}</td>
                  <td className="py-5 text-sm font-semibold text-sand">{p.value}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
