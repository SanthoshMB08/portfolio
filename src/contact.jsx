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
        <a href="https://www.linkedin.com/in/santhosh-m-86724035a/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={linkedin} alt="LinkedIn"></img>
        </a>
        <a href="https://github.com/SanthoshMB08" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={github} alt="GitHub"></img>
        </a>
        <a href="https://leetcode.com/u/santhoshmb84/" target="_blank" rel="noopener noreferrer" className="social-icon">
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