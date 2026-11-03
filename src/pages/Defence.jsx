// import { useState } from 'react'
// import PageHero from '../components/PageHero.jsx'
// import NavyCta from '../components/NavyCta.jsx'
// import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
// import {
//   images,
//   compareCriteria,
//   compareTabs,
//   compareHint,
// } from '../data/site.js'
// import {
//   defenceHero,
//   missiles,
//   gap,
//   builtHere,
//   defenceTech,
//   guidance,
//   programs,
//   defenceCta,
// } from '../data/defenceContent.js'

// export default function Defence() {
//   const [tab, setTab] = useState(0)
//   const active = compareTabs[tab]

//   return (
//     <>
//       {/* 1. Hero */}
//       <PageHero
//         badge={defenceHero.badge}
//         title={defenceHero.title}
//         accent={defenceHero.accent}
//         text={defenceHero.text}
//         image={images.defenceHero}
//       />

//       {/* 2. Our missiles (new) */}
//       <section className="section section-light section-pale">
//         <div className="container">
//           <div className="eyebrow mb-2">{missiles.eyebrow}</div>
//           <h2>
//             {missiles.title} <span className="serif-accent d-block">{missiles.accent}</span>
//           </h2>
//           <p className="mt-3 mb-5">{missiles.text}</p>

//           <div className="d-grid gap-4">
//             {missiles.items.map((m, i) => (
//               <div className="light-card p-4" key={i}>
//                 <div className="row g-4 align-items-center">
//                   <div className={`col-md-4 ${i % 2 ? 'order-md-2' : ''}`}>
//                     <ImagePlaceholder
//                       src={m.image}
//                       alt={m.name}
//                       label={`Add ${m.image}`}
//                       ratio="3 / 4"
//                       className="img-ph-dark"
//                     />
//                   </div>
//                   <div className="col-md-8">
//                     <h3 className="mb-1">{m.name}</h3>
//                     <div className="founder-role mb-2">{m.variant}</div>
//                     <p className="mb-3">{m.tagline}</p>

//                     <div className="mb-3">
//                       {m.specs.map((s, j) => (
//                         <div
//                           className="d-flex justify-content-between gap-3 border-bottom py-2"
//                           key={j}
//                         >
//                           <span className="fw-bold">{s.label}</span>
//                           <span className="text-end">{s.value}</span>
//                         </div>
//                       ))}
//                     </div>

//                     <div className="small fw-bold mb-2">{m.rolesTitle}</div>
//                     <div className="d-flex flex-wrap gap-2">
//                       {m.roles.map((r, j) => (
//                         <span className="pill pill-blue" key={j}>{r}</span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <p className="text-muted-sz small mt-3 mb-0">{missiles.note}</p>
//         </div>
//       </section>

//       {/* 3. Capability gap + comparison */}
//       <section className="section section-light">
//         <div className="container">
//           <div className="row g-5">
//             <div className="col-lg-7">
//               <div className="eyebrow mb-2">{gap.eyebrow}</div>
//               <h2>
//                 {gap.title} <span className="serif-accent d-block">{gap.accent}</span>
//               </h2>
//               {gap.paras.map((p, i) => (
//                 <p className="text-muted-sz mt-4" key={i}>{p}</p>
//               ))}
//               <p className="fw-bold mt-4">{gap.strong}</p>
//               <p className="fw-bold mt-4 mb-0">{gap.hint}</p>
//             </div>
//             <div className="col-lg-4 offset-lg-1">
//               <div className="d-grid gap-3">
//                 {gap.stats.map((s, i) => (
//                   <div className="light-card" key={i}>
//                     <div className="stat stat-lg">{s.value}</div>
//                     <div>{s.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Comparison tabs */}
//           <div className="cmp mx-auto mt-5">
//             <div className="cmp-tabs" role="tablist">
//               {compareTabs.map((t, i) => (
//                 <button
//                   key={t.name}
//                   role="tab"
//                   aria-selected={tab === i}
//                   className={tab === i ? 'active' : ''}
//                   onClick={() => setTab(i)}
//                 >
//                   {t.name}
//                 </button>
//               ))}
//             </div>

