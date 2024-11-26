import React from 'react'

const LastProducts = () => {
  // Example array of products
  const products = [
    {
      id: 1,
      title: 'Product Title 1',
      description: 'Short description of the product that highlights key features and benefits.',
      price: 29.99,
      imageUrl: 'https://images.samsung.com/n_africa/smartphones/galaxy-s24-ultra/images/galaxy-s24-ultra-share-image.jpg',
      badge: 'New',
    },
    {
      id: 2,
      title: 'Product Title 2',
      description: 'Another product description with great features and details.',
      price: 19.99,
      imageUrl: 'https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg',
      badge: 'Sale',
    },
    {
      id: 3,
      title: 'Product Title 3',
      description: 'This is another amazing product that you will love.',
      price: 49.99,
      imageUrl: 'https://ispot.ru/upload/iblock/bc1/saobzuzubgqblxtx7ycb2hmrjrxhomwh/4_1.jpg',
      badge: 'New',
    },

  ]

  return (
    <div className="container mx-auto p-6">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Explore Our Latest Products</h2>
        <p className="text-xl text-gray-600">Discover the best deals on the latest arrivals. Shop now and enjoy exclusive offers!</p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map(product => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transform hover:scale-105 transition duration-300">
            <div className="relative">
              
              <a href='/'>
                <img src={product.imageUrl} alt={product.title} className="w-full h-56 object-cover rounded-md mb-4"/>
              </a>

              <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs font-semibold py-1 px-3 rounded-full">
                {product.badge}
              </span>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>

            <p className="text-sm text-gray-600 mb-4">{product.description}</p>

            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">${product.price}</span>
              <div className="flex space-x-4">
                <button className="text-gray-600 hover:text-gray-800">
                  <i className="fas fa-cart-plus"></i>
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LastProducts
