import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import Banner from '../components/Banner.jsx'
import { images, about } from '../data/site.js'

export default function About() {
  const { hero, story, timeline, board, advisors, campus, cta } = about

  return (
    <>
      {/* 1. Hero — flat dark, no image */}
      <PageHero plain small badge={hero.badge} title={hero.title} text={hero.text}>
        <Link to="/contact" className="btn btn-sz">
          Talk to our engineers <i className="bi bi-arrow-right ms-1" />
        </Link>
      </PageHero>

      {/* 2. Our story + founder card */}
      <section className="section section-light section-flat pb-4">
        <div className="container">
          <div className="eyebrow mb-2">{story.eyebrow}</div>
          <h2>{story.title}</h2>
          <p className="mt-4 mb-4">{story.quote}</p>
          <p className="mb-5">{story.text}</p>

          <div className="founder-card mx-auto">
            <div className="row g-5 align-items-start">
              <div className="col-lg-8">
                <h3>{story.founder.name}</h3>
                <div className="founder-role">{story.founder.role}</div>
                <p className="mb-0">{story.founder.text}</p>
              </div>
              <div className="col-lg-4">
                <ImagePlaceholder
                  src={story.founder.photo}
                  alt={story.founder.name}
                  label="Add /images/team/founder.jpg"
                  ratio="4 / 5"
                  className="img-ph-dark"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Timeline */}
      <section className="section section-light section-flat pt-4">
        <div className="container">
          <div className="timeline mx-auto">
            {timeline.map((t, i) => (
              <div className="tl-row" key={i}>
                <div className="tl-year">{t.year}</div>
                <div>
                  <div className="tl-title">{t.title}</div>
                  <p className="mb-0 mt-2">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Board of directors */}
      <section className="section section-light section-white">
        <div className="container">
          <div className="eyebrow mb-2">{board.eyebrow}</div>
          <h2 className="mb-5">{board.title}</h2>
          <div className="team-grid">
            {board.members.map((m, i) => (
              <div className="team-card" key={i}>
                <ImagePlaceholder
                  src={m.photo}
                  alt={m.name}
                  label={`Photo ${i + 1}`}
                  ratio="1 / 1"
                  className="team-photo"
                />
                <div className="team-role">{m.role}</div>
                <div className="team-name">{m.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Advisors */}
      <section className="section section-light section-white pt-0">
        <div className="container">
          <h2 className="mb-5">{advisors.title}</h2>
          {advisors.people.map((a, i) => (
            <div className="advisor-card" key={i}>
              <ImagePlaceholder
                src={a.photo}
                alt={a.name}
                label={`Advisor ${i + 1}`}
                ratio="1 / 1"
              />
              <div>
                <div className="adv-name">{a.name}</div>
                <p className="mt-2 mb-3">{a.role}</p>
                <hr />
                <p className="adv-note mb-0">{a.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Team photo banner + campus */}
      <Banner src={images.aboutTeam} height={280} label="Add /images/about-team.jpg (team photo)" />

      <section className="section section-light section-pale">
        <div className="container">
          <div className="eyebrow mb-2">{campus.eyebrow}</div>
          <h2>{campus.title}</h2>
          <p className="mt-4 mb-5">{campus.text}</p>
          <div className="campus-grid">
            {campus.cards.map((c) => (
              <div className={`campus-card campus-${c.tone}`} key={c.title}>
                <div className="campus-label">{c.label}</div>
                <h3>{c.title}</h3>
                <p className="mb-0">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Navy CTA */}
      <section className="navy-cta about-cta">
        <div className="container">
          <div className="mx-auto" style={{ maxWidth: 640 }}>
            <h2>{cta.title}</h2>
            <p className="my-3">{cta.text}</p>
            <Link to="/contact" className="btn btn-sz">
              Contact us <i className="bi bi-arrow-right ms-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
