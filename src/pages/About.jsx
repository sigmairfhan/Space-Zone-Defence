import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { images, values, groupCompanies } from '../data/site.js'

export default function About() {
  return (
    <>
      <PageHero
        small
        badge="About"
        title="Built by engineers,"
        accent="for the mission."
        text="Placeholder: a short statement about who Space Zone Defence is."
        image={images.aboutHero}
      />

      <section className="section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <SectionHeading
                eyebrow="Our mission"
                title="Placeholder mission statement"
                text="Placeholder: replace with the mission, vision and story supplied by the team. This section is laid out for two or three short paragraphs."
              />
            </div>
            <div className="col-lg-6">
              <ImagePlaceholder src={images.aboutSplit} alt="Our team" label="Add /images/about-split.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="Values" title="What drives us" center />
          <div className="row g-4">
            {values.map((v) => (
              <div className="col-md-6 col-lg-3" key={v.title}>
                <div className="sz-card text-center">
                  <i className={`bi ${v.icon} icon`} />
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="The group" title="Part of the Spacezone family" center />
          <div className="row g-4 justify-content-center">
            {groupCompanies.map((g) => (
              <div className="col-md-4" key={g.name}>
                <div className="sz-card">
                  <h3 className="mt-0">{g.name}</h3>
                  <p>{g.text}</p>
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
