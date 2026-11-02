import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { careers } from '../data/site.js'
import { useJobs } from '../hooks/useJob.js'

// Careers list page. Each job links to /careers/<id> (detail) — the apply form
// lives on /careers/<id>/apply (see CareerApply.jsx).
export default function Careers() {
  const { hero, positionsTitle, emptyText, generalText } = careers
  const { status, jobs: positions } = useJobs()

  return (
    <>
      {/* 1. Hero — flat dark, no image */}
      <PageHero plain small badge={hero.badge} title={hero.title} text={hero.text} />

      {/* 2. Open positions list */}
      <section className="section section-light section-white">
        <div className="container">
          <div className="jobs">
            <h2>{positionsTitle}</h2>

            {status === 'loading' && <p className="job-empty">Loading openings…</p>}
            {status === 'error' && <p className="job-empty">We could not load the openings right now. Please try again later.</p>}
            {status === 'ready' && positions.length === 0 && <p className="job-empty">{emptyText}</p>}

            {positions.map((p) => (
              <div className="job-item" key={p.id}>
                <div className="job-dept">{p.department}</div>
                <div className="job-line">
                  <Link to={`/careers/${p.id}`} className="job-link">{p.title}</Link>
                  <span className="job-loc">{p.location}</span>
                </div>
              </div>
            ))}

            <p className="job-general">
              {generalText}{' '}
              <Link to="/careers/general/apply" className="job-link-inline">Send a general application</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
