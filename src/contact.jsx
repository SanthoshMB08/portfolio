import { StrictMode } from 'react'
import './contact.css'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import leetcode from './assets/leetcode.png'

function contact() {  return (
    <div className="contact-section">
      <div className="contact-header">
        <h1 className="contact-title">Contact.</h1>
      </div>
      <div className="social-links">
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={linkedin} alt="LinkedIn"></img>
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={github} alt="GitHub"></img>
        </a>
        <a href="https://leetcode.com/your-username" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={leetcode} alt="LeetCode"></img>
        </a>
      </div>
      <div className="contact-info">
        <p className="contact-text">Feel free to reach out!</p>
        <p className="contact-text">
          Email: <a href="mailto:santhoshmb08@gmail.com" className="contact-link">santhoshmb08@gmail.com</a>
        </p>
      </div>
    </div>)}
export default contact