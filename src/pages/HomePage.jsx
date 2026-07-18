import { useEffect } from 'react'
import AIToolCard from '../components/AIToolCard'
import { aiCaseStudies } from '../data/aiCaseStudies'

export default function HomePage() {
  useEffect(() => {
    document.title = 'AI Failure and Correction Pairs'
  }, [])

  return (
    <>
      <section className="home-hero">
        <div className="container">
          <div className="home-kicker"><span>Comparative study</span><i /> <span>Five AI builders</span></div>
          <div className="hero-title-wrap">
            <h1>AI Failure<br />and <em>Correction</em> Pairs</h1>
            <span className="hero-study-count" aria-label="Five documented tools">05</span>
          </div>
          <div className="hero-bottom">
            <p>
              A documented comparison of what five AI website builders produced on their first attempt—and how focused correction prompts improved the result.
            </p>
            <a className="text-link" href="#case-studies">Explore the case studies <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section className="study-overview" aria-labelledby="method-title">
        <div className="container overview-grid">
          <p className="eyebrow">The method</p>
          <div>
            <h2 id="method-title">One brief. Two outputs.<br />A clearer result.</h2>
            <p>Each case study records the original prompt, first output, problems identified, correction prompt, and final evaluation. The same restaurant brief keeps the comparison focused on how each tool interprets and improves a shared task.</p>
          </div>
          <dl className="overview-stats">
            <div><dt>Tools tested</dt><dd>5</dd></div>
            <div><dt>Documented stages</dt><dd>11</dd></div>
            <div><dt>Evaluation scale</dt><dd>10</dd></div>
          </dl>
        </div>
      </section>

      <section className="tool-section" id="case-studies" aria-labelledby="studies-title">
        <div className="container">
          <div className="tool-section-heading">
            <div>
              <p className="eyebrow">Case studies · 01—05</p>
              <h2 id="studies-title">Choose an AI tool</h2>
            </div>
            <p>Select a card to review the full failure-and-correction record.</p>
          </div>
          <div className="tool-grid">
            {aiCaseStudies.map((study, index) => <AIToolCard key={study.id} study={study} index={index} />)}
          </div>
        </div>
      </section>
    </>
  )
}
