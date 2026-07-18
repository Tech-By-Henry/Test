function OutcomeList({ title, items, positive = false }) {
  return (
    <div className={`outcome-list ${positive ? 'is-positive' : ''}`}>
      <h4>{title}</h4>
      {items?.length ? <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul> : <p>Nothing documented yet.</p>}
    </div>
  )
}

export default function BeforeAfterComparison({ study }) {
  const { finalComparison } = study

  return (
    <div className="comparison-wrap">
      <div className="comparison-note">
        <p className="eyebrow">No default score</p>
        <h3>Final notes will be added from real review observations.</h3>
        <p>The live page and the evidence/post-correction screenshot sections are the source of truth, so this area only summarizes owner-approved findings when they are available.</p>
      </div>
      <div className="outcome-grid outcome-grid--no-score">
        <OutcomeList title="Improvements" items={finalComparison.improvements} positive />
        <OutcomeList title="Problems fixed" items={finalComparison.fixedProblems} positive />
        <OutcomeList title="Still remaining" items={finalComparison.remainingProblems} />
      </div>
    </div>
  )
}
