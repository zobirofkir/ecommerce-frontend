import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../../redux/actions/ProductAction';
const SliderComponent = () => {

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(productAction());
  }, [dispatch]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % products.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${product.images.split(",")[0].trim()})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            objectFit: 'contain',
          }}
        >
          <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center text-center text-white p-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">{product.title}</h1>
            <p className="text-sm md:text-lg">{product.description.substring(0, 20)}...</p>
          </div>
        </div>
      ))}

      {/* 
        Dots navigation
      */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
