import { StrictMode } from 'react'
import profilePic from './assets/profile.jpg'
import './Profile.css'


function Profile() {
  return (
    <div className="profile-container">
      <div className="intro">
        <h3 className="name">Hello, I'm Santhosh M,</h3>
        <h1 className="role">Software</h1>
        <h1 className="role">Developer</h1>
        <h3 className="email">santhoshmb08@gmail.com</h3>
        <button className="resume">Resume</button>
      </div>

      <div className="imagebox">
        <img className="image" src={profilePic} alt="Santhosh M" />
      </div>
    </div>
  );
}

export default Profile