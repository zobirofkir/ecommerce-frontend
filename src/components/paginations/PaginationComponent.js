import React from 'react'

const PaginationComponent = ({ totalOrders, ordersPerPage, paginate, currentPage }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalOrders / ordersPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
    <nav>
      <ul className="flex justify-center space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 text-sm rounded-lg border ${
                currentPage === number
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100 hover:text-gray-800'
              } transition-all duration-300 shadow-sm`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
  
export default PaginationComponent