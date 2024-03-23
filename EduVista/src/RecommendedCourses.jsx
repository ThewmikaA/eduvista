import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CourseCard from './CourseCard';
import './RecommendedCourses.css';


return (
    <div className="recommended-courses-container">
      <h2 className="recommended-courses-topic">Recommended Courses</h2>
      <Slider {...settings}>
        {recommendedCourses.map((course, index) => (
          <div key={index}>
            <CourseCard
              title={course.course_title}
              level={course.level}
              subject={course.subject}
              numReviews={course.num_reviews}
              numSubscribers={course.num_subscribers}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}