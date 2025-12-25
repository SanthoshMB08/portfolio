import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Profile from './Profile'
import About from './about'
import Work from './work'
import Contact from './contact' 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <> <header> 
      <center><nav><a href='#profile'>Home</a> 
      <a href='#about'>About</a>
      <a href='#work'>Work</a>
      <a href='#contact'>Contact</a></nav></center>
    </header>``
      <div id='profile' className='profile'><Profile /></div>
      <div id='about' className='about'><About /></div>
      <div id='work' className='work'><Work /></div>
      <div id='contact' className='contact'><Contact /></div>
    </>
  </StrictMode>,
)
