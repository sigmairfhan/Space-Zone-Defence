import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import { images, company } from '../data/site.js'
import { sendContact } from '../services/api.js'

const empty = { name: '', email: '', phone: '', subject: '', message: '', website: '' }

export default function Contact() {
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
      <PageHero
        small
        badge="Contact"
        title="Talk to our"
        accent="engineers."
        text="Placeholder: tell us about your requirement and we will respond shortly."
        image={images.contactHero}
      />

      <section className="section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <form className="sz-form" onSubmit={onSubmit} noValidate={false}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name">Full name *</label>
                    <input id="name" name="name" className="form-control" required value={form.name} onChange={onChange} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" className="form-control" required value={form.email} onChange={onChange} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" className="form-control" value={form.phone} onChange={onChange} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="subject">Subject *</label>
                    <input id="subject" name="subject" className="form-control" required value={form.subject} onChange={onChange} />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" rows={6} className="form-control" required minLength={10} value={form.message} onChange={onChange} />
                  </div>
                  {/* honeypot: real users never see or fill this */}
                  <div className="hp-field" aria-hidden="true">
                    <input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={onChange} />
                  </div>
                  <div className="col-12">
                    <button className="btn btn-sz" disabled={busy}>
                      {busy ? 'Sending…' : 'Send message'}
                    </button>
                  </div>
                  {status.msg && (
                    <div className="col-12">
                      <div className={`alert alert-${status.type} mb-0`} role="alert">{status.msg}</div>
                    </div>
                  )}
                </div>
              </form>
            </div>

            <div className="col-lg-5">
              <div className="sz-card">
                <h3 className="mt-0">Get in touch</h3>
                <ul className="check-list text-muted-sz mt-3">
                  <li><i className="bi bi-envelope" /><a href={`mailto:${company.email}`}>{company.email}</a></li>
                  <li><i className="bi bi-telephone" />{company.phone}</li>
                  <li><i className="bi bi-geo-alt" />{company.address}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
