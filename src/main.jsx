import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Profile from './Profile'
import About from './about'
import Work from './work'
import Contact from './contact' 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Profile />
      <About />
      <Work />
      <Contact />
    </>
  </StrictMode>,
)
