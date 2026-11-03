import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/navbar.css'

// Logo file is at public/images/logo.png  ->  served as /images/logo.png
const LOGO_SRC = '/images/logo.png'

// Shared logo: used by the Navbar and by Footer.jsx (import { Logo } from './Navbar.jsx')
export function Logo({ height = 38, onClick }) {
  return (
    <Link to="/" className="sz-logo" onClick={onClick} aria-label="Space Zone Defence home">
      <img src={LOGO_SRC} alt="Space Zone Defence" style={{ height }} />
    </Link>
  )
}

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/defence', label: 'Defence' },
  { to: '/about', label: 'About' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sz-nav">
      <div className="container sz-nav-row">
        <Logo onClick={() => setOpen(false)} />

        <button
          type="button"
          className="sz-nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} />
        </button>

        <nav className={`sz-nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}