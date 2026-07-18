import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowIcon } from '../components/Icons'

export default function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page Not Found · AI Failure and Correction Pairs'
  }, [])

  return (
    <section className="not-found">
      <div className="container not-found-inner">
        <span className="not-found-code">404</span>
        <p className="eyebrow">Page not found</p>
        <h1>This output<br />wasn’t generated.</h1>
        <p>The page may have moved, or this AI tool has not been added to the study yet.</p>
        <Link className="button button--dark" to="/">Return to case studies <ArrowIcon /></Link>
      </div>
    </section>
  )
}
