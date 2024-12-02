import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { offerAction } from '../../redux/actions/OfferAction';

const OfferComponent = () => {
  const dispatch = useDispatch();
  const { offers } = useSelector(state => state.offer);

  useEffect(() => {
    dispatch(offerAction());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Flushed Sales <span className="text-red-600">🔥</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">Don't miss out on exclusive offers, grab them before they're gone!</p>
        <div className="mt-8">
          <button className="bg-red-600 text-white px-6 py-3 text-lg font-semibold rounded-lg hover:bg-red-700 transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Featured Offers Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Featured Offers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {offers.length > 0 ? (
            offers.map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <img
                  src={offer.images}
                  alt={offer.title}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{offer.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{offer.description}</p>
                  <a
                    href="/offers"
                    className="text-indigo-600 mt-4 inline-block text-sm hover:underline font-medium"
                  >
                    See more
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-lg text-gray-500 col-span-full">No offers available at the moment.</p>
          )}
        </div>
      </div>


    </div>
  );
};

export default OfferComponent;
