import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/gym.css'
import {
  DumbbellIcon,
  BarbellIcon,
  KettlebellIcon,
  HeartPulseIcon,
  StretchIcon,
  TrophyIcon,
  ClockIcon,
  ShieldIcon,
  BoltIcon,
  ArrowRightIcon,
  CheckIcon,
  MapPinIcon,
} from '../components/GymIcons'

const programs = [
  {
    icon: <BarbellIcon />,
    title: 'Raw Strength',
    copy: 'Barbell-focused programming built on the squat, bench, deadlift and press. Progressive overload, coached technique, real numbers.',
    img: '/images/gym/strength.png',
  },
  {
    icon: <HeartPulseIcon />,
    title: 'Conditioning',
    copy: 'High-output engine work — sleds, ropes, intervals and carries designed to build a gas tank that never quits.',
    img: '/images/gym/conditioning.png',
  },
  {
    icon: <StretchIcon />,
    title: 'Mobility & Recovery',
    copy: 'Structured mobility, soft-tissue and recovery protocols so you train hard, move well and stay in the game longer.',
    img: '/images/gym/recovery.png',
  },
]

const features = [
  { icon: <DumbbellIcon />, title: 'Competition-grade iron', copy: 'Calibrated plates, power racks and specialty bars — everything you need to move serious weight.' },
  { icon: <TrophyIcon />, title: 'Coached programming', copy: 'Every member gets a plan with intent. No wandering, no guesswork, measurable progress.' },
  { icon: <ClockIcon />, title: 'Open 24 / 7', copy: 'Early grind or late session — the doors are open when you are ready to work.' },
  { icon: <KettlebellIcon />, title: 'Small-group energy', copy: 'Train alongside people chasing the same standard. Accountability built in.' },
]

const coaches = [
  { name: 'Marcus Reyes', role: 'Head Strength Coach', copy: 'Fifteen years under the bar and a decade coaching platform lifters to national meets.', img: '/images/gym/coach.png' },
  { name: 'Dana Whitlock', role: 'Performance Coach', copy: 'Former collegiate athlete specialising in conditioning and return-to-sport work.', img: '/images/gym/conditioning.png' },
  { name: 'Theo Adeyemi', role: 'Mobility Specialist', copy: 'Keeps heavy lifters healthy with movement screening and recovery programming.', img: '/images/gym/recovery.png' },
]

const plans = [
  {
    name: 'Access',
    price: '39',
    unit: '/ month',
    desc: 'Full-facility access on your own schedule.',
    features: ['24/7 gym access', 'All strength & cardio floors', 'Locker + shower access', 'Member training app'],
    cta: 'Start now',
    featured: false,
  },
  {
    name: 'Performance',
    price: '89',
    unit: '/ month',
    desc: 'Coaching and programming to move real numbers.',
    features: ['Everything in Access', 'Personalised programming', '2 small-group sessions / week', 'Monthly progress testing', 'Recovery zone access'],
    cta: 'Join Performance',
    featured: true,
  },
  {
    name: 'Elite',
    price: '149',
    unit: '/ month',
    desc: 'One-on-one coaching for serious goals.',
    features: ['Everything in Performance', 'Weekly 1:1 coaching', 'Custom nutrition guidance', 'Priority class booking'],
    cta: 'Go Elite',
    featured: false,
  },
]

