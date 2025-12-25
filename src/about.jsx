import { StrictMode } from 'react'
import './about.css'

function About() {  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-header">
          <h1 className="about-title">about</h1>
          <p className="about-description">Motivated and detail-oriented BCA graduate passionate about software development,<br/> backend engineering, and DevOps. 
            Seeking a Software Developer / Developer Trainee role <br/>
            where I can apply my skills in Java, Python, DevOps workflows, and cloud-based CI/CD practices.</p>
        </div>
        <ul className="skills-list">
          <li className="skill-item">
            <h2 className="skill-title">Education</h2>
            <p className="skill-description">Bachelor of Computer Applications (BCA)<br/> 
              Bengaluru City University — 2022–2025 (Completed)<br/>
              cgpa : - 8.21</p>
          </li>
          <li className="skill-item">
            <h2 className="skill-title">Experience</h2>
            <p className="skill-description"><strong>Software Developer Trainee — Determinent Studios (Feb 2025 – Jul 2025)</strong><br/>
              • Developed an LLM-based billing API using Python & FastAPI. <br/>
              • Integrated LLaMA for natural language processing workflows. <br/>
              • Implemented PDF invoice generation and MongoDB storage. <br/>
              • Improved backend performance and collaborated on system design.</p>
          </li>
          <li className="skill-item">
            <h2 className="skill-title">Technical Skills</h2>
            <p className="skill-description">Programming Languages: Java, Python, JavaScript (Node.js, React)<br/> 
              Web Technologies: HTML, CSS, React.js, Node.js, REST APIs <br/>
              DevOps Skills (Beginner - Microsoft Learn Certified):<br/>
              • Git & GitHub basics <br/>
              • CI/CD pipelines fundamentals <br/>
              • YAML workflows <br/>
              • DevOps project lifecycle <br/>
              • Agile, Scrum, Kanban boards <br/>
              • Basics of cloud deployment & monitoring <br/>
              Database & Tools: MySQL, Git, VS Code Core  <br/>
              Competencies: DSA, OOP, Problem Solving</p>
          </li>
        </ul>
      </div>
    </div>)}
export default About