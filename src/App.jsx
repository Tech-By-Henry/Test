import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CaseStudyPage from './pages/CaseStudyPage'
import GeneratedSitePage from './pages/GeneratedSitePage'
import NotFoundPage from './pages/NotFoundPage'

function RouteEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <div className="app-shell">
      <RouteEffects />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/site/:slug" element={<GeneratedSitePage />} />
          <Route path="/ai/:slug" element={<CaseStudyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
