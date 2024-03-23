import React from 'react';
import './Pagination.css'; 

const Pagination = ({ currentPage, totalPages, onPageChange, onPrevious, onNext }) => {
    const renderPagination = () => {
      const paginationButtons = [];


      if (currentPage > 1) {
        paginationButtons.push(
          <button key="previous" onClick={onPrevious}>
            {"<"}
          </button>
        );
      }

      paginationButtons.push(
        <button key={1} onClick={() => onPageChange(1)} className={1 === currentPage ? 'active' : ''}>
          {1}
        </button>
      );

      if (currentPage > 3) {
        paginationButtons.push(<span key="ellipsis-prev">...</span>);
      }

      let startPage, endPage;
      if (currentPage <= 3) {
        startPage = 2; 
        endPage = Math.min(5, totalPages); 
      } else if (currentPage >= totalPages - 2) {
        startPage = Math.max(totalPages - 4, 2); 
        endPage = totalPages - 1; 
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }

      for (let i = startPage; i <= endPage; i++) {
        paginationButtons.push(
          <button key={i} onClick={() => onPageChange(i)} className={i === currentPage ? 'active' : ''}>
            {i}
          </button>
        );
      }

      
      if (currentPage < totalPages - 2) {
        paginationButtons.push(<span key="ellipsis-next">...</span>);
      }

      if (totalPages > 1) {
        paginationButtons.push(
          <button key={totalPages} onClick={() => onPageChange(totalPages)} className={totalPages === currentPage ? 'active' : ''}>
            {totalPages}
          </button>
        );
      }

      paginationButtons.push(
        <button key="next" onClick={onNext} disabled={currentPage === totalPages}>
          {">"}
        </button>
      );

      return paginationButtons;
  };
  
  return <div className="pagination">{renderPagination()}</div>;
};
    


      export default Pagination;