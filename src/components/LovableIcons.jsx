function Icon({ children, className = '' }) {
  return (
    <svg className={`iron-icon ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      {children}
    </svg>
  )
}

export function IronDumbbellIcon({ className }) {
  return <Icon className={className}><path d="M6.5 6.5v11M3.5 9v6M17.5 6.5v11M20.5 9v6M6.5 12h11" /></Icon>
}

export function IronFlameIcon({ className }) {
  return <Icon className={className}><path d="M12 22c4 0 7-3 7-7 0-3-1.5-5.5-4.5-8.5.2 2.7-1 4.2-2.2 5.1.1-3.8-1.7-6.6-4.3-9.1.2 4-3 6.5-3 11.5 0 4.4 3.1 8 7 8Z" /><path d="M9.5 18.5c0-2 1-3.2 2.5-4.7.2 1.4.8 2.1 1.7 2.9.5.5.8 1.1.8 1.8a2.5 2.5 0 0 1-5 0Z" /></Icon>
}

export function IronZapIcon({ className }) {
  return <Icon className={className}><path d="m13 2-9 12h8l-1 8 9-12h-8l1-8Z" /></Icon>
}

export function IronTimerIcon({ className }) {
  return <Icon className={className}><path d="M10 2h4M12 14l3-3M8 4h8" /><circle cx="12" cy="14" r="8" /></Icon>
}

export function IronArrowIcon({ className }) {
  return <Icon className={className}><path d="M7 17 17 7M7 7h10v10" /></Icon>
}

export function IronMapPinIcon({ className }) {
  return <Icon className={className}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></Icon>
}

export function IronClockIcon({ className }) {
  return <Icon className={className}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Icon>
}

export function IronPhoneIcon({ className }) {
  return <Icon className={className}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" /></Icon>
}
