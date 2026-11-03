import { Link } from 'react-router-dom'

// Right-hand column used on the job detail page and the apply page.
// mode="detail": shows the "Apply for This Job" button
// mode="apply":  shows the "View Job Description" button
export default function JobSidebar({ job, mode = 'detail' }) {
  const base = typeof window !== 'undefined' ? window.location.origin : ''
  const url = `${base}/careers/${job.id}`
  const enc = encodeURIComponent(url)

  const share = [
    { label: 'LinkedIn', icon: 'bi-linkedin', href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc}` },
    { label: 'X', icon: 'bi-twitter-x', href: `https://twitter.com/intent/tweet?url=${enc}` },
    { label: 'Facebook', icon: 'bi-facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${enc}` },
  ]

  const meta = [
    ['Location', job.location],
    ['Department', job.department],
    ['Employment Type', job.type],
    ['Minimum Experience', job.experience],
    ['Compensation', job.compensation],
  ]

  return (
    <aside className="cr-side">
      <div className="cr-card">
        {mode === 'detail' ? (
          <Link to={`/careers/${job.id}/apply`} className="btn btn-sz rounded-pill w-100 py-2">
            Apply for This Job
          </Link>
        ) : (
          <Link to={`/careers/${job.id}`} className="btn btn-outline-job rounded-pill w-100 py-2">
            <i className="bi bi-chevron-left me-2" />
            View Job Description
          </Link>
        )}

        <hr className="my-3" />

        <label className="cr-link-label" htmlFor="job-link">Link to This Job</label>
        <input
          id="job-link"
          className="form-control cr-link-input"
          readOnly
          value={url}
          onFocus={(e) => e.target.select()}
        />

        <div className="cr-share">
          {share.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={`Share on ${s.label}`}>
              <i className={`bi ${s.icon}`} />
            </a>
          ))}
        </div>
      </div>

      <dl className="cr-meta">
        {meta.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}

export function JobMissing() {
  return (
    <section className="section section-light section-flat text-center">
      <div className="container">
        <h1 className="h3 fw-bold">This position is no longer available</h1>
        <p className="mt-2">It may have been filled or removed.</p>
        <Link to="/careers" className="btn btn-sz mt-2">Back to job openings</Link>
      </div>
    </section>
  )
}
