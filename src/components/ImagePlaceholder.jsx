import { useState } from 'react'

// Shows the image if the file exists, otherwise a labelled placeholder block.
// ratio: CSS aspect-ratio, e.g. "1 / 1" or "4 / 5". className/style pass through.
export default function ImagePlaceholder({ src, alt = '', label = 'Image placeholder', ratio, className = '', style }) {
  const [failed, setFailed] = useState(!src)
  return (
    <div className={`img-ph ${className}`} style={{ ...(ratio ? { aspectRatio: ratio } : {}), ...style }}>
      {!failed ? (
        <img src={src} alt={alt} onError={() => setFailed(true)} />
      ) : (
        <span className="label">{label}</span>
      )}
    </div>
  )
}
