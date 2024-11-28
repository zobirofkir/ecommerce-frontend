import React, { useState, useEffect, useMemo, useCallback } from 'react';

const OfferComponent = () => {
  const saleDuration = 30; 
  const additionalHours = 10;
  
  const offers = useMemo(() => [
    {
      title: "30% off on all products",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      startDate: '2024/11/10'
    }, 
    {
      title: "30% off on all products",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      startDate: '2024/11/10'
    }, 
    {
      title: "30% off on all products",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      startDate: '2024/11/10'
    }, 
    {
      title: "30% off on all products",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      startDate: '2024/11/10'
    }, 
    {
      title: "30% off on all products",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      startDate: '2024/11/10'
    }, 
  ], []); 

  const calculateRemainingTime = useCallback((saleStartDate) => {
    const now = new Date();
    const startDate = new Date(saleStartDate);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + saleDuration);
    endDate.setHours(endDate.getHours() + additionalHours);

    const differenceInTime = endDate - now;

    if (differenceInTime <= 0) {
      return null;
    }

    const hours = Math.floor((differenceInTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((differenceInTime / (1000 * 60)) % 60);
    const seconds = Math.floor((differenceInTime / 1000) % 60);

    return {
      hours: hours < 10 ? `0${hours}` : hours,
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      seconds: seconds < 10 ? `0${seconds}` : seconds,
    };
  }, [saleDuration, additionalHours]);

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimeLeft = offers.reduce((acc, offer) => {
        const remainingTime = calculateRemainingTime(offer.startDate);
        acc[offer.startDate] = remainingTime;
        return acc;
      }, {});
      setTimeLeft(updatedTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateRemainingTime, offers]);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Flushed Sales <span className="text-red-600">🔥</span>
          </h1>
        </div>

        {/* Product Cards */}
        <div className="flex justify-center gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg max-w-sm overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h1 className="text-2xl font-semibold text-gray-800">
                  {offer.title}
                </h1>
                <h3 className="text-gray-600 mt-2">
                  Time left:{" "}
                  <span className="font-medium">
                    {timeLeft[offer.startDate]?.hours || "00"}h : {timeLeft[offer.startDate]?.minutes || "00"}m : {timeLeft[offer.startDate]?.seconds || "00"}s
                  </span>
                </h3>
                <h3 className="text-gray-900 mt-4 cursor-pointer hover:underline">
                  See more
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferComponent;
