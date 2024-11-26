import React from 'react';

const NavCategory = () => {
  return (
    <div className='container mx-auto py-6'>
      <div className='overflow-hidden'>
        <div className='flex gap-6 animate-marquee'>
          <ul className='flex gap-6 font-semibold text-lg'>
            <li className='bg-gray-200 px-8 py-2 rounded-md text-gray-700 whitespace-nowrap shadow-lg hover:bg-gray-300 transition-colors duration-300'>
              Category 1
            </li>
            <li className='bg-gray-200 px-8 py-2 rounded-md text-gray-700 whitespace-nowrap shadow-lg hover:bg-gray-300 transition-colors duration-300'>
              Category 2
            </li>
            <li className='bg-gray-200 px-8 py-2 rounded-md text-gray-700 whitespace-nowrap shadow-lg hover:bg-gray-300 transition-colors duration-300'>
              Category 3
            </li>
            <li className='bg-gray-200 px-8 py-2 rounded-md text-gray-700 whitespace-nowrap shadow-lg hover:bg-gray-300 transition-colors duration-300'>
              Category 4
            </li>
            <li className='bg-gray-200 px-8 py-2 rounded-md text-gray-700 whitespace-nowrap shadow-lg hover:bg-gray-300 transition-colors duration-300'>
              Category 5
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavCategory;
