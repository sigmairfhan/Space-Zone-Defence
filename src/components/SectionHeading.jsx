export default function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <div className={`mb-5 ${center ? 'text-center mx-auto' : ''}`} style={{ maxWidth: center ? 720 : 'none' }}>
      {eyebrow && <div className="eyebrow mb-2">{eyebrow}</div>}
      <h2>{title}</h2>
      {text && <p className="text-muted-sz mt-3 mb-0">{text}</p>}
    </div>
  )
}
