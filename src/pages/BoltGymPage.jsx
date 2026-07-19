import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/bolt-gym.css'
import {
  MrdDumbbell,
  MrdPlate,
  MrdBolt,
  MrdTarget,
  MrdHeart,
  MrdLeaf,
  MrdClock,
  MrdPin,
  MrdPhone,
  MrdArrow,
  MrdCheck,
  MrdStar,
  MrdQuote,
} from '../components/BoltIcons'

const pillars = [
  { icon: <MrdDumbbell />, num: '01', title: 'Strength', copy: 'Progressive barbell coaching built around the squat, hinge, press, and pull — with technique before tonnage.' },
  { icon: <MrdHeart />, num: '02', title: 'Conditioning', copy: 'Zone-2 base and high-intensity intervals that build an engine as durable as the muscle on top of it.' },
  { icon: <MrdLeaf />, num: '03', title: 'Recovery', copy: 'Mobility screening, soft-tissue work, and a real recovery suite so training compound without breaking down.' },
]

const programs = [
  { code: 'PWR · 01', name: 'Foundation', desc: 'A 12-week introduction to the barbell lifts. Two coached sessions a week, written programming, and a clean technique base.', meta: ['12 weeks', '2× weekly', 'All levels'], cycle: 'Strength' },
  { code: 'CND · 02', name: 'Engine', desc: 'Mixed-modal conditioning with structured aerobic base work. For athletes who want a gas tank that does not quit.', meta: ['8 weeks', '3× weekly', 'Intermediate'], cycle: 'Conditioning' },
  { code: 'PER · 03', name: 'Performance', desc: 'Concurrent strength and conditioning for competitors. Individualised loading, weekly testing, and coach review.', meta: ['16 weeks', '4× weekly', 'Advanced'], cycle: 'Hybrid' },
  { code: 'MOB · 04', name: 'Restore', desc: 'A recovery-first protocol for returning lifters and desk-bound bodies. Mobility, breath, and soft-tissue work.', meta: ['6 weeks', '2× weekly', 'All levels'], cycle: 'Recovery' },
]

