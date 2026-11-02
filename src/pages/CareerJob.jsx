import { Link, useParams } from 'react-router-dom'
import JobSidebar, { JobMissing } from '../components/JobSidebar.jsx'
import { useJob } from '../hooks/useJob.js'

// Job detail page: /careers/:id
export default function CareerJob() {
  const { id } = useParams()
  const { status, job } = useJob(id)

  if (status === 'loading') return <section className="section section-light section-flat cr-section"><div className="container"><p>Loading…</p></div></section>
  if (!job) return <JobMissing />

  return (
    <section className="section section-light section-flat cr-section">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <article className="cr-card cr-main">
              <Link to="/careers" className="cr-back">
                <i className="bi bi-chevron-left" /> Job Openings
              </Link>
              <h1 className="cr-title">{job.title}</h1>
              <div className="cr-sub">{job.department} - {job.location}</div>

              <div className="cr-body">
                <h2 className="cr-h2">{job.title}</h2>
                {job.sections.map((s) => (
                  <div key={s.title}>
                    <h3>{s.title}</h3>
                    {s.text && <p>{s.text}</p>}
                    {s.items && (
                      <ul>
                        {s.items.map((it, i) => <li key={i}>{it}</li>)}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="col-lg-4">
            <JobSidebar job={job} mode="detail" />
          </div>
        </div>
      </div>
    </section>
  )
}
