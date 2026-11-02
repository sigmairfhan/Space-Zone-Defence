import { useEffect, useState } from 'react'

// Hero with an optional background image. If the image file is missing
// (not added yet) it falls back to a gradient so the page never looks broken.
export default function PageHero({ badge, title, accent, text, image, small = false, children }) {
  const [ok, setOk] = useState(false)

  useEffect(() => {
    if (!image) return
    const img = new Image()
    img.onload = () => setOk(true)
    img.onerror = () => setOk(false)
    img.src = image
  }, [image])

  return (
    <section className={`hero ${small ? 'hero-sm' : ''}`}>
      <div
        className={`hero-bg ${ok ? '' : 'fallback'}`}
        style={ok ? { backgroundImage: `url(${image})` } : undefined}
      />
      <div className="container py-5">
        {badge && <span className="hero-badge">{badge}</span>}
        <h1>
          {title} {accent && <span className="serif-accent">{accent}</span>}
        </h1>
        {text && <p className="lead mt-3">{text}</p>}
        {children && <div className="mt-4 d-flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  )
}
