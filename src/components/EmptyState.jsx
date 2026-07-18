import { ImageIcon } from './Icons'

export default function EmptyState({ label }) {
  return (
    <div className="image-empty-state" role="img" aria-label={label}>
      <div className="empty-grid" aria-hidden="true" />
      <ImageIcon />
      <strong>{label}</strong>
      <span>Replace this placeholder from the central data file</span>
    </div>
  )
}
