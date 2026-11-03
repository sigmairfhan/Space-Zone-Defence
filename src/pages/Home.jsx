import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { images } from '../data/site.js'
import { hero, challenge, whyNow, solve, strategic, technology } from '../data/homeContent.js'

// Hero background video (file lives in /public/videos/hero.mp4)
const HERO_VIDEO = '/videos/hero.mp4'

export default function Home() {
  const videoRef = useRef(null)
  const [videoOk, setVideoOk] = useState(true)

  // Browsers only autoplay muted video; set it explicitly and try to start playback.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    const p = v.play()
    if (p && p.catch) p.catch(() => {})
  }, [])

  return (
    <>
      {/* 1. Hero (dark) with video background */}
      <section className="hero">
        {videoOk ? (
          <video
            ref={videoRef}
            className="hero-bg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            onError={() => setVideoOk(false)}
          >
            <source src={HERO_VIDEO} type="video/mp4" onError={() => setVideoOk(false)} />
          </video>
        ) : (
          <div className="hero-bg fallback" />
        )}
        <div className="container py-5">
          <span className="hero-badge">{hero.badge}</span>
          <h1>
            {hero.title} <span className="serif-accent">{hero.accent}</span>
          </h1>
          <p className="lead mt-3">{hero.text}</p>
          <div className="mt-4 d-flex flex-wrap gap-3">
            <Link to="/contact" className="btn btn-sz">
              Talk to our engineers <i className="bi bi-arrow-right ms-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. The challenge (light) */}
      <section className="section section-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="eyebrow mb-2">{challenge.eyebrow}</div>
              <h2>
                {challenge.title} <span className="serif-accent">{challenge.accent}</span>
              </h2>
              <p className="text-muted-sz mt-3 mb-4">{challenge.text}</p>
              {challenge.items.map((it) => (
                <div className="d-flex gap-3 mb-4" key={it.n}>
                  <div className="num-badge">{it.n}</div>
                  <div>
                    <h3 className="h5 fw-semibold mb-1">{it.title}</h3>
                    <p className="text-muted-sz mb-0">{it.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              <div className="d-grid gap-4">
                {challenge.stats.map((s, i) => (
                  <div className="light-card" key={i}>
                    <div className="stat">{s.value}</div>
                    <div className="text-muted-sz">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why it matters now (navy band) */}
      <section className="band-navy">
        <div className="container">
          <h2>{whyNow.title}</h2>
          <p className="mb-0">{whyNow.text}</p>
        </div>
      </section>

      {/* 4. Full-width image */}
      <Banner src={images.homeBanner} label="Add /images/home-banner.jpg (wide facility photo)" />

      {/* 5. How we solve it (light) */}
      <section className="section section-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="eyebrow mb-2">{solve.eyebrow}</div>
              <h2>
                {solve.title} <span className="serif-accent">{solve.accent}</span>
              </h2>
              {solve.paras.map((p, i) => (
                <p className="text-muted-sz mt-3" key={i}>{p}</p>
              ))}
            </div>
            <div className="col-lg-6">
              <div className="d-grid gap-3">
                {solve.cards.map((c) => (
                  <div className="light-card" key={c.label}>
                    <div className="card-label">{c.label}</div>
                    <h3 className="h6 fw-bold mb-1">{c.title}</h3>
                    <p className="text-muted-sz mb-0">{c.text}</p>
                  </div>
                ))}
                <div className="callout-lime">
                  <strong>{solve.callout.strong}.</strong> {solve.callout.text}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Strategic advantage (dark, centred) */}
      <section className="section section-dark-center">
        <div className="container text-center">
          <div className="eyebrow eyebrow-blue mb-3">{strategic.eyebrow}</div>
          <h2 className="mx-auto" style={{ maxWidth: 680 }}>
            {strategic.title} <span className="serif-accent fw-bold">{strategic.accent}</span>
          </h2>
          <p className="text-muted-sz mx-auto mt-3" style={{ maxWidth: 760 }}>{strategic.text}</p>
          <div className="row justify-content-center g-4 mt-4">
            {strategic.stats.map((s, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="big-stat">{s.value}</div>
                <div>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Technology (light) */}
      <section className="section section-light">
        <div className="container">
          <div className="eyebrow mb-2">{technology.eyebrow}</div>
          <h2>
            {technology.title} <span className="serif-accent">{technology.accent}</span>
          </h2>
          <p className="text-muted-sz mt-3 mb-5" style={{ maxWidth: 720 }}>{technology.text}</p>
          <div className="row g-4">
            {technology.cards.map((c) => (
              <div className="col-md-6 col-lg-4" key={c.n}>
                <div className={`tech-card tech-${c.color}`}>
                  <div className="num-badge sm">{c.n}</div>
                  <h3 className="h5 fw-bold mt-3">{c.title}</h3>
                  <p className="text-muted-sz">{c.text}</p>
                  <Link to={c.to || '/defence'} className="tech-link">
                    {c.cta || 'Learn more'} <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}