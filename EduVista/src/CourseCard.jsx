import React from "react";
import "./CourseCard.css"; // Import Card.css separately

function Card({ title, description, image }) {
  return (
    <div className="card-container">
      <div className="img1">
        <img src={image} alt="course image" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="button-container">
        <button>Browse</button>
      </div>
    </div>
  );
}

export default Card;
