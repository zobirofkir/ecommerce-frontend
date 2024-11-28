import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productInfoAction } from '../redux/actions/ProductInfoAction';
import { customers } from '../tests/CustomerTest';
import { features } from '../tests/FeatureTest';

const ProductInfoComponent = () => {

  const { slug } = useParams(); 
  const dispatch = useDispatch();

  const { productInfo, error } = useSelector((state) => state.productInfo); 
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (slug) {
      dispatch(productInfoAction(slug)); 
    }
  }, [dispatch, slug]);

  const handleQuantityChange = (change) => {
    if (quantity + change >= 1) {
      setQuantity(quantity + change);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!productInfo) {
    return <div>Loading...</div>;
  }

  const product = productInfo;

  // Ensure images is an array, split by commas if it's a string
  const images = Array.isArray(product.images) ? product.images : product.images.split(',');

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md my-12">
      <div className="flex flex-col lg:flex-row gap-8">

        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Product Images</h2>
          <div className="relative">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                onClick={() => setSelectedImage(images[0])}
              />
            ) : (
              <img
                src={images[0]}
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            )}
          </div>
          <div className="flex mt-4 gap-2 overflow-x-auto">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product thumbnail ${index}`}
                className="w-24 h-24 object-cover rounded-lg shadow cursor-pointer hover:opacity-80"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-lg text-gray-600 mt-4">{product.description}</p>
          <div className="text-3xl font-bold text-gray-600 mt-6">{product.price}</div>

          <div className="mt-4">
            <div className="flex gap-2 items-center">
              <button
                className="bg-gray-400 text-gray-800 px-4 py-1 rounded-l-lg"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <input
                type="text"
                readOnly
                value={quantity}
                className="w-12 h-8 text-center border border-gray-300"
              />
              <button
                className="bg-gray-400 text-gray-800 px-4 py-1 rounded-r-lg"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
            <button className="mt-4 w-full bg-gray-500 text-white font-bold py-3 rounded-lg hover:bg-gray-600 transition">
              Add to Cart
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {features && features.map((feature, index) => (
                <li key={index}>{feature.description}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Customer Reviews</h2>
        {customers.reviews && customers.reviews.map((review, index) => (
          <div key={index} className="flex items-start gap-4 mb-4">
            <img
              src={review.avatar}
              alt={`${review.user} avatar`}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">{review.user}</span>
                <span className="text-gray-500">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </span>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfoComponent;
