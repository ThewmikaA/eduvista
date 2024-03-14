import React, { useState, useEffect } from 'react';
import image1 from './assets/Machine_Learning.jpg';
import image2 from './assets/shutterstock_520698799small.jpg';
import image3 from './assets/person-holds-a-book-over-a-stack-and-turns-the-page.jpg';   
import './CourseSlideshow.css'; // Import CSS file for slideshow styles

function Slideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup function to clear interval on component unmount
  }, [images.length]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slideshow-container">
      <img src={images[currentImageIndex]} alt="Slideshow" className="slideshow-image" />
      <button className="prev" onClick={handlePrev}>&#10094;</button>
      <button className="next" onClick={handleNext}>&#10095;</button>
    </div>
  );
}

export default Slideshow;
