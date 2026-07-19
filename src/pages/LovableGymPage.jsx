import { useEffect } from 'react'
import {
  IronArrowIcon,
  IronClockIcon,
  IronDumbbellIcon,
  IronFlameIcon,
  IronMapPinIcon,
  IronPhoneIcon,
  IronTimerIcon,
  IronZapIcon,
} from '../components/LovableIcons'
import '../styles/lovable-gym.css'

const disciplines = [
  { icon: IronDumbbellIcon, title: 'Barbell Room', num: '01', img: '/images/lovable/dumbbells.jpg', copy: 'Eight competition platforms. Eighteen calibrated bars. Chalk everywhere it should be.' },
  { icon: IronFlameIcon, title: 'The Pit', num: '02', img: '/images/lovable/ropes.jpg', copy: 'Conditioning floor with sleds, ropes, echo bikes and a 40m turf lane.' },
  { icon: IronZapIcon, title: 'Combat', num: '03', img: '/images/lovable/boxing.jpg', copy: 'Regulation ring, twelve heavy bags, and coaches with fight records.' },
  { icon: IronTimerIcon, title: 'Recovery', num: '04', img: '/images/lovable/grip.jpg', copy: 'Cold plunge, infrared sauna, mobility bay. Because recovery is training too.' },
]

const programs = [
  { code: 'PWR-01', name: 'Powerbuild', desc: '5-day strength + hypertrophy protocol', cycle: '12 weeks' },
  { code: 'CND-02', name: 'Engine', desc: 'Metabolic conditioning + zone-2 base', cycle: '8 weeks' },
  { code: 'CMB-03', name: "Fighter's Camp", desc: 'Boxing / MT technical + strength', cycle: '10 weeks' },
  { code: 'OLY-04', name: 'Barbell Sport', desc: 'Snatch, clean & jerk, competition prep', cycle: '16 weeks' },
  { code: 'GEN-05', name: 'Foundations', desc: 'New to lifting — first 90 days done right', cycle: '12 weeks' },
]

const coaches = [
  { name: 'Marcus Vale', role: 'Head of Strength', stat: '2× National PL Champ' },
  { name: 'Ines Corbin', role: 'Combat Lead', stat: '12–1 amateur boxing' },
  { name: 'Diego Ruiz', role: 'Barbell Sport', stat: 'Sr. Olympic coach' },
]

const tiers = [
  { name: 'Open Floor', price: '89', period: '/ month', perks: ['24/7 access', 'All disciplines', 'Locker + towel', 'Guest passes × 2'] },
  { name: 'Coached', price: '189', period: '/ month', perks: ['Everything in Open', 'Written program', 'Weekly 1-on-1 check-in', 'Nutrition audit'], featured: true },
  { name: 'Fight Camp', price: '249', period: '/ month', perks: ['Combat-focused', '3 sparring sessions / wk', 'Corner + strategy', 'Recovery unlimited'] },
]

function Logo() {
  return (
    <a className="iron-logo" href="#top" aria-label="Ironhaus home">
      <span className="iron-logo-mark"><IronDumbbellIcon /></span>
      <span>IRONHAUS</span>
    </a>
  )
}

function ArrowLink({ href, children, className = '' }) {
  return <a className={`iron-button ${className}`} href={href}>{children}<IronArrowIcon /></a>
}

