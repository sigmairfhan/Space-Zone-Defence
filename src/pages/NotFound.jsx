import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section text-center">
      <div className="container">
        <div className="eyebrow mb-2">404</div>
        <h1 className="mb-3">Page not found</h1>
        <p className="text-muted-sz">The page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-sz mt-2">Back to home</Link>
      </div>
    </section>
  )
}
