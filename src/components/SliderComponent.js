import React, { useState, useEffect } from 'react';

const SliderComponent = () => {
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
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.imageUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            objectFit: 'contain',
          }}
        >
          <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center text-center text-white p-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h1>
            <p className="text-sm md:text-lg">{slide.description}</p>
          </div>
        </div>
      ))}

      {/* 
        Dots navigation
      */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
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
