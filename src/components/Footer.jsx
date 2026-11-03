import { Link } from 'react-router-dom'
import { Logo } from './Navbar.jsx'
import { company, footerLinks } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="sz-footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <Logo />
            <p className="mt-4" style={{ maxWidth: 480 }}>
              Placeholder: {company.name} develops advanced propulsion and manufacturing capabilities for
              defence applications. Replace with the final company description.
            </p>
            <form className="footer-search" onSubmit={(e) => e.preventDefault()} role="search">
              <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
            </form>
          </div>
          <div className="col-6 col-lg-3 offset-lg-1">
            <h6>Programs</h6>
            <ul>
              {footerLinks.programs.map((l) => (
                <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-lg-2">
            <h6>Company</h6>
            <ul>
              {footerLinks.company.map((l) => (
                <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-lg-end gap-3 mt-5 social">
          {footerLinks.social.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
              <i className={`bi ${s.icon}`} />
            </a>
          ))}
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between gap-2 mt-4 pt-3 small copyright">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>{company.address}</span>
        </div>
      </div>
    </footer>
  )
}