export default function GymPage() {
  useEffect(() => {
    document.title = 'APEX Athletic — Strength & Performance Gym'
  }, [])

  return (
    <div className="apex-page">
      <header className="apex-topbar">
        <div className="apex-wrap apex-topbar-inner">
          <a className="apex-logo" href="#top" aria-label="APEX Athletic home">
            <span className="apex-logo-mark">A</span>
            <span className="apex-logo-text">APEX<span>.</span></span>
          </a>
          <nav className="apex-topnav" aria-label="Gym navigation">
            <a href="#programs">Programs</a>
            <a href="#facility">Facility</a>
            <a href="#coaches">Coaches</a>
            <a href="#membership">Membership</a>
          </nav>
          <div className="apex-topbar-actions">
            <Link className="apex-topbar-back" to="/ai/v0">View stats / analysis</Link>
            <a className="apex-btn apex-btn--solid" href="#membership">Join now</a>
          </div>
        </div>
      </header>

      <section className="apex-hero" id="top">
        <div className="apex-hero-bg">
          <img src="/images/gym/hero.png" alt="Athlete performing a heavy barbell deadlift in a dark industrial gym" />
        </div>
        <div className="apex-wrap apex-hero-inner">
          <p className="apex-kicker">Strength · Conditioning · Performance</p>
          <h1 className="apex-display">
            Forge your <em>apex</em>
          </h1>
          <p className="apex-hero-lede">
            A no-nonsense strength and performance gym built for people who show up to work. Real iron, real coaching, real results.
          </p>
          <div className="apex-hero-actions">
            <a className="apex-btn apex-btn--solid" href="#membership">
              Start training <ArrowRightIcon />
            </a>
            <a className="apex-btn apex-btn--ghost" href="#programs">
              View programs
            </a>
          </div>

          <dl className="apex-hero-stats">
            <div>
              <dt><span>12</span>k</dt>
              <dd>Sq ft of training floor</dd>
            </div>
            <div>
              <dt>24/<span>7</span></dt>
              <dd>Member access</dd>
            </div>
            <div>
              <dt>18<span>+</span></dt>
              <dd>Certified coaches</dd>
            </div>
            <div>
              <dt><span>3</span>k</dt>
              <dd>Members strong</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="apex-marquee" aria-hidden="true">
        <div className="apex-marquee-track">
          <span>Train hard</span><span>Lift heavy</span><span>Stay consistent</span><span>No shortcuts</span>
          <span>Train hard</span><span>Lift heavy</span><span>Stay consistent</span><span>No shortcuts</span>
        </div>
      </div>

      <section className="apex-section" id="programs">
        <div className="apex-wrap">
          <div className="apex-section-head">
            <p className="apex-kicker">What we train</p>
            <h2 className="apex-display">Programs built to <em>move you forward</em></h2>
            <p>Three pillars, one standard. Choose your focus or blend all three — every path is coached and progressive.</p>
          </div>
          <div className="apex-programs">
            {programs.map((p, i) => (
              <article className="apex-program" key={p.title}>
                <div className="apex-program-media">
                  <img src={p.img || '/placeholder.svg'} alt="" />
                </div>
                <span className="apex-program-num">0{i + 1}</span>
                <div className="apex-program-body">
                  <span className="apex-program-icon">{p.icon}</span>
                  <h3>{p.title}</h3>
                  <p>{p.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="apex-section apex-section--alt">
        <div className="apex-wrap">
          <div className="apex-section-head">
            <p className="apex-kicker">Why APEX</p>
            <h2 className="apex-display">Everything you need, <em>nothing you don&apos;t</em></h2>
          </div>
          <div className="apex-features">
            {features.map((f) => (
              <div className="apex-feature" key={f.title}>
                {f.icon}
                <h3>{f.title}</h3>
                <p>{f.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="apex-section" id="facility">
        <div className="apex-wrap apex-split">
          <div className="apex-split-media">
            <img src="/images/gym/facility.png" alt="Interior of the APEX Athletic training facility with power racks and dumbbells" />
          </div>
          <div>
            <p className="apex-kicker">The facility</p>
            <h2 className="apex-display">A room built to <em>put in work</em></h2>
            <ul className="apex-checklist">
              <li><BoltIcon /> Dedicated platforms for Olympic lifting and deadlifts.</li>
              <li><ShieldIcon /> Full range of power racks, calibrated plates and specialty bars.</li>
              <li><HeartPulseIcon /> Turf sprint lane, sleds and a full conditioning zone.</li>
              <li><StretchIcon /> Recovery suite with mobility tools and soft-tissue stations.</li>
            </ul>
            <div className="apex-hero-actions">
              <a className="apex-btn apex-btn--solid" href="#membership">Book a tour <ArrowRightIcon /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="apex-section apex-section--alt" id="coaches">
        <div className="apex-wrap">
          <div className="apex-section-head">
            <p className="apex-kicker">The team</p>
            <h2 className="apex-display">Coaches who <em>train with you</em></h2>
            <p>Certified, experienced and invested in your progress. You&apos;ll never train alone.</p>
          </div>
          <div className="apex-coaches">
            {coaches.map((c) => (
              <article className="apex-coach" key={c.name}>
                <div className="apex-coach-media">
                  <img src={c.img || '/placeholder.svg'} alt={`${c.name}, ${c.role} at APEX Athletic`} />
                </div>
                <div className="apex-coach-body">
                  <h3>{c.name}</h3>
                  <p className="apex-coach-role">{c.role}</p>
                  <p>{c.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="apex-section" id="membership">
        <div className="apex-wrap">
          <div className="apex-section-head">
            <p className="apex-kicker">Membership</p>
            <h2 className="apex-display">Pick your <em>level</em></h2>
            <p>No lock-in contracts. Cancel or change anytime. Every membership includes a free intro session.</p>
          </div>
          <div className="apex-plans">
            {plans.map((plan) => (
              <div className={plan.featured ? 'apex-plan apex-plan--featured' : 'apex-plan'} key={plan.name}>
                {plan.featured && <span className="apex-plan-tag">Most popular</span>}
                <h3>{plan.name}</h3>
                <div className="apex-plan-price">
                  <strong>${plan.price}</strong>
                  <span>{plan.unit}</span>
                </div>
                <p className="apex-plan-desc">{plan.desc}</p>
                <ul>
                  {plan.features.map((feat) => (
                    <li key={feat}><CheckIcon /> {feat}</li>
                  ))}
                </ul>
                <a className={plan.featured ? 'apex-btn apex-btn--solid' : 'apex-btn apex-btn--ghost'} href="#top">
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="apex-cta">
        <div className="apex-cta-bg">
          <img src="/images/gym/conditioning.png" alt="" />
        </div>
        <div className="apex-wrap">
          <p className="apex-kicker" style={{ justifyContent: 'center' }}>No excuses</p>
          <h2 className="apex-display">Your first session is <em>on us</em></h2>
          <p>Walk in, meet a coach, move some weight. See why APEX athletes keep coming back.</p>
          <div className="apex-cta-actions">
            <a className="apex-btn apex-btn--solid" href="#membership">Claim free session <ArrowRightIcon /></a>
            <a className="apex-btn apex-btn--ghost" href="#facility">Tour the gym</a>
          </div>
        </div>
      </section>

      <footer className="apex-footer">
        <div className="apex-wrap">
          <div className="apex-footer-grid">
            <div>
              <a className="apex-logo" href="#top" aria-label="APEX Athletic home">
                <span className="apex-logo-mark">A</span>
                <span className="apex-logo-text">APEX<span>.</span></span>
              </a>
              <p>Strength and performance training for people who take their goals seriously. Come as you are, leave stronger.</p>
            </div>
            <div>
              <h4>Visit</h4>
              <ul>
                <li><MapPinIcon /> 240 Foundry Street, Unit 4</li>
                <li><ClockIcon /> Open 24 hours, 7 days</li>
              </ul>
            </div>
            <div>
              <h4>Explore</h4>
              <ul>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#coaches">Coaches</a></li>
                <li><a href="#membership">Membership</a></li>
              </ul>
            </div>
          </div>
          <div className="apex-footer-base">
            <p>© {new Date().getFullYear()} APEX Athletic. All rights reserved.</p>
            <p>Built strong.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
