// JoinUsNow.jsx

import React from 'react';
import './JoinUsNow.css';
import joinUsImage from './assets/Educational-Websites.png'; 

function JoinUsNow() {
  return (
    <div className="join-us-container">
      <div className="join-us-content">
        <div className="join-us-image-container">
          <img src={joinUsImage} alt="Join Us" className="join-us-image" />
        </div>
        <div className="join-us-text">
          <h1 className="join-us-heading">Join Us Now</h1>
          <p className="join-us-sentence">Unlock exciting opportunities and join our vibrant community of passionate educators and learners today!</p>
          <button className="join-us-button">Become an Edu Vista Partner</button>
        </div>
      </div>
    </div>
  );
}

export default JoinUsNow;
