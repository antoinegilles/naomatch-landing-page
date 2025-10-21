import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingNaoMatch from './App.jsx'
import RedirectToApp from './pages/RedirectToApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Page principale : ta landing */}
        <Route path="/" element={<LandingNaoMatch />} />

        {/* Page spéciale pour ouvrir l’app ou rediriger vers le store */}
        <Route path="/match" element={<RedirectToApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
