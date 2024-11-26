import React from 'react';

const BrandCategories = () => {
  return (
    <div className='container mx-auto py-6 bg-brand-bg bg-cover bg-center mt-12'>
      <div className='overflow-hidden'>
        <div className='flex gap-6 animate-marquee'>
          <ul className='flex gap-6 font-semibold text-lg'>
            <li
              className='bg-cover bg-center px-8 py-3 rounded-md text-white whitespace-nowrap shadow-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105'
              style={{ backgroundImage: 'url(https://ispot.ru/upload/iblock/bc1/saobzuzubgqblxtx7ycb2hmrjrxhomwh/4_1.jpg)' }}
            >
              Category 1
            </li>
            <li
              className='bg-cover bg-center px-8 py-3 rounded-md text-white whitespace-nowrap shadow-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105'
              style={{ backgroundImage: 'url(https://images.samsung.com/n_africa/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-share-image.jpg)' }}
            >
              Category 2
            </li>
            <li
              className='bg-cover bg-center px-8 py-3 rounded-md text-white whitespace-nowrap shadow-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105'
              style={{ backgroundImage: 'url(https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg)' }}
            >
              Category 3
            </li>
            <li
              className='bg-cover bg-center px-8 py-3 rounded-md text-white whitespace-nowrap shadow-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105'
              style={{ backgroundImage: 'url(https://ispot.ru/upload/iblock/bc1/saobzuzubgqblxtx7ycb2hmrjrxhomwh/4_1.jpg)' }}
            >
              Category 4
            </li>
            <li
              className='bg-cover bg-center px-8 py-3 rounded-md text-white whitespace-nowrap shadow-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105'
              style={{ backgroundImage: 'url(https://images.samsung.com/n_africa/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-share-image.jpg)' }}
            >
              Category 5
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BrandCategories;
