import SeverityBadge from './SeverityBadge'

export default function ProblemsList({ problems }) {
  if (!problems?.length) return <p className="simple-empty">No documented problems yet.</p>

  return (
    <div className="problems-list">
      {problems.map((problem, index) => (
        <article className="problem-card" key={problem.id}>
          <div className="problem-index">{String(index + 1).padStart(2, '0')}</div>
          <div className="problem-main">
            <div className="problem-meta">
              <span>{problem.category}</span>
              <SeverityBadge severity={problem.severity} />
            </div>
            <h3>{problem.title}</h3>
            <p>{problem.description}</p>
            <div className="recommended-fix">
              <span>Recommended fix</span>
              <p>{problem.recommendedFix}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
