import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/ProductAction';

const LastProductsComponent = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  const [lastTenProducts, setLastTenProducts] = useState([]);

  useEffect(() => {
    dispatch(productAction());
  }, [dispatch]);

  useEffect(() => {
    setLastTenProducts(products.slice(-10));
  }, [products]);

  
  return (
    <div className="container mx-auto p-6">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Explore Our Latest Products</h2>
        <p className="text-xl text-gray-600">Discover the best deals on the latest arrivals. Shop now and enjoy exclusive offers!</p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {lastTenProducts.map(product => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transform hover:scale-105 transition duration-300">
            <div className="relative">
              
              <a href={`/products/${product.slug}`}>
                <img src={product.images.split(',')[0].trim()} alt={product.title} className="w-full h-56 object-cover rounded-md mb-4"/>
              </a>

              <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs font-semibold py-1 px-3 rounded-full">
                New
              </span>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>

            <p className="text-sm text-gray-600 mb-4">{product.description.substring(0, 20)}...</p>

            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">{product.price}</span>
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

export default LastProductsComponent
