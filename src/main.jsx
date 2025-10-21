import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import LandingNaoMatch from './App.jsx'
import RedirectToApp from './pages/RedirectToApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        {/* Page principale : ta landing */}
        <Route path="/" element={<LandingNaoMatch />} />

        {/* Page spéciale : ouverture de l’app */}
        <Route path="/match" element={<RedirectToApp />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
