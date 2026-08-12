import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { company } from '../data/company'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

const linkClass = ({ isActive }) =>
  `text-xs font-semibold uppercase tracking-[0.22em] transition ${
    isActive ? 'text-copper-bright' : 'text-mist/75 hover:text-copper-bright'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink/90 backdrop-blur-md border-b border-mist/10'
          : 'bg-transparent'
      }`}
    >
      <div className="section-pad flex h-16 items-center justify-between lg:h-20">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="display text-2xl font-bold tracking-[0.08em] text-sand sm:text-3xl">
            FAYAKOON
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.28em] text-steel sm:inline">
            Engineering
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-sm bg-copper px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-ink transition hover:bg-copper-bright"
          >
            Inquire
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex rounded-sm border border-mist/20 p-2 text-sand lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-mist/10 bg-ink/95 px-5 py-6 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `display text-2xl ${isActive ? 'text-copper-bright' : 'text-sand'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <p className="pt-2 text-sm text-steel">{company.email}</p>
          </div>
        </div>
      )}
    </header>
  )
}
