import React from 'react';
import './CourseSearchBar.css';

function SearchBar() {
  const handleSearch = () => {
    // Code to handle search functionality will be added later
    console.log('Search button clicked');
  };

  return (
    <div className="search-container">
      <h1 className="headline">Expand your horizons and skillset with our cutting-edge educational content.</h1>
      <div className="search-wrapper">
      <input
  type="text"
  className="search-input"
  placeholder="Search for a course..." // Placeholder text added
/>

        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
