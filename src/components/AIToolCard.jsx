import { Link } from 'react-router-dom'
import ToolMark from './ToolMark'
import { ArrowIcon } from './Icons'

export default function AIToolCard({ study, index }) {
  return (
    <article className="tool-card" style={{ '--tool-accent': study.accent }}>
      <div className="tool-card-topline">
        <ToolMark study={study} />
        <span className="tool-index">0{index + 1}</span>
      </div>
      <div className="tool-card-copy">
        <h2>{study.name}</h2>
        <p>{study.cardDescription}</p>
      </div>
      <Link className="card-link" to={`/ai/${study.slug}`} aria-label={`View ${study.name} case study`}>
        <span>View case study</span>
        <ArrowIcon />
      </Link>
    </article>
  )
}