//             <div className="cmp-card mt-3">
//               {compareCriteria.map((c, i) => {
//                 const r = active.rows[i]
//                 return (
//                   <div className={`cmp-row tone-${r.tone}`} key={c.title} tabIndex={0}>
//                     <div className="cmp-icon"><i className={`bi ${c.icon}`} /></div>
//                     <div className="cmp-main">
//                       <div className="cmp-title">{c.title}</div>
//                       <div className="cmp-detail">{r.detail}</div>
//                     </div>
//                     <span className={`pill pill-${r.tone}`}>{r.badge}</span>
//                   </div>
//                 )
//               })}
//             </div>
//             <p className="text-center text-muted-sz small mt-3 mb-0">{compareHint}</p>
//           </div>
//         </div>
//       </section>

//       {/* 4. Built in-house (pale blue, centred) */}
//       <section className="section section-light section-pale">
//         <div className="container text-center">
//           <div className="eyebrow mb-3">{builtHere.eyebrow}</div>
//           <h2>
//             {builtHere.title} <span className="serif-accent d-block">{builtHere.accent}</span>
//           </h2>
//           <p className="mx-auto mt-4" style={{ maxWidth: 820 }}>{builtHere.text}</p>
//           <div className="quote-box centered mx-auto mt-5">{builtHere.quote}</div>
//         </div>
//       </section>

//       {/* 5. Technology */}
//       <section className="section section-light">
//         <div className="container">
//           <div className="row g-5 align-items-center">
//             <div className="col-lg-7">
//               <div className="eyebrow mb-2">{defenceTech.eyebrow}</div>
//               <h2>
//                 {defenceTech.title} <span className="serif-accent d-block">{defenceTech.accent}</span>
//               </h2>
//               <p className="mt-3">{defenceTech.text}</p>
//               <div className="quote-box mt-4">
//                 <p className="mb-3 fst-italic">{defenceTech.quote}</p>
//                 <div>{defenceTech.quoteSource}</div>
//               </div>
//             </div>
//             <div className="col-lg-5">
//               <div className="light-card p-4">
//                 <h3 className="h6 fw-bold mb-3">{defenceTech.cardTitle}</h3>
//                 <p className="mb-0">{defenceTech.cardText}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 6. Guidance & fin movement video (new) */}
//       <section className="section section-light section-pale">
//         <div className="container">
//           <div className="row g-5 align-items-center">
//             <div className="col-lg-5">
//               <div className="eyebrow mb-2">{guidance.eyebrow}</div>
//               <h2>
//                 {guidance.title} <span className="serif-accent d-block">{guidance.accent}</span>
//               </h2>
//               <span className="status status-active mt-3 d-inline-block">{guidance.status}</span>
//               <p className="mt-3">{guidance.text}</p>
//               <ol className="ps-3 mb-0">
//                 {guidance.steps.map((s, i) => (
//                   <li className="mb-2" key={i}>
//                     <span className="fw-bold">{s.title}.</span> {s.text}
//                   </li>
//                 ))}
//               </ol>
//             </div>
//             <div className="col-lg-7">
//               <video
//                 className="w-100 rounded-3"
//                 style={{ background: '#0f1b36', aspectRatio: '16 / 9' }}
//                 controls
//                 muted
//                 loop
//                 playsInline
//                 preload="metadata"
//                 poster={guidance.poster}
//               >
//                 <source src={guidance.video} type="video/mp4" />
//                 Your browser does not support video playback.
//               </video>
//               <p className="text-muted-sz small mt-2 mb-0">{guidance.caption}</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 7. Active programmes */}
//       <section className="section section-light section-white">
//         <div className="container">
//           <div className="eyebrow mb-2">{programs.eyebrow}</div>
//           <h2>
//             {programs.title} <span className="serif-accent d-block">{programs.accent}</span>
//           </h2>
//           <div className="prog-table mt-5">
//             {programs.rows.map((p, i) => (
//               <div className="prog-row" key={i}>
//                 <div className="prog-name">{p.name}</div>
//                 <div className="prog-text">{p.text}</div>
//                 <div className="text-lg-end">
//                   <span className={`status ${p.status === 'Active' ? 'status-active' : 'status-complete'}`}>
//                     {p.status}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 8. Navy CTA */}
//       <NavyCta title={defenceCta.title} accent={defenceCta.accent} text={defenceCta.text} />
//     </>
//   )
// }














