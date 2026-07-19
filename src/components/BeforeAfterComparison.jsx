function OutcomeList({ title, items, positive = false, emptyText = 'Evaluation pending.' }) {
  return (
    <div className={`outcome-list ${positive ? 'is-positive' : ''}`}>
      <h4>{title}</h4>
      {items?.length ? <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul> : <p>{emptyText}</p>}
    </div>
  )
}

export default function BeforeAfterComparison({ study }) {
  const { finalComparison } = study
  const hasScore = Number.isFinite(finalComparison.score)
  const noCorrectionNeeded = finalComparison.correctionRequired === false

  return (
    <div className="comparison-wrap">
      <div className="comparison-note">
        <p className="eyebrow">{hasScore ? 'Owner evaluation' : 'Evaluation pending'}</p>
        <h3>{finalComparison.reviewTitle || 'This website has not received a final evaluation yet.'}</h3>
        <p>{finalComparison.review || 'A final score and comparison will follow after the initial and revised designs have been reviewed.'}</p>
      </div>
      <div className={`outcome-grid ${hasScore ? '' : 'outcome-grid--no-score'}`}>
        <OutcomeList
          title={noCorrectionNeeded ? 'What worked' : 'Improvements'}
          items={noCorrectionNeeded ? finalComparison.strengths : finalComparison.improvements}
          positive
        />
        <OutcomeList
          title={noCorrectionNeeded ? 'Corrections needed' : 'Problems fixed'}
          items={finalComparison.fixedProblems}
          positive={!noCorrectionNeeded}
          emptyText={noCorrectionNeeded ? 'No corrections were needed.' : undefined}
        />
        <OutcomeList title="Still remaining" items={finalComparison.remainingProblems} emptyText={hasScore ? 'No remaining problems were identified.' : undefined} />
        {hasScore && (
          <div className="score-card">
            <span>Final evaluation</span>
            <strong>{finalComparison.score}<small>/10</small></strong>
            <div
              className="score-track"
              role="meter"
              aria-label={`${study.name} final evaluation score`}
              aria-valuemin="0"
              aria-valuemax="10"
              aria-valuenow={finalComparison.score}
            >
              <i aria-hidden="true" style={{ width: `${finalComparison.score * 10}%` }} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
