import React, { useState } from "react";
import "./CourseCard.css"; 
import CourseDetails from "./CourseDetails"; 

import webDevelopmentImage from "./assets/Unknown-2.jpeg";
import musicalInstrumentsImage from "./assets/Unknown-3.jpeg";
import graphicDesignImage from "./assets/Unknown-4.jpeg";
import businessFinanceImage from "./assets/Unknown-5.jpeg";

function CourseCard({ title, price, level, subject, numReviews, numSubscribers }) {

  let imageSrc;
  switch (subject) {
    case "Web Development":
      imageSrc = webDevelopmentImage;
      break;
    case "Musical Instruments":
      imageSrc = musicalInstrumentsImage;
      break;
    case "Graphic Design":
      imageSrc = graphicDesignImage;
      break;
    case "Business Finance":
      imageSrc = businessFinanceImage;
      break;
    default:
      imageSrc = null; 
  }

  const displayPrice = price === 0 ? "Free" : `$${price}`;

  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card-container" onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
      <div className="image-container">
        <img src={imageSrc} alt="course" />
        
      </div>
      <div className="details-container">
        <h2 className="course-title">{title}</h2>
        <div className="details">
          <p className="price">Price: {displayPrice}</p>
          <p className="level">Level: {level}</p>
          {numSubscribers > 1000 && <div className="best-seller-tag">Best Sellers</div>}
        </div>

        {showDetails && (
          <CourseDetails
            title={title}
            price={displayPrice}
            level={level}
            numReviews={numReviews}
            numSubscribers={numSubscribers}
          />
        )}
      </div>
    </div>
  );
}

export default CourseCard;