export default function LovableGymPage() {
  useEffect(() => {
    document.title = 'IRONHAUS — Strength Built in the Dark'
  }, [])

  return (
    <div className="ironhaus-page">
      <header className="iron-nav">
        <div className="iron-wrap iron-nav-inner">
          <Logo />
          <nav className="iron-nav-links" aria-label="Gym navigation">
            <a href="#disciplines">Disciplines</a>
            <a href="#programs">Programs</a>
            <a href="#coaches">Coaches</a>
            <a href="#membership">Membership</a>
          </nav>
          <ArrowLink href="#visit" className="iron-button--compact">Free Trial</ArrowLink>
        </div>
      </header>

      <section className="iron-hero" id="top">
        <img className="iron-hero-image" src="/images/lovable/hero.jpg" alt="Athlete deadlifting in a dark gym" width="1600" height="1800" />
        <div className="iron-hero-shade iron-hero-shade--vertical" />
        <div className="iron-hero-shade iron-hero-shade--horizontal" />
        <div className="iron-wrap iron-hero-content">
          <p className="iron-hairline iron-accent-line">Est. 2014 — District 7</p>
          <h1>Strength<br /><em>Built</em> in the<br />Dark.</h1>
          <div className="iron-hero-bottom">
            <p>A serious gym for serious training. Barbell, conditioning, and combat sports — under one raw industrial roof. No mirrors. No music you didn&apos;t earn.</p>
            <div className="iron-hero-actions">
              <ArrowLink href="#visit">Book a Session</ArrowLink>
              <a className="iron-button iron-button--outline" href="#disciplines">Tour</a>
            </div>
          </div>
        </div>
        <div className="iron-scroll-rail" aria-hidden="true"><span>Scroll — Ironhaus 001</span><i /></div>
      </section>

      <div className="iron-marquee" aria-hidden="true">
        <div className="iron-marquee-track">
          {[...Array(3)].flatMap((_, group) => ['Powerlifting', 'Olympic Lifts', 'Hypertrophy', 'Conditioning', 'Boxing', 'Muay Thai', 'Mobility', 'Coached Programming'].map((item) => (
            <span key={`${group}-${item}`}>{item}<i /></span>
          )))}
        </div>
      </div>

      <section className="iron-wrap iron-manifesto">
        <div>
          <p className="iron-hairline iron-ember-text">01 — Manifesto</p>
          <p className="iron-hairline iron-muted iron-manifesto-aside">Chapter one<br />of a longer conversation.</p>
        </div>
        <div>
          <h2>We don&apos;t sell fitness.<br /><span>We build people who don&apos;t quit.</span></h2>
          <p>Ironhaus is 12,000 square feet of concrete, steel, and intention. Every plate calibrated. Every coach a competitor. The lights stay low so the work stays honest.</p>
          <p>If you want a spa, there are plenty. If you want to get strong — pull the handle.</p>
        </div>
      </section>

      <section className="iron-section" id="disciplines">
        <div className="iron-wrap iron-section-inner">
          <div className="iron-section-heading iron-section-heading--split">
            <div><p className="iron-hairline iron-ember-text">02 — Four rooms</p><h2>Disciplines</h2></div>
            <p>Four dedicated rooms. One membership. Cross-train between disciplines or specialize — the building is yours.</p>
          </div>
          <div className="iron-discipline-grid">
            {disciplines.map((discipline) => {
              const DisciplineIcon = discipline.icon
              return (
                <article className="iron-discipline" key={discipline.title}>
                  <div className="iron-discipline-image">
                    <img src={discipline.img} alt={discipline.title} loading="lazy" />
                    <div className="iron-card-shade" />
                    <span className="iron-hairline iron-card-number">{discipline.num}</span>
                    <span className="iron-card-icon"><DisciplineIcon /></span>
                  </div>
                  <div className="iron-discipline-body">
                    <div><h3>{discipline.title}</h3><p>{discipline.copy}</p></div>
                    <IronArrowIcon className="iron-card-arrow" />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="iron-section iron-section--ink" id="programs">
        <div className="iron-wrap iron-section-inner">
          <div className="iron-program-heading">
            <p className="iron-hairline iron-ember-text">03 — Coached programming</p>
            <h2>Programs written<br />by people who compete.</h2>
          </div>
          <div className="iron-program-list">
            {programs.map((program) => (
              <a href="#visit" className="iron-program" key={program.code}>
                <span className="iron-program-code">{program.code}</span>
                <strong>{program.name}</strong>
                <span className="iron-program-description">{program.desc}</span>
                <span className="iron-hairline iron-muted">{program.cycle}</span>
                <IronArrowIcon />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="iron-section" id="coaches">
        <div className="iron-wrap iron-section-inner">
          <p className="iron-hairline iron-ember-text">04 — The room</p>
          <h2 className="iron-coaches-title">Coaches, not influencers.</h2>
          <div className="iron-coach-grid">
            {coaches.map((coach, index) => (
              <article className="iron-coach" key={coach.name}>
                <div><span className="iron-program-code">0{index + 1} / 03</span><i /></div>
                <div><p className="iron-hairline iron-ember-text">{coach.role}</p><h3>{coach.name}</h3><p className="iron-muted">{coach.stat}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="iron-section iron-section--ink" id="membership">
        <div className="iron-wrap iron-section-inner">
          <div className="iron-section-heading iron-section-heading--split">
            <div><p className="iron-hairline iron-ember-text">05 — Membership</p><h2>Three ways in.</h2></div>
            <p>No initiation fee. No contracts. Cancel with 30 days.</p>
          </div>
          <div className="iron-tier-grid">
            {tiers.map((tier) => (
              <article className={`iron-tier ${tier.featured ? 'iron-tier--featured' : ''}`} key={tier.name}>
                {tier.featured && <span className="iron-hairline iron-tier-tag">Most chosen</span>}
                <div className="iron-tier-title"><h3>{tier.name}</h3>{tier.featured ? <IronFlameIcon /> : <IronDumbbellIcon />}</div>
                <div className="iron-price"><strong>${tier.price}</strong><span>{tier.period}</span></div>
                <ul>{tier.perks.map((perk) => <li key={perk}><i />{perk}</li>)}</ul>
                <a className="iron-tier-button" href="#visit">Join {tier.name}<IronArrowIcon /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="iron-section" id="visit">
        <div className="iron-wrap iron-visit">
          <div>
            <p className="iron-hairline iron-ember-text">06 — Visit</p>
            <h2>Walk in.<br />Try a week.<br /><em>Free.</em></h2>
            <p className="iron-visit-copy">Seven days of unrestricted access. Meet a coach, tour the floor, hit a session. If it clicks, sign up. If it doesn&apos;t, no hard feelings.</p>
            <div className="iron-contact-list">
              <p><IronMapPinIcon />412 Foundry St, District 7</p>
              <p><IronClockIcon />Members 24/7 · Front desk 06:00 — 22:00</p>
              <p><IronPhoneIcon />+1 (555) 014-0412</p>
            </div>
          </div>
          <form className="iron-trial-form">
            <p className="iron-hairline iron-muted">Claim your free week</p>
            <label htmlFor="iron-name">Name<input id="iron-name" type="text" placeholder="Jane Doe" /></label>
            <label htmlFor="iron-email">Email<input id="iron-email" type="email" placeholder="jane@doe.com" /></label>
            <label htmlFor="iron-discipline">Discipline of interest<select id="iron-discipline" defaultValue="Barbell"><option>Barbell</option><option>Conditioning</option><option>Combat</option><option>Everything</option></select></label>
            <button type="button">Book my week<IronArrowIcon /></button>
          </form>
        </div>
      </section>

      <footer className="iron-footer">
        <div className="iron-wrap">
          <div className="iron-footer-grid">
            <div><Logo /><p>The lights stay low.<br />The work stays honest.</p></div>
            <div><h4 className="iron-hairline iron-ember-text">Site</h4><a href="#disciplines">Disciplines</a><a href="#programs">Programs</a><a href="#coaches">Coaches</a><a href="#membership">Membership</a></div>
            <div><h4 className="iron-hairline iron-ember-text">Follow</h4><a href="#instagram">Instagram</a><a href="#youtube">YouTube</a><a href="#strava">Strava Club</a></div>
          </div>
          <div className="iron-footer-base iron-hairline iron-muted"><span>© 2026 Ironhaus Athletic Co.</span><span>Built in District 7</span></div>
        </div>
      </footer>
    </div>
  )
}
