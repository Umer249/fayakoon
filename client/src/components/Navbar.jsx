import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Facebook, Linkedin, Mail, Menu, Phone, X } from 'lucide-react'
import { company } from '../data/company'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  {
    label: 'Products & Services',
    children: [
      { to: '/services', label: 'Products & Services', end: true },
      { to: '/projects', label: 'Independent Projects', end: true },
    ],
  },
  { to: '/contact', label: 'Contact' },
]

const navLinkClass = ({ isActive }) =>
  `px-3 xl:px-4 py-4 text-xs font-semibold uppercase tracking-[0.14em] transition ${
    isActive ? 'text-copper' : 'text-ink/90 hover:text-copper'
  }`

function isServicesActive(pathname) {
  return pathname.startsWith('/services') || pathname.startsWith('/projects')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    function onPointerDown(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [])

  const servicesActive = isServicesActive(location.pathname)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white shadow-sm">
      <div className="bg-ink text-sand">
        <div className="section-pad mx-auto flex max-w-7xl items-center justify-between gap-3 py-2 text-[11px] sm:text-xs">
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/fayakoongroup/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-copper"
            >
              <Facebook size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/fayakoon-group-012379195/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-copper"
            >
              <Linkedin size={14} />
            </a>
          </div>
          <p className="hidden items-center gap-2 truncate md:flex">
            <Mail size={13} />
            <span className="truncate">{company.email}</span>
            <span className="text-mist/40">|</span>
            <Phone size={13} />
            {company.landline}
          </p>
          <p className="flex items-center gap-2 md:hidden">
            <Phone size={13} />
            {company.landline}
          </p>
        </div>
      </div>

      <div className="bg-white">
        <div className="section-pad mx-auto flex max-w-7xl min-w-0 items-center justify-between gap-3 py-3 lg:py-4">
          <Link to="/" className="min-w-0 flex-1 overflow-hidden pr-1 lg:flex-none lg:overflow-visible lg:pr-0">
            <img
              src="/images/brand/fayakoon-logo.png"
              alt="Fayakoon Group of Companies"
              className="logo-fit block max-h-8 sm:max-h-9 lg:max-h-11"
            />
          </Link>

          <nav className="hidden items-center lg:flex">
            {links.map((link) =>
              link.children ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 px-3 xl:px-4 py-4 text-xs font-semibold uppercase tracking-[0.14em] transition ${
                      servicesActive || servicesOpen
                        ? 'text-copper'
                        : 'text-ink hover:text-copper'
                    }`}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onClick={() => setServicesOpen((v) => !v)}
                    onMouseEnter={() => setServicesOpen(true)}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div
                      className="absolute left-0 top-full z-50 min-w-[220px] border border-ink/10 bg-white py-2 shadow-lg"
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {link.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          end={child.end}
                          onClick={() => setServicesOpen(false)}
                          className={({ isActive }) =>
                            `block px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-[#f7f8fa] ${
                              isActive ? 'text-copper' : 'text-ink hover:text-copper'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink key={link.to} to={link.to} end={link.end} className={navLinkClass}>
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          <button
            type="button"
            className="inline-flex rounded border border-ink/15 p-2 text-ink lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col">
            {links.map((link) =>
              link.children ? (
                <div key={link.label} className="border-b border-mist/40 last:border-b-0">
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between py-3 text-sm font-semibold uppercase tracking-[0.14em] ${
                      servicesActive ? 'text-copper' : 'text-ink'
                    }`}
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((v) => !v)}
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="mb-2 ml-3 flex flex-col border-l border-mist/50 pl-3">
                      {link.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          end={child.end}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `py-2.5 text-xs font-semibold uppercase tracking-[0.12em] ${
                              isActive ? 'text-copper' : 'text-steel hover:text-copper'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `border-b border-mist/40 py-3 text-sm font-semibold uppercase tracking-[0.14em] last:border-b-0 ${
                      isActive ? 'text-copper' : 'text-ink'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </div>
        </div>
      )}
    </header>
  )
}
