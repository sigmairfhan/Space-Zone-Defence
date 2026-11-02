import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { images, openings } from '../data/site.js'
import { sendApplication } from '../services/api.js'

const empty = { name: '', email: '', phone: '', position: '', message: '', website: '' }
const MAX_MB = 5

export default function Careers() {
  const [form, setForm] = useState(empty)
  const [resume, setResume] = useState(null)
  const [status, setStatus] = useState({ type: '', msg: '' })
  const [busy, setBusy] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const apply = (title) => {
    setForm((f) => ({ ...f, position: title }))
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
  }

  const onFile = (e) => {
    const f = e.target.files[0]
    if (f && f.size > MAX_MB * 1024 * 1024) {
      setStatus({ type: 'danger', msg: `Resume must be under ${MAX_MB} MB.` })
      e.target.value = ''
      setResume(null)
      return
    }
    setStatus({ type: '', msg: '' })
    setResume(f || null)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!resume) {
      setStatus({ type: 'danger', msg: 'Please attach your resume (PDF, DOC or DOCX).' })
      return
    }
    setBusy(true)
    setStatus({ type: '', msg: '' })
    try {
      const fd = new FormData()
      Object.entries(form).forEach(([k, v]) => fd.append(k, v))
      fd.append('resume', resume)
      const res = await sendApplication(fd)
      setStatus({ type: 'success', msg: res.message || 'Application received. Thank you!' })
      setForm(empty)
      setResume(null)
      e.target.reset()
    } catch (err) {
      setStatus({ type: 'danger', msg: err.message })
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      <PageHero
        small
        badge="Careers"
        title="Build what"
        accent="comes next."
        text="Placeholder: join a team working on propulsion, manufacturing and defence systems."
        image={images.careersHero}
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Open roles" title="Current openings" text="Placeholder roles — update in src/data/site.js." />
          <div className="d-grid gap-3">
            {openings.map((o) => (
              <div className="job-row d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3" key={o.id}>
                <div>
                  <h3 className="h5 mb-1">{o.title}</h3>
                  <span className="text-muted-sz small">{o.type} · {o.location}</span>
                </div>
                <button className="btn btn-outline-sz" onClick={() => apply(o.title)}>Apply</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="apply">
        <div className="container" style={{ maxWidth: 820 }}>
          <SectionHeading eyebrow="Apply" title="Send us your application" />
          <form className="sz-form" onSubmit={onSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="c-name">Full name *</label>
                <input id="c-name" name="name" className="form-control" required value={form.name} onChange={onChange} />
              </div>
              <div className="col-md-6">
                <label htmlFor="c-email">Email *</label>
                <input id="c-email" name="email" type="email" className="form-control" required value={form.email} onChange={onChange} />
              </div>
              <div className="col-md-6">
                <label htmlFor="c-phone">Phone *</label>
                <input id="c-phone" name="phone" className="form-control" required value={form.phone} onChange={onChange} />
              </div>
              <div className="col-md-6">
                <label htmlFor="c-position">Position *</label>
                <select id="c-position" name="position" className="form-select" required value={form.position} onChange={onChange}>
                  <option value="">Select a role</option>
                  {openings.map((o) => <option key={o.id}>{o.title}</option>)}
                  <option>General application</option>
                </select>
              </div>
              <div className="col-12">
                <label htmlFor="c-resume">Resume (PDF / DOC / DOCX, max {MAX_MB} MB) *</label>
                <input id="c-resume" type="file" className="form-control" accept=".pdf,.doc,.docx" onChange={onFile} />
              </div>
              <div className="col-12">
                <label htmlFor="c-message">Cover note</label>
                <textarea id="c-message" name="message" rows={5} className="form-control" value={form.message} onChange={onChange} />
              </div>
              <div className="hp-field" aria-hidden="true">
                <input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={onChange} />
              </div>
              <div className="col-12">
                <button className="btn btn-sz" disabled={busy}>{busy ? 'Submitting…' : 'Submit application'}</button>
              </div>
              {status.msg && (
                <div className="col-12">
                  <div className={`alert alert-${status.type} mb-0`} role="alert">{status.msg}</div>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
