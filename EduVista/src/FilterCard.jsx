// FilterCard.jsx
import React from 'react';

function FilterCard({ 
  subjectFilter, 
  filterBySubject, 
  clearSubjectFilter, 
  levelFilter, 
  filterByLevel, 
  clearLevelFilter,
  numReviewsFilter,
  filterByNumReviews,
  clearNumReviewsFilter
}) {
  const [showSubjects, setShowSubjects] = useState(false);
  const [showLevels, setShowLevels] = useState(false);
  const [showNumReviews, setShowNumReviews] = useState(false);

  const toggleSubjects = () => {
    setShowSubjects(!showSubjects);
  };

  const toggleLevels = () => {
    setShowLevels(!showLevels);
  };

  const toggleNumReviews = () => {
    setShowNumReviews(!showNumReviews);
  };


  return (
    
  )
    


export default FilterCard;
