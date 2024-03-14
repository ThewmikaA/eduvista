// MainPage.jsx

import React, { useState } from 'react';
import Header from './CourseHeader.jsx';
import Slideshow from './CourseSlideshow.jsx';
import Card from './CourseCard.jsx';
import FilterCard from './FilterCard.jsx';
import SearchBar from './CourseSearchBar.jsx';
import Carousel from './Carousel.jsx';
import JoinUsNow from './JoinUsNow.jsx'; // Import the JoinUsNow component
import './CourseSearchBar.css';
import './FilterCard.css';
import './CoursePage.css';
import './Carousel.css';

function MainPage() {
  // State to store the filtered type
  const [filteredType, setFilteredType] = useState(null);
  // State to store the current page number
  const [currentPage, setCurrentPage] = useState(1);
  // Number of cards per page
  const cardsPerPage = 30;

  // Function to handle the filter
  const handleFilter = (type) => {
    setFilteredType(type);
  };

  // Dummy data for courses (replace with actual data)
  const courses = Array.from({ length: 900 }, (_, index) => ({
    title: `Course ${index + 1}`,
    description: `Description for Course ${index + 1}`,
    image: `./Course-Description-${index + 1}.jpg`,
  }));

  // Calculate the index of the first and last card to display on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = courses.slice(indexOfFirstCard, indexOfLastCard);

  // Function to handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate pagination buttons dynamically
  const renderPagination = () => {
    const totalPages = Math.ceil(courses.length / cardsPerPage);
    const paginationButtons = [];

    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        paginationButtons.push(
          <button key={i} onClick={() => paginate(i)} className={i === currentPage ? 'active' : ''}>
            {i}
          </button>
        );
      }
    } else {
      if (currentPage <= 2) {
        paginationButtons.push(
          <button key={1} onClick={() => paginate(1)} className={1 === currentPage ? 'active' : ''}>
            1
          </button>
        );
        paginationButtons.push(
          <button key={2} onClick={() => paginate(2)} className={2 === currentPage ? 'active' : ''}>
            2
          </button>
        );
        paginationButtons.push(<span key="ellipsis">...</span>);
        paginationButtons.push(
          <button key={totalPages} onClick={() => paginate(totalPages)} className={totalPages === currentPage ? 'active' : ''}>
            {totalPages}
          </button>
        );
      } else if (currentPage >= totalPages - 1) {
        paginationButtons.push(
          <button key={1} onClick={() => paginate(1)} className={1 === currentPage ? 'active' : ''}>
            1
          </button>
        );
        paginationButtons.push(<span key="ellipsis">...</span>);
        for (let i = totalPages - 1; i <= totalPages; i++) {
          paginationButtons.push(
            <button key={i} onClick={() => paginate(i)} className={i === currentPage ? 'active' : ''}>
              {i}
            </button>
          );
        }
      } else {
        paginationButtons.push(
          <button key={1} onClick={() => paginate(1)}>
            1
          </button>
        );
        paginationButtons.push(<span key="ellipsis">...</span>);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          paginationButtons.push(
            <button key={i} onClick={() => paginate(i)} className={i === currentPage ? 'active' : ''}>
              {i}
            </button>
          );
        }
        paginationButtons.push(<span key="ellipsis">...</span>);
        paginationButtons.push(
          <button key={totalPages} onClick={() => paginate(totalPages)}>
            {totalPages}
          </button>
        );
      }
    }

    return paginationButtons;
  };

  // Render the number of results
  const renderNumberOfResults = () => {
    const totalResults = courses.length;
    return <div>{`${totalResults} results`}</div>;
  };

  return (
    <div>
      <Header />
      <Slideshow />
      <SearchBar />
      <JoinUsNow /> 
      <FilterCard onFilter={handleFilter} />
      <h2 className="section-title">Trending Courses</h2>
      <div className="result-count">{renderNumberOfResults()}</div>
      <div className="cards-container">
        <div className="cards-row">
          {currentCards.map((course, index) => (
            <Card
              key={index}
              title={course.title}
              description={course.description}
              image={course.image}
            />
          ))}
        </div>
      </div>
      <div className="pagination">
        {renderPagination()}
      </div>
    </div>
  );
}

export default MainPage;
