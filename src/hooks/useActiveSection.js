import { useEffect, useState } from 'react'

export default function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const updateActiveSection = () => {
      const headerOffset = window.matchMedia('(max-width: 860px)').matches ? 132 : 96
      const currentLine = window.scrollY + headerOffset
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean)

      const current = sections.reduce((active, section) => {
        if (section.offsetTop <= currentLine) return section
        return active
      }, sections[0])

      if (current) setActiveId(current.id)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [sectionIds])

  return activeId
}
