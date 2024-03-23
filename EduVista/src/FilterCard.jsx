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
  
function FilterCard({ type, onFilter }) {
  return (
    <div className="filter-card">
      <h2>Filter by Courses</h2>
      <div className="buttons-container">
        <div className="button-group">
          <button onClick={() => onFilter('Advanced Diploma')}><img src="icon1.png" alt="Icon 1" /> Advanced Diploma</button>
          <button onClick={() => onFilter('Bachelors Degree')}><img src="icon2.png" alt="Icon 2" /> Bachelors Degree</button>
          <button onClick={() => onFilter('Certificate Level')}><img src="icon3.png" alt="Icon 3" /> Certificate Level</button>
          <button onClick={() => onFilter('Diploma Level')}><img src="icon4.png" alt="Icon 4" /> Diploma Level</button>
          <button onClick={() => onFilter('Doctorate')}><img src="icon5.png" alt="Icon 5" /> Doctorate</button>
        </div>
        <div className="button-group">
          <button onClick={() => onFilter('Foundation Level')}><img src="icon6.png" alt="Icon 6" /> Foundation Level</button>
          <button onClick={() => onFilter('Masters Degree')}><img src="icon7.png" alt="Icon 7" /> Masters Degree</button>
          <button onClick={() => onFilter('Post Graduate Degree')}><img src="icon8.png" alt="Icon 8" /> Post Graduate Degree</button>
          <button onClick={() => onFilter('Post Graduate Diploma')}><img src="icon9.png" alt="Icon 9" /> Post Graduate Diploma</button>
          <button onClick={() => onFilter('Training')}><img src="icon10.png" alt="Icon 10" /> Training</button>
        </div>
      </div>
    </div>
  );
}

export default FilterCard;
