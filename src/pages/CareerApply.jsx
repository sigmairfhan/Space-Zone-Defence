import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import JobSidebar, { JobMissing } from '../components/JobSidebar.jsx'
import { useJob } from '../hooks/useJob.js'
import { sendApplication } from '../services/api.js'

const MAX_MB = 5
const empty = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  country: 'India',
  desired_pay: '',
  linkedin: '',
  website: '', // honeypot
}

// Application page: /careers/:id/apply  (use id "general" for a general application)
export default function CareerApply() {
  const { id } = useParams()
  const { status: jobStatus, job } = useJob(id)

  const [form, setForm] = useState(empty)
  const [resume, setResume] = useState(null)
  const [cover, setCover] = useState(null)
  const [status, setStatus] = useState({ type: '', msg: '' })
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState(false)

  if (jobStatus === 'loading') return <section className="section section-light section-flat cr-section"><div className="container"><p>Loading…</p></div></section>
  if (!job) return <JobMissing />

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const pickFile = (setter) => (e) => {
    const f = e.target.files[0]
    if (f && f.size > MAX_MB * 1024 * 1024) {
      setStatus({ type: 'danger', msg: `Files must be under ${MAX_MB} MB.` })
      e.target.value = ''
      setter(null)
      return
    }
    setStatus({ type: '', msg: '' })
    setter(f || null)
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
      fd.append('name', `${form.first_name} ${form.last_name}`.trim())
      fd.append('position', job.title)
      fd.append('resume', resume)
      if (cover) fd.append('cover_letter', cover)
      const res = await sendApplication(fd)
      setStatus({ type: 'success', msg: res.message || 'Application received. Thank you!' })
      setDone(true)
    } catch (err) {
      setStatus({ type: 'danger', msg: err.message })
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="section section-light section-flat cr-section">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <form className="sz-form" onSubmit={onSubmit}>
              <div className="cr-card cr-main">
                <Link to="/careers" className="cr-back">
                  <i className="bi bi-chevron-left" /> Job Openings
                </Link>
                <h1 className="cr-title">{job.title}</h1>
                <div className="cr-sub">{job.department} - {job.location}</div>

                {done ? (
                  <div className="cr-done">
                    <i className="bi bi-check-circle-fill" />
                    <h2>Application submitted</h2>
                    <p>{status.msg}</p>
                    <Link to="/careers" className="btn btn-sz">Back to job openings</Link>
                  </div>
                ) : (
                  <div className="row g-3 mt-1">
                    <div className="col-md-6">
                      <label htmlFor="first_name">First Name*</label>
                      <input id="first_name" name="first_name" className="form-control" required value={form.first_name} onChange={onChange} />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="last_name">Last Name*</label>
                      <input id="last_name" name="last_name" className="form-control" required value={form.last_name} onChange={onChange} />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Email*</label>
                      <input id="email" name="email" type="email" className="form-control" required value={form.email} onChange={onChange} />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone">Phone*</label>
                      <input id="phone" name="phone" className="form-control" required value={form.phone} onChange={onChange} />
                    </div>
                    <div className="col-12">
                      <label htmlFor="address">Address</label>
                      <input id="address" name="address" className="form-control" value={form.address} onChange={onChange} />
                    </div>
                    <div className="col-md-5">
                      <label htmlFor="city">City</label>
                      <input id="city" name="city" className="form-control" value={form.city} onChange={onChange} />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="state">State</label>
                      <input id="state" name="state" className="form-control" value={form.state} onChange={onChange} />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="zip">PIN / ZIP</label>
                      <input id="zip" name="zip" className="form-control" value={form.zip} onChange={onChange} />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="country">Country</label>
                      <input id="country" name="country" className="form-control" value={form.country} onChange={onChange} />
                    </div>

                    <div className="col-12"><hr className="my-2" /></div>

                    <div className="col-md-6">
                      <label htmlFor="cover_letter">Cover Letter (PDF / DOC / DOCX)</label>
                      <input id="cover_letter" type="file" className="form-control" accept=".pdf,.doc,.docx" onChange={pickFile(setCover)} />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="resume">Resume* (PDF / DOC / DOCX)</label>
                      <input id="resume" type="file" className="form-control" accept=".pdf,.doc,.docx" onChange={pickFile(setResume)} />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="desired_pay">Desired Pay</label>
                      <input id="desired_pay" name="desired_pay" className="form-control" value={form.desired_pay} onChange={onChange} />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="linkedin">LinkedIn URL</label>
                      <input id="linkedin" name="linkedin" type="url" placeholder="https://" className="form-control" value={form.linkedin} onChange={onChange} />
                    </div>

                    {/* honeypot: real users never see or fill this */}
                    <div className="hp-field" aria-hidden="true">
                      <input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={onChange} />
                    </div>

                    {status.msg && (
                      <div className="col-12">
                        <div className={`alert alert-${status.type} mb-0`} role="alert">{status.msg}</div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {!done && (
                <div className="apply-bar">
                  <span className="apply-brand">Space Zone Defence</span>
                  <div className="d-flex align-items-center gap-4">
                    <Link to={job.id === 'general' ? '/careers' : `/careers/${job.id}`} className="apply-cancel">Cancel</Link>
                    <button className="btn btn-submit rounded-pill" disabled={busy}>
                      <i className="bi bi-check-circle me-2" />
                      {busy ? 'Submitting…' : 'Submit Application'}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="col-lg-4">
            <JobSidebar job={job} mode="apply" />
          </div>
        </div>
      </div>
    </section>
  )
}