import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import NavyCta from '../components/NavyCta.jsx'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import { images } from '../data/site.js'
import {
  defenceHero,
  missiles,
  gap,
  compareCriteria,
  compareTabs,
  compareHint,
  builtHere,
  defenceTech,
  guidance,
  programs,
  defenceCta,
} from '../data/defenceContent.js'

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

      {/* 2. Our missiles (new) */}
      <section className="section section-light section-pale">
        <div className="container">
          <div className="eyebrow mb-2">{missiles.eyebrow}</div>
          <h2>
            {missiles.title} <span className="serif-accent d-block">{missiles.accent}</span>
          </h2>
          <p className="mt-3 mb-5">{missiles.text}</p>

          <div className="d-grid gap-4">
            {missiles.items.map((m, i) => (
              <div className="light-card p-4" key={i}>
                <div className="row g-4 align-items-center">
                  <div className={`col-md-4 ${i % 2 ? 'order-md-2' : ''}`}>
                    <ImagePlaceholder
                      src={m.image}
                      alt={m.name}
                      label={`Add ${m.image}`}
                      ratio="3 / 4"
                      className="img-ph-dark"
                    />
                  </div>
                  <div className="col-md-8">
                    <h3 className="mb-1">{m.name}</h3>
                    <div className="founder-role mb-2">{m.variant}</div>
                    <p className="mb-3">{m.tagline}</p>

                    <div className="mb-3">
                      {m.specs.map((s, j) => (
                        <div
                          className="d-flex justify-content-between gap-3 border-bottom py-2"
                          key={j}
                        >
                          <span className="fw-bold">{s.label}</span>
                          <span className="text-end">{s.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="small fw-bold mb-2">{m.rolesTitle}</div>
                    <div className="d-flex flex-wrap gap-2">
                      {m.roles.map((r, j) => (
                        <span className="pill pill-blue" key={j}>{r}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-muted-sz small mt-3 mb-0">{missiles.note}</p>
        </div>
      </section>

      {/* 3. Capability gap + comparison */}
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

      {/* 4. Built in-house (pale blue, centred) */}
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

      {/* 5. Technology */}
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

      {/* 6. Guidance & fin movement video (new) */}
      <section className="section section-light section-pale">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div className="eyebrow mb-2">{guidance.eyebrow}</div>
              <h2>
                {guidance.title} <span className="serif-accent d-block">{guidance.accent}</span>
              </h2>
              <span className="status status-active mt-3 d-inline-block">{guidance.status}</span>
              <p className="mt-3">{guidance.text}</p>
              <ol className="ps-3 mb-0">
                {guidance.steps.map((s, i) => (
                  <li className="mb-2" key={i}>
                    <span className="fw-bold">{s.title}.</span> {s.text}
                  </li>
                ))}
              </ol>
            </div>
            <div className="col-lg-7">
              <video
                className="w-100 rounded-3"
                style={{ background: '#0f1b36', aspectRatio: '16 / 9' }}
                controls
                muted
                loop
                playsInline
                preload="metadata"
                poster={guidance.poster}
              >
                <source src={guidance.video} type="video/mp4" />
                Your browser does not support video playback.
              </video>
              <p className="text-muted-sz small mt-2 mb-0">{guidance.caption}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Active programmes */}
      <section className="section section-light section-white">
        <div className="container">
          <div className="eyebrow mb-2">{programs.eyebrow}</div>
          <h2>
            {programs.title} <span className="serif-accent d-block">{programs.accent}</span>
          </h2>
          <div className="prog-table mt-5">
            {programs.rows.map((p, i) => (
              <div className="prog-row" key={i}>
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

      {/* 8. Navy CTA */}
      <NavyCta title={defenceCta.title} accent={defenceCta.accent} text={defenceCta.text} />
    </>
  )
}