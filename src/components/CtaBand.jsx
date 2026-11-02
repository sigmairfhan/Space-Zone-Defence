import { Link } from 'react-router-dom'

export default function CtaBand({ title = 'Talk to our engineers', text = 'Placeholder: tell us about your mission requirements.' }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4">
          <div>
            <h2 className="mb-2">{title}</h2>
            <p className="text-muted-sz mb-0">{text}</p>
          </div>
          <Link to="/contact" className="btn btn-sz">
            Contact us <i className="bi bi-arrow-right ms-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
