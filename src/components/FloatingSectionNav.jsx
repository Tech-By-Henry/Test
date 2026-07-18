import { useMemo } from 'react'
import useActiveSection from '../hooks/useActiveSection'

export default function FloatingSectionNav({ sections }) {
  const ids = useMemo(() => sections.map((section) => section.id), [sections])
  const activeId = useActiveSection(ids)

  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="section-nav" aria-label="Case study sections">
      <div className="section-nav-label">On this page</div>
      <ol>
        {sections.map((section, index) => (
          <li key={section.id}>
            <button
              type="button"
              className={activeId === section.id ? 'is-active' : ''}
              aria-current={activeId === section.id ? 'location' : undefined}
              onClick={() => navigate(section.id)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>{section.label}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  )
}
