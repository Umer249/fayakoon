import { Link } from 'react-router-dom'
import { company, homeAbout } from '../data/company'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer>
      <div className="grid gap-px bg-mist/30 md:grid-cols-3">
        <div className="bg-ink p-8 text-center text-sand">
          <p className="text-xs font-bold uppercase tracking-[0.18em]">Call Us Now</p>
          <p className="mt-3 text-sm">{company.landline}</p>
        </div>
        <div className="bg-ink p-8 text-center text-sand">
          <p className="text-xs font-bold uppercase tracking-[0.18em]">Come Visit Us</p>
          <p className="mt-3 text-sm">
            Building No.14, Khuwaja Bungalows Commercial Area, Abbasia Town, Rahim Yar Khan
          </p>
        </div>
        <div className="bg-ink p-8 text-center text-sand">
          <p className="text-xs font-bold uppercase tracking-[0.18em]">Send Us A Message</p>
          <p className="mt-3 text-sm">
            <a href={`mailto:${company.email}`} className="hover:text-moss">
              {company.email}
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-mist/20 bg-white py-12">
        <div className="section-pad mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Link to="/" className="inline-block max-w-full">
              <img
                src="/images/brand/fayakoon-logo.png"
                alt="Fayakoon Group of Companies"
                className="logo-fit max-h-10"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm text-steel">{homeAbout}</p>
            <nav className="mt-5 flex flex-wrap gap-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[11px] font-semibold uppercase tracking-[0.2em] text-steel transition hover:text-copper"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="text-sm text-steel">
            <p>{company.name}</p>
            <p className="mt-1">PEC {company.pec} · NTN {company.ntn}</p>
            <p className="mt-4">© {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
