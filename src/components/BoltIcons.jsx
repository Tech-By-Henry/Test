function Icon({ children, className = 'mrd-icon' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {children}
    </svg>
  )
}

const S = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function MrdDumbbell() {
  return (
    <Icon>
      <path d="M6.5 9.5v5M9.5 7v10M14.5 7v10M17.5 9.5v5M9.5 12h5" {...S} />
      <path d="M5.5 9.5h2M5.5 14.5h2M16.5 9.5h2M16.5 14.5h2" {...S} />
    </Icon>
  )
}

export function MrdPlate() {
  return (
    <Icon>
      <circle cx="12" cy="12" r="8" {...S} />
      <circle cx="12" cy="12" r="3.2" {...S} />
      <path d="M12 4v3.8M12 16.2V20" {...S} />
    </Icon>
  )
}

export function MrdBolt() {
  return (
    <Icon>
      <path d="M13 3 5.5 13.5H11l-1 7.5 7.5-10.5H12l1-7.5Z" {...S} />
    </Icon>
  )
}

export function MrdTarget() {
  return (
    <Icon>
      <circle cx="12" cy="12" r="8" {...S} />
      <circle cx="12" cy="12" r="4.4" {...S} />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </Icon>
  )
}

export function MrdHeart() {
  return (
    <Icon>
      <path d="M12 20s-7-4.5-7-9.5A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.5c0 5-7 9.5-7 9.5Z" {...S} />
      <path d="M8.5 12.5h2l1.2-2.5 1.6 5 1.2-2.5h2" {...S} />
    </Icon>
  )
}

export function MrdLeaf() {
  return (
    <Icon>
      <path d="M5 19c0-7 5-12 14-12 0 9-5 14-12 14" {...S} />
      <path d="M5 19c3-5 6-7 10-8.5" {...S} />
    </Icon>
  )
}

export function MrdClock() {
  return (
    <Icon>
      <circle cx="12" cy="12" r="8" {...S} />
      <path d="M12 8v4.2l2.8 1.8" {...S} />
    </Icon>
  )
}

export function MrdPin() {
  return (
    <Icon>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" {...S} />
      <circle cx="12" cy="10" r="2.4" {...S} />
    </Icon>
  )
}

export function MrdPhone() {
  return (
    <Icon>
      <path d="M7 4h3l1.5 4-2 1.4a11 11 0 0 0 5 5l1.4-2 4 1.5V18a2 2 0 0 1-2.2 2A16 16 0 0 1 5 6.2 2 2 0 0 1 7 4Z" {...S} />
    </Icon>
  )
}

export function MrdArrow() {
  return (
    <Icon className="mrd-icon mrd-icon--arrow">
      <path d="M5 12h13M12.5 6.5 18 12l-5.5 5.5" {...S} />
    </Icon>
  )
}

export function MrdCheck() {
  return (
    <Icon>
      <path d="m5 12 4 4 10-10" {...S} />
    </Icon>
  )
}

export function MrdStar() {
  return (
    <Icon>
      <path d="m12 4 2.4 5.2L20 10l-4 4 1 5.6L12 17l-5 2.6L8 14 4 10l5.6-.8L12 4Z" {...S} />
    </Icon>
  )
}

export function MrdQuote() {
  return (
    <Icon className="mrd-icon mrd-icon--quote">
      <path d="M10 7c-3 1-5 3.5-5 7v3h5v-5H7.5c0-2 1-3.5 3-4.2L10 7ZM20 7c-3 1-5 3.5-5 7v3h5v-5h-2.5c0-2 1-3.5 3-4.2L20 7Z" fill="currentColor" stroke="none" />
    </Icon>
  )
}
