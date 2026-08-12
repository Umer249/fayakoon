import { Link } from 'react-router-dom'
import { company } from '../data/company'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-mist/10 bg-ink">
      <div className="section-pad mx-auto flex max-w-7xl flex-col gap-8 py-12 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Link to="/" className="display text-4xl font-bold text-sand hover:text-copper-bright">
            FAYAKOON
          </Link>
          <p className="mt-2 max-w-md text-sm text-mist/60">
            {company.name} · PEC {company.pec} · NTN {company.ntn}
          </p>
          <nav className="mt-5 flex flex-wrap gap-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mist/55 transition hover:text-copper-bright"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="text-sm text-mist/55">
          <p>
            <a href={`mailto:${company.email}`} className="hover:text-copper-bright">
              {company.email}
            </a>
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} Fayakoon Engineering Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
