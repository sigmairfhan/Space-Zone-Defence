import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import NavyCta from '../components/NavyCta.jsx'
import {
  images,
  defenceHero,
  gap,
  compareCriteria,
  compareTabs,
  compareHint,
  builtHere,
  defenceTech,
  programs,
  defenceCta,
} from '../data/site.js'

export default function Defence() {
  const [tab, setTab] = useState(0)
  const active = compareTabs[tab]

  return (
    <>
      {/* 1. Hero */}
      <PageHero
        badge={defenceHero.badge}
        title={defenceHero.title}
        accent={defenceHero.accent}
        text={defenceHero.text}
        image={images.defenceHero}
      />

      {/* 2. Capability gap + comparison */}
      <section className="section section-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="eyebrow mb-2">{gap.eyebrow}</div>
              <h2>
                {gap.title} <span className="serif-accent d-block">{gap.accent}</span>
              </h2>
              {gap.paras.map((p, i) => (
                <p className="text-muted-sz mt-4" key={i}>{p}</p>
              ))}
              <p className="fw-bold mt-4">{gap.strong}</p>
              <p className="fw-bold mt-4 mb-0">{gap.hint}</p>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div className="d-grid gap-3">
                {gap.stats.map((s, i) => (
                  <div className="light-card" key={i}>
                    <div className="stat stat-lg">{s.value}</div>
                    <div>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comparison tabs */}
          <div className="cmp mx-auto mt-5">
            <div className="cmp-tabs" role="tablist">
              {compareTabs.map((t, i) => (
                <button
                  key={t.name}
                  role="tab"
                  aria-selected={tab === i}
                  className={tab === i ? 'active' : ''}
                  onClick={() => setTab(i)}
                >
                  {t.name}
                </button>
              ))}
            </div>

            <div className="cmp-card mt-3">
              {compareCriteria.map((c, i) => {
                const r = active.rows[i]
                return (
                  <div className={`cmp-row tone-${r.tone}`} key={c.title} tabIndex={0}>
                    <div className="cmp-icon"><i className={`bi ${c.icon}`} /></div>
                    <div className="cmp-main">
                      <div className="cmp-title">{c.title}</div>
                      <div className="cmp-detail">{r.detail}</div>
                    </div>
                    <span className={`pill pill-${r.tone}`}>{r.badge}</span>
                  </div>
                )
              })}
            </div>
            <p className="text-center text-muted-sz small mt-3 mb-0">{compareHint}</p>
          </div>
        </div>
      </section>

      {/* 3. Built in-house (pale blue, centred) */}
      <section className="section section-light section-pale">
        <div className="container text-center">
          <div className="eyebrow mb-3">{builtHere.eyebrow}</div>
          <h2>
            {builtHere.title} <span className="serif-accent d-block">{builtHere.accent}</span>
          </h2>
          <p className="mx-auto mt-4" style={{ maxWidth: 820 }}>{builtHere.text}</p>
          <div className="quote-box centered mx-auto mt-5">{builtHere.quote}</div>
        </div>
      </section>

      {/* 4. Technology */}
      <section className="section section-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <div className="eyebrow mb-2">{defenceTech.eyebrow}</div>
              <h2>
                {defenceTech.title} <span className="serif-accent d-block">{defenceTech.accent}</span>
              </h2>
              <p className="mt-3">{defenceTech.text}</p>
              <div className="quote-box mt-4">
                <p className="mb-3 fst-italic">{defenceTech.quote}</p>
                <div>{defenceTech.quoteSource}</div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="light-card p-4">
                <h3 className="h6 fw-bold mb-3">{defenceTech.cardTitle}</h3>
                <p className="mb-0">{defenceTech.cardText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Active programmes */}
      <section className="section section-light section-white">
        <div className="container">
          <div className="eyebrow mb-2">{programs.eyebrow}</div>
          <h2>
            {programs.title} <span className="serif-accent d-block">{programs.accent}</span>
          </h2>
          <div className="prog-table mt-5">
            {programs.rows.map((p) => (
              <div className="prog-row" key={p.name}>
                <div className="prog-name">{p.name}</div>
                <div className="prog-text">{p.text}</div>
                <div className="text-lg-end">
                  <span className={`status ${p.status === 'Active' ? 'status-active' : 'status-complete'}`}>
                    {p.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Navy CTA */}
      <NavyCta title={defenceCta.title} accent={defenceCta.accent} text={defenceCta.text} />
    </>
  )
}
