import React from 'react';
import './JoinUsNow.css';
import joinUsVideo from './assets/pexels_videos_3718 (1080p).mp4'; 

function JoinUsNow() {
  return (
    <div className="join-us-container">
      <div className="join-us-content">
        <div className="join-us-image-container">
          <video autoPlay muted loop className="join-us-image">
            <source src={joinUsVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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