import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowIcon } from '../components/Icons'
import ToolMark from '../components/ToolMark'
import { getCaseStudy } from '../data/aiCaseStudies'
import NotFoundPage from './NotFoundPage'

function EmptyGeneratedSite({ study }) {
  return (
    <div className="generated-empty">
      <ToolMark study={study} size="large" />
      <h1>{study.name} website review coming soon.</h1>
      <p>This website experience is not available yet.</p>
    </div>
  )
}

export default function GeneratedSitePage() {
  const { slug } = useParams()
  const study = getCaseStudy(slug)

  useEffect(() => {
    if (study) document.title = `${study.name} Website · AI Failure and Correction Pairs`
  }, [study])

  if (!study) return <NotFoundPage />

  return (
    <div className="generated-page" style={{ '--tool-accent': study.accent }}>
      <div className="generated-toolbar">
        <div className="generated-title"><ToolMark study={study} /><div><span>Website preview</span><strong>{study.name} · {study.title}</strong></div></div>
        <div className="generated-actions">
          <Link className="button button--dark" to={`/ai/${study.slug}`}>Read case study <ArrowIcon /></Link>
        </div>
      </div>
      <div className="generated-stage">
        <div className="generated-device">
          <EmptyGeneratedSite study={study} />
        </div>
      </div>
    </div>
  )
}
