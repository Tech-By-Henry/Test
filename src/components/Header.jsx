import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/" aria-label="AI Failure and Correction Pairs home">
            <span className="brand-mark" aria-hidden="true"><i /><i /></span>
            <span>AI Failure <em>/</em> Correction</span>
          </Link>
          <nav aria-label="Primary navigation">
            <Link className={pathname === '/' ? 'header-link is-active' : 'header-link'} to="/">
              All case studies
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}
