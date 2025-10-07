import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingNaoMatch from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingNaoMatch />
  </StrictMode>,
)
