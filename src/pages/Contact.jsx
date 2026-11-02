import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import { company, contact } from '../data/site.js'
import { sendContact } from '../services/api.js'

const empty = { name: '', email: '', organization: '', phone: '', message: '', website: '' }

export default function Contact() {
  const { hero, directTitle, emailNote, hqTitle, hq, specificTitle, specific, disclaimer } = contact
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState({ type: '', msg: '' })
  const [busy, setBusy] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: '', msg: '' })
    setBusy(true)
    try {
      const fd = new FormData()
      Object.entries(form).forEach(([k, v]) => fd.append(k, v))
      const res = await sendContact(fd)
      setStatus({ type: 'success', msg: res.message || 'Thank you — we will get back to you soon.' })
      setForm(empty)
    } catch (err) {
      setStatus({ type: 'danger', msg: err.message })
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      <PageHero plain small badge={hero.badge} title={hero.title} accent={hero.accent} />

      <section className="section section-light section-flat ct-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <form className="sz-form ct-form" onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" className="form-control" required value={form.name} onChange={onChange} />

                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" className="form-control" required value={form.email} onChange={onChange} />

                <label htmlFor="organization">Organization</label>
                <input id="organization" name="organization" className="form-control" value={form.organization} onChange={onChange} />

                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" className="form-control" value={form.phone} onChange={onChange} />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={3} className="form-control" required minLength={10} value={form.message} onChange={onChange} />

                {/* honeypot: real users never see or fill this */}
                <div className="hp-field" aria-hidden="true">
                  <input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={onChange} />
                </div>

                <button className="btn btn-sz ct-send" disabled={busy}>
                  {busy ? 'Sending…' : <>Send Message <i className="bi bi-arrow-right ms-1" /></>}
                </button>

                {status.msg && <div className={`alert alert-${status.type} mt-3 mb-0`} role="alert">{status.msg}</div>}

                <p className="ct-note">{disclaimer}</p>
              </form>
            </div>

            <div className="col-lg-5">
              <div className="ct-side">
                <h6 className="ct-label">{directTitle}</h6>
                <div className="ct-row">
                  <span className="ct-icon"><i className="bi bi-envelope" /></span>
                  <div>
                    <a href={`mailto:${company.email}`} className="ct-strong">{company.email}</a>
                    <div>{emailNote}</div>
                  </div>
                </div>
                <hr />

                <h6 className="ct-label">{hqTitle}</h6>
                <div className="ct-hq">
                  <strong>{hq.name}</strong>
                  {hq.lines.map((l) => <div key={l}>{l}</div>)}
                </div>
                <hr />

                <h6 className="ct-label">{specificTitle}</h6>
                {specific.map((s) => (
                  <div className="ct-row" key={s.title}>
                    <span className="ct-icon"><i className={`bi ${s.icon}`} /></span>
                    <div>
                      <div className="ct-strong">{s.title}</div>
                      <div>{s.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
