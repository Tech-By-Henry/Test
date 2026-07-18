import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowIcon } from '../components/Icons'
import ToolMark from '../components/ToolMark'
import { getCaseStudy } from '../data/aiCaseStudies'
import NotFoundPage from './NotFoundPage'

function GymWebsite() {
  return (
    <article className="gym-site">
      <nav className="gym-nav" aria-label="Gym website navigation">
        <strong>PulseForge</strong>
        <div><a href="#programs">Programs</a><a href="#coaches">Coaches</a><a href="#join">Join</a></div>
      </nav>
      <section className="gym-hero">
        <div>
          <p className="gym-kicker">Strength / Conditioning / Recovery</p>
          <h1>Train sharper. Move stronger. Look unstoppable.</h1>
          <p>PulseForge is a sleek performance gym for people who want focused coaching, premium equipment, and a space that feels as modern as their goals.</p>
          <div className="gym-actions"><a href="#join">Start your trial</a><a href="#programs">Explore programs</a></div>
        </div>
        <div className="gym-hero-card" aria-label="Gym training photo placeholder">
          <span>High contrast gym imagery</span>
        </div>
      </section>
      <section className="gym-metrics" aria-label="Gym highlights">
        <div><strong>24/7</strong><span>Member access</span></div>
        <div><strong>12</strong><span>Coach-led programs</span></div>
        <div><strong>4.9</strong><span>Member rating</span></div>
      </section>
      <section className="gym-section" id="programs">
        <p className="gym-kicker">Programs</p>
        <h2>Built for phone screens and laptop screens.</h2>
        <div className="gym-program-grid">
          {['Strength Lab', 'HIIT Engine', 'Mobility Reset'].map((item) => <div key={item}><h3>{item}</h3><p>Purposeful sessions with clear pacing, confident spacing, and mobile-first content blocks.</p></div>)}
        </div>
      </section>
      <section className="gym-split" id="coaches">
        <div><p className="gym-kicker">Coaches</p><h2>Premium coaching without the generic AI look.</h2></div>
        <p>Bold typography, sharp cards, gym-focused icons, and clear calls to action keep the design modern without squeezing a desktop layout into mobile.</p>
      </section>
      <section className="gym-cta" id="join">
        <p className="gym-kicker">Join today</p>
        <h2>Ready for a cleaner gym experience?</h2>
        <a href="mailto:hello@pulseforge.example">Book a walkthrough</a>
      </section>
    </article>
  )
}

function EmptyGeneratedSite({ study }) {
  return (
    <div className="generated-empty">
      <ToolMark study={study} size="large" />
      <h1>{study.name} generated page is not attached yet.</h1>
      <p>When that model’s generated website is available, it should live here first. The analysis stays behind the stats button.</p>
    </div>
  )
}

export default function GeneratedSitePage() {
  const { slug } = useParams()
  const study = getCaseStudy(slug)
  const [viewport, setViewport] = useState('desktop')

  useEffect(() => {
    if (study) document.title = `${study.name} Generated Website · AI Failure and Correction Pairs`
  }, [study])

  if (!study) return <NotFoundPage />

  return (
    <div className="generated-page" style={{ '--tool-accent': study.accent }}>
      <div className="generated-toolbar">
        <div className="generated-title"><ToolMark study={study} /><div><span>Generated page</span><strong>{study.name} · {study.title}</strong></div></div>
        <div className="generated-actions">
          <div className="viewport-toggle" role="group" aria-label="Generated page viewport">
            <button type="button" className={viewport === 'desktop' ? 'is-active' : ''} aria-pressed={viewport === 'desktop'} onClick={() => setViewport('desktop')}><span>Desktop</span><small>1440px wide</small></button>
            <button type="button" className={viewport === 'mobile' ? 'is-active' : ''} aria-pressed={viewport === 'mobile'} onClick={() => setViewport('mobile')}><span>iPhone 14</span><small>390 × 844</small></button>
          </div>
          <Link className="button button--dark" to={`/ai/${study.slug}`}>View stats / analysis <ArrowIcon /></Link>
        </div>
      </div>
      <div className={`generated-stage generated-stage--${viewport}`}>
        <div className="generated-device">
          {study.slug === 'vo' ? <GymWebsite /> : <EmptyGeneratedSite study={study} />}
        </div>
      </div>
    </div>
  )
}
