export function ArrowIcon({ direction = 'right' }) {
  return (
    <svg className={`icon icon--${direction}`} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  )
}

export function CopyIcon() {
  return <svg className="icon" viewBox="0 0 20 20" aria-hidden="true"><rect x="7" y="7" width="9" height="9" rx="2"/><path d="M13 7V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1"/></svg>
}

export function CheckIcon() {
  return <svg className="icon" viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9" /></svg>
}

export function ExternalIcon() {
  return <svg className="icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M11 4h5v5M9 11l7-7M16 11v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4" /></svg>
}

export function ExpandIcon() {
  return <svg className="icon" viewBox="0 0 20 20" aria-hidden="true"><path d="M8 4H4v4M12 4h4v4M8 16H4v-4M12 16h4v-4" /></svg>
}

export function ImageIcon() {
  return <svg className="empty-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m4 17 5-4 3 3 2-2 6 4"/></svg>
}

export function ChevronIcon() {
  return <svg className="icon" viewBox="0 0 20 20" aria-hidden="true"><path d="m6 8 4 4 4-4" /></svg>
}

export function UpIcon() {
  return <svg className="icon" viewBox="0 0 20 20" aria-hidden="true"><path d="m5 12 5-5 5 5" /></svg>
}
