import React from 'react'

const AllProducts = () => {
const slides = [
    {
        id: 1,
        title: 'Amazing Product 1',
        description: 'Experience the best quality and design.',
        imageUrl: 'https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg',
    },
    {
        id: 2,
        title: 'Incredible Product 2',
        description: 'Innovation and comfort in one package.',
        imageUrl: 'https://ispot.ru/upload/iblock/bc1/saobzuzubgqblxtx7ycb2hmrjrxhomwh/4_1.jpg',
    },
    {
        id: 3,
        title: 'Premium Product 3',
        description: 'Unmatched excellence for your needs.',
        imageUrl: 'https://images.samsung.com/n_africa/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-share-image.jpg',
    },
    {
        id: 1,
        title: 'Amazing Product 1',
        description: 'Experience the best quality and design.',
        imageUrl: 'https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg',
    },
    {
        id: 2,
        title: 'Incredible Product 2',
        description: 'Innovation and comfort in one package.',
        imageUrl: 'https://ispot.ru/upload/iblock/bc1/saobzuzubgqblxtx7ycb2hmrjrxhomwh/4_1.jpg',
    },
    {
        id: 3,
        title: 'Premium Product 3',
        description: 'Unmatched excellence for your needs.',
        imageUrl: 'https://images.samsung.com/n_africa/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-share-image.jpg',
    },
    {
        id: 1,
        title: 'Amazing Product 1',
        description: 'Experience the best quality and design.',
        imageUrl: 'https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg',
    },
    {
        id: 2,
        title: 'Incredible Product 2',
        description: 'Innovation and comfort in one package.',
        imageUrl: 'https://ispot.ru/upload/iblock/bc1/saobzuzubgqblxtx7ycb2hmrjrxhomwh/4_1.jpg',
    },
    {
        id: 3,
        title: 'Premium Product 3',
        description: 'Unmatched excellence for your needs.',
        imageUrl: 'https://images.samsung.com/n_africa/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-share-image.jpg',
    },
    {
        id: 1,
        title: 'Amazing Product 1',
        description: 'Experience the best quality and design.',
        imageUrl: 'https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg',
    },
    {
        id: 2,
        title: 'Incredible Product 2',
        description: 'Innovation and comfort in one package.',
        imageUrl: 'https://ispot.ru/upload/iblock/bc1/saobzuzubgqblxtx7ycb2hmrjrxhomwh/4_1.jpg',
    },
    {
        id: 3,
        title: 'Premium Product 3',
        description: 'Unmatched excellence for your needs.',
        imageUrl: 'https://images.samsung.com/n_africa/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-share-image.jpg',
    },
    {
        id: 1,
        title: 'Amazing Product 1',
        description: 'Experience the best quality and design.',
        imageUrl: 'https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg',
    },
    {
        id: 2,
        title: 'Incredible Product 2',
        description: 'Innovation and comfort in one package.',
        imageUrl: 'https://ispot.ru/upload/iblock/bc1/saobzuzubgqblxtx7ycb2hmrjrxhomwh/4_1.jpg',
    },
    {
        id: 3,
        title: 'Premium Product 3',
        description: 'Unmatched excellence for your needs.',
        imageUrl: 'https://images.samsung.com/n_africa/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-share-image.jpg',
    },
    {
        id: 1,
        title: 'Amazing Product 1',
        description: 'Experience the best quality and design.',
        imageUrl: 'https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg',
    },
    {
        id: 2,
        title: 'Incredible Product 2',
        description: 'Innovation and comfort in one package.',
        imageUrl: 'https://ispot.ru/upload/iblock/bc1/saobzuzubgqblxtx7ycb2hmrjrxhomwh/4_1.jpg',
    },
    {
        id: 3,
        title: 'Premium Product 3',
        description: 'Unmatched excellence for your needs.',
        imageUrl: 'https://images.samsung.com/n_africa/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-share-image.jpg',
    },
    {
        id: 1,
        title: 'Amazing Product 1',
        description: 'Experience the best quality and design.',
        imageUrl: 'https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg',
    },
    {
        id: 2,
        title: 'Incredible Product 2',
        description: 'Innovation and comfort in one package.',
        imageUrl: 'https://ispot.ru/upload/iblock/bc1/saobzuzubgqblxtx7ycb2hmrjrxhomwh/4_1.jpg',
    },
    {
        id: 3,
        title: 'Premium Product 3',
        description: 'Unmatched excellence for your needs.',
        imageUrl: 'https://images.samsung.com/n_africa/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-share-image.jpg',
    },
    {
        id: 1,
        title: 'Amazing Product 1',
        description: 'Experience the best quality and design.',
        imageUrl: 'https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg',
    },
    {
        id: 2,
        title: 'Incredible Product 2',
        description: 'Innovation and comfort in one package.',
        imageUrl: 'https://ispot.ru/upload/iblock/bc1/saobzuzubgqblxtx7ycb2hmrjrxhomwh/4_1.jpg',
    },
    {
        id: 3,
        title: 'Premium Product 3',
        description: 'Unmatched excellence for your needs.',
        imageUrl: 'https://images.samsung.com/n_africa/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-share-image.jpg',
    },
    {
        id: 1,
        title: 'Amazing Product 1',
        description: 'Experience the best quality and design.',
        imageUrl: 'https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg',
    },
    {
        id: 2,
        title: 'Incredible Product 2',
        description: 'Innovation and comfort in one package.',
        imageUrl: 'https://ispot.ru/upload/iblock/bc1/saobzuzubgqblxtx7ycb2hmrjrxhomwh/4_1.jpg',
    },
    {
        id: 3,
        title: 'Premium Product 3',
        description: 'Unmatched excellence for your needs.',
        imageUrl: 'https://images.samsung.com/n_africa/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-share-image.jpg',
    },
    {
        id: 1,
        title: 'Amazing Product 1',
        description: 'Experience the best quality and design.',
        imageUrl: 'https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg',
    },
    {
        id: 2,
        title: 'Incredible Product 2',
        description: 'Innovation and comfort in one package.',
        imageUrl: 'https://ispot.ru/upload/iblock/bc1/saobzuzubgqblxtx7ycb2hmrjrxhomwh/4_1.jpg',
    },
    {
        id: 3,
        title: 'Premium Product 3',
        description: 'Unmatched excellence for your needs.',
        imageUrl: 'https://images.samsung.com/n_africa/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-share-image.jpg',
    },
    {
        id: 1,
        title: 'Amazing Product 1',
        description: 'Experience the best quality and design.',
        imageUrl: 'https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg',
    },
    {
        id: 2,
        title: 'Incredible Product 2',
        description: 'Innovation and comfort in one package.',
        imageUrl: 'https://ispot.ru/upload/iblock/bc1/saobzuzubgqblxtx7ycb2hmrjrxhomwh/4_1.jpg',
    },
    {
        id: 3,
        title: 'Premium Product 3',
        description: 'Unmatched excellence for your needs.',
        imageUrl: 'https://images.samsung.com/n_africa/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-share-image.jpg',
    },
    {
        id: 1,
        title: 'Amazing Product 1',
        description: 'Experience the best quality and design.',
        imageUrl: 'https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg',
    },
    {
        id: 2,
        title: 'Incredible Product 2',
        description: 'Innovation and comfort in one package.',
        imageUrl: 'https://ispot.ru/upload/iblock/bc1/saobzuzubgqblxtx7ycb2hmrjrxhomwh/4_1.jpg',
    },
    {
        id: 3,
        title: 'Premium Product 3',
        description: 'Unmatched excellence for your needs.',
        imageUrl: 'https://images.samsung.com/n_africa/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-share-image.jpg',
    },
    {
        id: 1,
        title: 'Amazing Product 1',
        description: 'Experience the best quality and design.',
        imageUrl: 'https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg',
    },
    {
        id: 2,
        title: 'Incredible Product 2',
        description: 'Innovation and comfort in one package.',
        imageUrl: 'https://ispot.ru/upload/iblock/bc1/saobzuzubgqblxtx7ycb2hmrjrxhomwh/4_1.jpg',
    },
    {
        id: 3,
        title: 'Premium Product 3',
        description: 'Unmatched excellence for your needs.',
        imageUrl: 'https://images.samsung.com/n_africa/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-share-image.jpg',
    },
    {
        id: 3,
        title: 'Premium Product 3',
        description: 'Unmatched excellence for your needs.',
        imageUrl: 'https://images.samsung.com/n_africa/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-share-image.jpg',
    },
];
    
  return (
    <div className='container mx-auto md:px-0 px-6'>
        <div>
            <h1 className='text-3xl font-bold text-gray-900 mb-6 text-center'>All Products</h1>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                {slides.map((slide) => (
                    <div key={slide.id} className='border border-gray-300 p-4 flex md:flex-row flex-col justify-center items-center gap-6'>
                        <h2 className='text-lg font-semibold text-gray-900'>{slide.title}</h2>
                        <img src={slide.imageUrl} alt={slide.title} className='w-32 h-32'/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllProducts