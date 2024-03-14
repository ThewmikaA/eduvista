// Carousel.jsx

import React from 'react';
import Card from './CourseCard.jsx'; // Import the Card component

function Carousel({ cards }) {
  return (
    <div className="carousel-container">
      <h2 className="section-title">Trending Courses</h2> {/* Updated title */}
      {/* Carousel implementation */}
      <div className="carousel">
        {cards.map((course, index) => (
          <Card
            key={index}
            title={course.title}
            description={course.description}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
