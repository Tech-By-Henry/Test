import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CaseStudyPage from './pages/CaseStudyPage'
import GymPage from './pages/GymPage'
import NotFoundPage from './pages/NotFoundPage'

function RouteEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  const { pathname } = useLocation()
  // The gym page is a fully self-contained, immersive layout with its own
  // header and footer, so we hide the project chrome on that route.
  const isImmersive = pathname === '/gym'

  return (
    <div className="app-shell">
      <RouteEffects />
      {!isImmersive && <Header />}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai/:slug" element={<CaseStudyPage />} />
          <Route path="/gym" element={<GymPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!isImmersive && <Footer />}
    </div>
  )
}