const coaches = [
  { name: 'Soren Hale', role: 'Head of Strength', stat: 'National-level powerlifter, 12 yrs coaching', copy: 'Soren built the Foundation curriculum and coaches the platform lifts. Calm, precise, allergic to ego.', img: 'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { name: 'Mara Voss', role: 'Conditioning Lead', stat: 'Ex-pro triathlete, MSc Sport Sci', copy: 'Mara writes the Engine block and runs the conditioning floor. She will find your limit and move it.', img: 'https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { name: 'Idris Kano', role: 'Movement & Recovery', stat: 'FRC-certified, 9 yrs clinical mobility', copy: 'Idris runs Restore and screens every new member. If you move poorly, he will tell you, kindly.', img: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=900' },
]

const tiers = [
  { name: 'Studio', price: '64', unit: '/ month', desc: 'Open floor and group classes, on your schedule.', perks: ['24/7 floor access', 'All group classes', 'Locker & showers', 'Member app'], featured: false },
  { name: 'Coached', price: '119', unit: '/ month', desc: 'Written programming and weekly coach check-ins.', perks: ['Everything in Studio', 'Personalised program', 'Weekly 1:1 review', 'Recovery suite access', 'Monthly testing'], featured: true },
  { name: 'Private', price: '220', unit: '/ month', desc: 'Fully individualised coaching for a specific goal.', perks: ['Everything in Coached', '2× weekly 1:1 sessions', 'Nutrition guidance', 'Priority booking'], featured: false },
]

export default function BoltGymPage() {
  useEffect(() => {
    document.title = 'MERIDIAN — Strength & Conditioning'
  }, [])

  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="mrd-page">
      <header className={`mrd-topbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="mrd-wrap mrd-topbar-inner">
          <a className="mrd-logo" href="#top" aria-label="MERIDIAN home">
            <span className="mrd-logo-mark"><MrdDumbbell /></span>
            <span className="mrd-logo-text">MERIDIAN<i>.</i></span>
          </a>
          <nav className="mrd-nav" aria-label="Gym navigation">
            <a href="#pillars">Pillars</a>
            <a href="#programs">Programs</a>
            <a href="#facility">Facility</a>
            <a href="#coaches">Coaches</a>
            <a href="#membership">Membership</a>
          </nav>
          <div className="mrd-topbar-actions">
            <Link className="mrd-back-link" to="/ai/bolt-new">View case study</Link>
            <a className="mrd-btn mrd-btn--solid" href="#membership">Join now</a>
          </div>
        </div>
      </header>

      <section className="mrd-hero" id="top">
        <div className="mrd-wrap mrd-hero-grid">
          <div className="mrd-hero-copy">
            <p className="mrd-kicker">Strength · Conditioning · Recovery</p>
            <h1 className="mrd-serif">
              <span>Train with</span>
              <span><em>intent.</em></span>
            </h1>
            <p className="mrd-hero-lede">
              MERIDIAN is a strength and conditioning studio built for people who would rather train well than train often. Considered programming, real coaching, and a room designed for the work.
            </p>
            <div className="mrd-hero-actions">
              <a className="mrd-btn mrd-btn--solid" href="#membership">Start training <MrdArrow /></a>
              <a className="mrd-btn mrd-btn--outline" href="#programs">View programs</a>
            </div>

            <dl className="mrd-hero-stats">
              <div>
                <dt>9<small>k</small></dt>
                <dd>Sq ft of floor</dd>
              </div>
              <div>
                <dt>24<small>/7</small></dt>
                <dd>Member access</dd>
              </div>
              <div>
                <dt>14</dt>
                <dd>Coaches on staff</dd>
              </div>
              <div>
                <dt>4.9<small>★</small></dt>
                <dd>Member rating</dd>
              </div>
            </dl>
          </div>

          <div className="mrd-hero-card">
            <img src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Athlete setting up for a heavy barbell lift in a calm, light-filled gym" loading="eager" />
            <span className="mrd-hero-card-tag"><i /> Now offering trial weeks</span>
          </div>
        </div>
      </section>

      <div className="mrd-marquee" aria-hidden="true">
        <div className="mrd-marquee-track">
          <span>Strength</span><span>Conditioning</span><span>Recovery</span><span>Intent</span>
          <span>Strength</span><span>Conditioning</span><span>Recovery</span><span>Intent</span>
        </div>
      </div>

      <section className="mrd-section" id="pillars">
        <div className="mrd-wrap">
          <div className="mrd-section-head">
            <p className="mrd-kicker">Our three pillars</p>
            <h2 className="mrd-serif">A complete practice, <em>not a class schedule.</em></h2>
            <p>Strength, conditioning, and recovery are not separate products. They are one practice, coached together, in proportion to what you actually need.</p>
          </div>
          <div className="mrd-pillars">
            {pillars.map((p) => (
              <article className="mrd-pillar" key={p.title}>
                <span className="mrd-pillar-num">{p.num}</span>
                <span className="mrd-pillar-icon">{p.icon}</span>
                <h3 className="mrd-serif">{p.title}</h3>
                <p>{p.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mrd-section mrd-section--paper" id="programs">
        <div className="mrd-wrap">
          <div className="mrd-section-head mrd-section-head--split">
            <div>
              <p className="mrd-kicker">Coached programs</p>
              <h2 className="mrd-serif">Written by coaches <em>who compete.</em></h2>
            </div>
            <p>Every program is written, reviewed, and adjusted by a coach who knows your name. No copy-paste spreadsheets, no guesswork.</p>
          </div>
          <div className="mrd-programs">
            {programs.map((p) => (
              <a className="mrd-program" href="#membership" key={p.code}>
                <div className="mrd-program-top">
                  <span className="mrd-program-code">{p.code}</span>
                  <h3 className="mrd-serif">{p.name}</h3>
                </div>
                <p>{p.desc}</p>
                <div className="mrd-program-meta">
                  {p.meta.map((m, i) => (
                    <span key={m}>
                      {i === 0 && <MrdClock />}
                      {i === 1 && <MrdTarget />}
                      {i === 2 && <MrdStar />}
                      {m}
                    </span>
                  ))}
                </div>
                <MrdArrow />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mrd-section" id="facility">
        <div className="mrd-wrap mrd-split">
          <div className="mrd-split-media">
            <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Light-filled strength studio with racks, plates, and a turf lane" loading="lazy" />
            <span className="mrd-split-media-badge">The Studio · District 9</span>
          </div>
          <div>
            <p className="mrd-kicker">The facility</p>
            <h2 className="mrd-serif">A room built for <em>the work.</em></h2>
            <p>Nine thousand square feet, split across a barbell floor, a conditioning deck, and a dedicated recovery suite. North light, high ceilings, and exactly the equipment that earns its place.</p>
            <ul className="mrd-checklist">
              <li><MrdCheck /> Eight competition platforms and calibrated plates.</li>
              <li><MrdPlate /> Specialty bars — SSB, deadlift, log, and trap bar.</li>
              <li><MrdBolt /> 30m turf lane, sleds, echo bikes, and ski ergs.</li>
              <li><MrdLeaf /> Recovery suite: sauna, plunge, and mobility bay.</li>
            </ul>
            <div className="mrd-hero-actions" style={{ marginTop: 32 }}>
              <a className="mrd-btn mrd-btn--solid" href="#visit">Book a tour <MrdArrow /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="mrd-section mrd-section--paper" id="coaches">
        <div className="mrd-wrap">
          <div className="mrd-section-head">
            <p className="mrd-kicker">The team</p>
            <h2 className="mrd-serif">Coaches, <em>not influencers.</em></h2>
            <p>A small staff of certified, competing coaches. You will work with the same people every week — they will know your lifts, your history, and your goals.</p>
          </div>
          <div className="mrd-coaches">
            {coaches.map((c) => (
              <article className="mrd-coach" key={c.name}>
                <div className="mrd-coach-media">
                  <img src={c.img} alt={`${c.name}, ${c.role} at MERIDIAN`} loading="lazy" />
                </div>
                <div className="mrd-coach-body">
                  <p className="mrd-coach-role">{c.role}</p>
                  <h3 className="mrd-serif">{c.name}</h3>
                  <p className="mrd-coach-stat">{c.stat}</p>
                  <p>{c.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mrd-section mrd-section--ink">
        <div className="mrd-wrap">
          <div className="mrd-quote">
            <MrdQuote />
            <blockquote className="mrd-serif">
              I came in to lose weight and left with a <em>practice</em> I actually want to keep. The coaching is the difference — every session has a reason.
            </blockquote>
            <div className="mrd-quote-cite">
              <strong>Amara T.</strong>
              <span>Member · 2 years</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mrd-section" id="membership">
        <div className="mrd-wrap">
          <div className="mrd-section-head" style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            <p className="mrd-kicker mrd-kicker--center">Membership</p>
            <h2 className="mrd-serif">Choose your <em>level of coaching.</em></h2>
            <p style={{ marginInline: 'auto' }}>No contracts, no joining fee. Every membership includes an intro session and a movement screen.</p>
          </div>
          <div className="mrd-tiers">
            {tiers.map((t) => (
              <div className={t.featured ? 'mrd-tier mrd-tier--featured' : 'mrd-tier'} key={t.name}>
                {t.featured && <span className="mrd-tier-tag">Most chosen</span>}
                <h3 className="mrd-serif">{t.name}</h3>
                <div className="mrd-tier-price">
                  <strong>${t.price}</strong>
                  <span>{t.unit}</span>
                </div>
                <p className="mrd-tier-desc">{t.desc}</p>
                <ul>
                  {t.perks.map((perk) => (
                    <li key={perk}><MrdCheck /> {perk}</li>
                  ))}
                </ul>
                <a className={t.featured ? 'mrd-btn mrd-btn--light' : 'mrd-btn mrd-btn--solid'} href="#visit">
                  Join {t.name} <MrdArrow />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mrd-section mrd-section--ink" id="visit">
        <div className="mrd-wrap mrd-visit-grid">
          <div className="mrd-visit-info">
            <p className="mrd-kicker">Visit the studio</p>
            <h2 className="mrd-serif">Your first week <em>is on us.</em></h2>
            <p>Walk in, meet a coach, move some weight. Seven days of full access with no obligation — if it is not the right room, we will say so honestly.</p>
            <ul className="mrd-contact">
              <li><MrdPin /> 12 Foundry Lane, District 9</li>
              <li><MrdClock /> Members 24/7 · Desk 06:00 — 22:00</li>
              <li><MrdPhone /> +1 (555) 014-0012</li>
            </ul>
          </div>
          <form className="mrd-form" onSubmit={(e) => e.preventDefault()}>
            <p className="mrd-form-title">Claim your free week</p>
            <label htmlFor="mrd-name">Name
              <input id="mrd-name" type="text" placeholder="Jane Doe" autoComplete="name" />
            </label>
            <label htmlFor="mrd-email">Email
              <input id="mrd-email" type="email" placeholder="jane@doe.com" autoComplete="email" />
            </label>
            <label htmlFor="mrd-focus">Primary focus
              <select id="mrd-focus" defaultValue="Strength">
                <option>Strength</option>
                <option>Conditioning</option>
                <option>Recovery</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <button className="mrd-btn mrd-btn--solid" type="submit">Book my week <MrdArrow /></button>
          </form>
        </div>
      </section>

      <section className="mrd-cta">
        <div className="mrd-cta-bg">
          <img src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" loading="lazy" />
        </div>
        <div className="mrd-wrap">
          <p className="mrd-kicker mrd-kicker--center">No excuses</p>
          <h2 className="mrd-serif">Show up. <em>The coaching does the rest.</em></h2>
          <p>One trial week. One movement screen. One plan written for you. See why our members stay for years.</p>
          <div className="mrd-cta-actions">
            <a className="mrd-btn mrd-btn--solid" href="#visit">Claim free week <MrdArrow /></a>
            <a className="mrd-btn mrd-btn--outline" href="#facility">Tour the studio</a>
          </div>
        </div>
      </section>

      <footer className="mrd-footer">
        <div className="mrd-wrap">
          <div className="mrd-footer-grid">
            <div className="mrd-footer-brand">
              <a className="mrd-logo" href="#top" aria-label="MERIDIAN home">
                <span className="mrd-logo-mark"><MrdDumbbell /></span>
                <span className="mrd-logo-text">MERIDIAN<i>.</i></span>
              </a>
              <p>Strength and conditioning for people who would rather train well than train often. Come as you are, leave with a practice.</p>
            </div>
            <div>
              <h4>Explore</h4>
              <ul>
                <li><a href="#pillars">Pillars</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#coaches">Coaches</a></li>
                <li><a href="#membership">Membership</a></li>
              </ul>
            </div>
            <div>
              <h4>Visit</h4>
              <ul>
                <li><a href="#visit">12 Foundry Lane, District 9</a></li>
                <li><a href="#visit">Members 24/7</a></li>
                <li><a href="#visit">+1 (555) 014-0012</a></li>
              </ul>
            </div>
          </div>
          <div className="mrd-footer-base">
            <span>© {new Date().getFullYear()} MERIDIAN Athletic Co.</span>
            <span>Train with intent.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
