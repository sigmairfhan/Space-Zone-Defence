import { useState } from 'react'

export default function ImagePlaceholder({ src, alt = '', label = 'Image placeholder' }) {
  const [failed, setFailed] = useState(!src)
  return (
    <div className="img-ph">
      {!failed ? (
        <img src={src} alt={alt} onError={() => setFailed(true)} />
      ) : (
        <span className="label">{label}</span>
      )}
    </div>
  )
}
