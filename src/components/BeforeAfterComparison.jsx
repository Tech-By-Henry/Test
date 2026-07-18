import ScreenshotCard from './ScreenshotCard'

function OutcomeList({ title, items, positive = false }) {
  return (
    <div className={`outcome-list ${positive ? 'is-positive' : ''}`}>
      <h4>{title}</h4>
      {items?.length ? <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul> : <p>Nothing documented.</p>}
    </div>
  )
}

export default function BeforeAfterComparison({ study }) {
  const { screenshots, screenSizes, finalComparison } = study

  return (
    <div className="comparison-wrap">
      <div className="comparison-grid">
        <div className="comparison-column">
          <div className="comparison-label"><span>01</span> Before correction</div>
          <ScreenshotCard
            src={screenshots.firstDesktop}
            alt={`${study.name} first website output on desktop`}
            placeholder="First desktop screenshot will be added here"
            caption="Initial AI output"
            screenSize={screenSizes.desktop}
          />
        </div>
        <div className="comparison-column comparison-column--after">
          <div className="comparison-label"><span>02</span> After correction</div>
          <ScreenshotCard
            src={screenshots.correctedDesktop}
            alt={`${study.name} corrected website output on desktop`}
            placeholder="Corrected desktop screenshot will be added here"
            caption="Corrected AI output"
            screenSize={screenSizes.desktop}
          />
        </div>
      </div>
      <div className="outcome-grid">
        <OutcomeList title="Improvements" items={finalComparison.improvements} positive />
        <OutcomeList title="Problems fixed" items={finalComparison.fixedProblems} positive />
        <OutcomeList title="Still remaining" items={finalComparison.remainingProblems} />
        <div className="score-card">
          <span>Final evaluation</span>
          <strong>{finalComparison.score}<small>/10</small></strong>
          <div
            className="score-track"
            role="meter"
            aria-label="Final evaluation score"
            aria-valuemin="0"
            aria-valuemax="10"
            aria-valuenow={finalComparison.score}
          >
            <i aria-hidden="true" style={{ width: `${finalComparison.score * 10}%` }} />
          </div>
        </div>
      </div>
    </div>
  )
}
