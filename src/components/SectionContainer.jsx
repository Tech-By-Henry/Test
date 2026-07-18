export default function SectionContainer({ id, number, eyebrow, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`case-section ${className}`} aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        <span className="section-number">{number}</span>
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p className="section-intro">{intro}</p>}
        </div>
      </div>
      <div className="section-body">{children}</div>
    </section>
  )
}
