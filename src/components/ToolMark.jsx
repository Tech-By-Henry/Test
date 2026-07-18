export default function ToolMark({ study, size = 'medium' }) {
  return (
    <span
      className={`tool-mark tool-mark--${size}`}
      style={{ '--tool-accent': study.accent }}
      aria-hidden="true"
    >
      {study.monogram}
    </span>
  )
}
