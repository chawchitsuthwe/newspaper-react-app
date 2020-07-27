import React from 'react';
import './Pagination.css'

const Pagination = ({ articlesPerPage, totalResults, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResults / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination justify-content-start'>
        {pageNumbers.map(number => (
          currentPage===number ? 
            <li key={number} className='page-item active'>
              <button onClick={() => paginate(number)} className='page-link'>
                {number}
              </button>
            </li> :
            <li key={number} className='page-item'>
              <button onClick={() => paginate(number)} className='page-link'>
                {number}
              </button>
            </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;