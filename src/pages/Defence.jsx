import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import CtaBand from '../components/CtaBand.jsx'
import { images, capabilities, process } from '../data/site.js'

export default function Defence() {
  return (
    <>
      <PageHero
        small
        badge="Defence"
        title="Capabilities for"
        accent="national security."
        text="Placeholder: an overview of how Space Zone Defence supports defence programmes."
        image={images.defenceHero}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Capabilities"
            title="What we bring to defence programmes"
            text="Placeholder copy — replace with the content provided by the team."
          />
          <div className="row g-4">
            {capabilities.map((c) => (
              <div className="col-md-6" key={c.title}>
                <div className="sz-card d-flex gap-3">
                  <i className={`bi ${c.icon} icon`} />
                  <div>
                    <h3 className="mt-0">{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-2">
              <ImagePlaceholder src={images.defenceSplit} alt="Manufacturing" label="Add /images/defence-split.jpg" />
            </div>
            <div className="col-lg-6">
              <SectionHeading
                eyebrow="Advanced manufacturing"
                title="From design to deployable hardware"
                text="Placeholder: describe in-house manufacturing, materials, quality systems and production capacity."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="How we work" title="A clear path from requirement to delivery" center />
          <div className="row g-4">
            {process.map((p) => (
              <div className="col-md-6 col-lg-3" key={p.step}>
                <div className="step-num">{p.step}</div>
                <h3 className="h5 fw-semibold">{p.title}</h3>
                <p className="text-muted-sz small">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Discuss your requirement" />
    </>
  )
}
