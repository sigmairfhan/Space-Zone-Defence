import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { company, navLinks } from '../data/site.js'

export function Logo() {
  return (
    <Link to="/" className="sz-brand">
      <svg className="sz-mark" viewBox="0 0 40 40" aria-hidden="true">
        <path d="M4 6l16 28L36 6l-8 0-8 14-8-14z" fill="var(--sz-accent)" />
      </svg>
      <span>
        <strong>{company.short}</strong> {company.suffix}
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="navbar navbar-expand-lg sticky-top sz-nav">
      <div className="container">
        <Logo />
        <button
          className="navbar-toggler sz-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} />
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${open ? 'show' : ''}`}>
          <ul className="navbar-nav align-items-lg-center">
            {navLinks.map((l) => (
              <li className="nav-item" key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} className="nav-link" onClick={close}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
