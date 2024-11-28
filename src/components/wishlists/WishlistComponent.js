import React from 'react';

const likedProducts = [
  {
    id: 1,
    name: 'Gaming PC',
    price: 1200,
    imageUrl:
      'https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg',
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    price: 200,
    imageUrl:
      'https://ispot.ru/upload/iblock/bc1/saobzuzubgqblxtx7ycb2hmrjrxhomwh/4_1.jpg',
  },
  {
    id: 3,
    name: 'Gaming Chair',
    price: 300,
    imageUrl:
      'https://images.samsung.com/n_africa/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-share-image.jpg',
  },
];

const WishlistComponent = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-0">

      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Liked Products</h1>
        <p className="text-gray-600 mt-2">
          These are the products you've shown some love to. ❤️
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {likedProducts.length > 0 ? (
          likedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-lg font-bold text-gray-800">${product.price}</p>
                <button className="mt-2 w-full bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-700 transition">
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center">
            <p className="text-gray-600">You haven't liked any products yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistComponent;
