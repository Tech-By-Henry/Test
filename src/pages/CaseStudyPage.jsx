import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import BackToTop from '../components/BackToTop'
import BeforeAfterComparison from '../components/BeforeAfterComparison'
import FloatingSectionNav from '../components/FloatingSectionNav'
import { ArrowIcon, CheckIcon, ExternalIcon } from '../components/Icons'
import ProblemsList from '../components/ProblemsList'
import PromptDisplay from '../components/PromptDisplay'
import ScreenshotCard from '../components/ScreenshotCard'
import SectionContainer from '../components/SectionContainer'
import ToolMark from '../components/ToolMark'
import { caseStudySections, getCaseStudy } from '../data/aiCaseStudies'
import NotFoundPage from './NotFoundPage'

function OutputSummary({ output, corrected = false }) {
  return (
    <div className="output-layout">
      <div className="output-summary-card">
        <p className="eyebrow">{corrected ? 'Revision summary' : 'Generation summary'}</p>
        <h3>{output.summary}</h3>
        {!corrected && <p>{output.notes}</p>}
        {corrected && <p>{output.fixed}</p>}
        {output.previewUrl ? (
          <a className="button button--dark" href={output.previewUrl} target="_blank" rel="noreferrer">
            Open live preview <ExternalIcon />
          </a>
        ) : (
          <span className="preview-unavailable">Live preview link not added yet</span>
        )}
      </div>
      <div className="output-details">
        {corrected ? (
          <>
            <div>
              <span className="detail-label">What changed</span>
              <ul className="check-list">{output.changes.map((change) => <li key={change}><CheckIcon />{change}</li>)}</ul>
            </div>
            <div>
              <span className="detail-label">Remaining limitations</span>
              <ul className="plain-list">{output.remainingLimitations.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </>
        ) : (
          <div>
            <span className="detail-label">Generated code</span>
            <p>{output.codeSummary}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function CaseStudyPage() {
  const { slug } = useParams()
  const study = getCaseStudy(slug)

  useEffect(() => {
    if (study) document.title = `${study.name} Case Study · AI Failure and Correction Pairs`
  }, [study])

  if (!study) return <NotFoundPage />

  const sections = caseStudySections
  const sectionNumber = (id) => String(sections.findIndex((section) => section.id === id) + 1).padStart(2, '0')

  return (
    <div className="case-page" style={{ '--tool-accent': study.accent }}>
      <header className="case-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Case studies</Link><span>/</span><span aria-current="page">{study.shortName}</span>
          </nav>
          <div className="case-hero-grid">
            <div className="case-identity">
              <ToolMark study={study} size="large" />
              <div>
                <p className="eyebrow">AI builder case study</p>
                <h1>{study.name}</h1>
              </div>
            </div>
            <div className="case-intro">
              <p>{study.description}</p>
              <dl>
                <div><dt>Website brief</dt><dd>{study.title}</dd></div>
                <div><dt>Category</dt><dd>{study.category}</dd></div>
              </dl>
              <Link className="button button--outline" to="/"><ArrowIcon direction="left" /> Back to all studies</Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container case-layout">
        <aside className="case-sidebar"><FloatingSectionNav sections={sections} /></aside>
        <div className="case-content">
          <SectionContainer id="preview" number={sectionNumber('preview')} eyebrow="Project record" title="Generated Website" intro="The model card opens the generated page first. Use the button below if you need to return to the live page from this analysis record.">
            <Link className="button button--dark analysis-open-site" to={`/site/${study.slug}`}>Open generated page <ExternalIcon /></Link>
            <dl className="project-facts">
              <div><dt>Website title</dt><dd>{study.title}</dd></div>
              <div><dt>Category</dt><dd>{study.category}</dd></div>
              <div><dt>AI tool used</dt><dd>{study.name}</dd></div>
              <div><dt>Date created</dt><dd>{study.dateCreated}</dd></div>
              <div><dt>Current status</dt><dd><span className="status-dot" />{study.status}</dd></div>
            </dl>
          </SectionContainer>

          <SectionContainer id="original-prompt" number={sectionNumber('original-prompt')} eyebrow="Input · Version 01" title="Original Prompt" intro="The exact instruction sent to the AI tool for its first attempt.">
            <PromptDisplay prompt={study.originalPrompt} label="Original input" />
          </SectionContainer>

          <SectionContainer id="first-output" number={sectionNumber('first-output')} eyebrow="Generated result · Version 01" title="First Output" intro="What the tool generated before any correction or manual refinement.">
            <OutputSummary output={study.firstOutput} />
          </SectionContainer>

          <SectionContainer id="desktop-screenshot" number={sectionNumber('desktop-screenshot')} eyebrow="Evidence · Desktop" title="Desktop Screenshot">
            <ScreenshotCard
              src={study.screenshots.firstDesktop}
              alt={`${study.name} first website output on desktop`}
              placeholder="First desktop screenshot will be added here"
              caption="First output on desktop"
              screenSize={study.screenSizes.desktop}
            />
          </SectionContainer>

          <SectionContainer id="mobile-screenshot" number={sectionNumber('mobile-screenshot')} eyebrow="Evidence · Mobile" title="Mobile Screenshot">
            <div className="mobile-shot-wrap">
              <ScreenshotCard
                src={study.screenshots.firstMobile}
                alt={`${study.name} first website output on mobile`}
                placeholder="First mobile screenshot will be added here"
                caption="First output on mobile"
                screenSize={study.screenSizes.mobile}
                variant="mobile"
              />
              <div className="mobile-note"><span>Why mobile matters</span><p>Small screens reveal ordering, overflow, touch-target, and navigation issues that may not appear in the desktop layout.</p></div>
            </div>
          </SectionContainer>

          <SectionContainer id="problems" number={sectionNumber('problems')} eyebrow="Critical review" title="Owner Observations" intro="No default scores or dummy findings are shown here. Add only the observations supplied after reviewing the generated page." className="case-section--problems">
            <ProblemsList problems={study.problems} />
          </SectionContainer>

          <SectionContainer id="correction-prompt" number={sectionNumber('correction-prompt')} eyebrow="Input · Version 02" title="Correction Prompt" intro="A focused follow-up prompt written to resolve the observed failures.">
            <PromptDisplay prompt={study.correctionPrompt} label="Correction input" />
          </SectionContainer>

          <SectionContainer id="corrected-output" number={sectionNumber('corrected-output')} eyebrow="Generated result · Version 02" title="Corrected Output" intro="The result produced after the evidence-led correction prompt. The generated page remains the place for desktop and iPhone 14 viewing.">
            <OutputSummary output={study.correctedOutput} corrected />
          </SectionContainer>

          <SectionContainer id="corrected-desktop" number={sectionNumber('corrected-desktop')} eyebrow="Evidence · Desktop" title="Corrected Desktop Screenshot">
            <ScreenshotCard
              src={study.screenshots.correctedDesktop}
              alt={`${study.name} corrected website output on desktop`}
              placeholder="Corrected desktop screenshot will be added here"
              caption="Corrected output on desktop"
              screenSize={study.screenSizes.desktop}
            />
          </SectionContainer>

          <SectionContainer id="corrected-mobile" number={sectionNumber('corrected-mobile')} eyebrow="Evidence · Mobile" title="Corrected Mobile Screenshot">
            <div className="mobile-shot-wrap">
              <ScreenshotCard
                src={study.screenshots.correctedMobile}
                alt={`${study.name} corrected website output on mobile`}
                placeholder="Corrected mobile screenshot will be added here"
                caption="Corrected output on mobile"
                screenSize={study.screenSizes.mobile}
                variant="mobile"
              />
              <div className="mobile-note mobile-note--positive"><span>Correction check</span><p>The final mobile capture should confirm that key content, controls, and navigation remain usable at 390px.</p></div>
            </div>
          </SectionContainer>

          <SectionContainer id="comparison" number={sectionNumber('comparison')} eyebrow="Evaluation" title="Final Comparison" intro="The first and corrected outputs reviewed side by side.">
            <BeforeAfterComparison study={study} />
          </SectionContainer>

          <div className="case-end">
            <span>End of case study</span>
            <Link className="button button--dark" to="/">Explore all tools <ArrowIcon /></Link>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  )
}
