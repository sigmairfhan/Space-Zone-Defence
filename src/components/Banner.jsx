import { useEffect, useState } from 'react'

// Full-width image band. Falls back to a gradient if the image is not added yet.
export default function Banner({ src, label = 'Add a wide image here', height = 340 }) {
  const [ok, setOk] = useState(false)

  useEffect(() => {
    if (!src) return
    const img = new Image()
    img.onload = () => setOk(true)
    img.onerror = () => setOk(false)
    img.src = src
  }, [src])

  return (
    <div
      className="banner"
      style={{ height, ...(ok ? { backgroundImage: `url(${src})` } : {}) }}
      role="img"
      aria-label={label}
    >
      {!ok && <span className="label">{label}</span>}
    </div>
  )
}
