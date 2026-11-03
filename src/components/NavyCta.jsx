import { Link } from 'react-router-dom'

export default function NavyCta({ title, accent, text }) {
  return (
    <section className="navy-cta">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <h2>
              {title} <span className="serif-accent d-block">{accent}</span>
            </h2>
            <p className="mb-0 mt-3">{text}</p>
          </div>
          <div className="col-lg-5 text-lg-end">
            <Link to="/contact" className="btn btn-sz">
              Contact our team <i className="bi bi-arrow-right ms-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
