import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productInfoAction } from "../../redux/actions/ProductInfoAction";
import { customers } from "../../tests/CustomerTest";
import { features } from "../../tests/FeatureTest";
import visa from "../../images/payments/visa.png";
import mastercard from "../../images/payments/mastercard.png";
import paypal from "../../images/payments/paypal.png";
import cash from "../../images/payments/cash.png";
import { addCartAction } from "../../redux/actions/CartAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductInfoComponent = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const { productInfo, error } = useSelector((state) => state.productInfo);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (slug) {
      dispatch(productInfoAction(slug));
    }
  }, [dispatch, slug]);

  useEffect(() => {
    if (productInfo?.title) {
      document.title = productInfo.title;
    }
  }, [productInfo]);

  const handleQuantityChange = (change) => {
    if (quantity + change >= 1) {
      setQuantity(quantity + change);
    }
  };

  const images = useMemo(() => {
    return Array.isArray(productInfo?.images)
      ? productInfo?.images
      : productInfo?.images?.split(",");
  }, [productInfo?.images]);

  const addToCart = () => {
    const cartItem = { ...productInfo, quantity };
    dispatch(addCartAction(cartItem));
    toast.success("Product added to cart!");
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!productInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md my-12">
      <ToastContainer />
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
            Product Images
          </h2>
          <div className="relative">
            <img
              src={selectedImage || images[0]}
              alt={productInfo.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(images[0])}
            />
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
          <h1 className="text-4xl font-bold text-gray-900">{productInfo.title}</h1>
          <p className="text-lg text-gray-600 mt-4">{productInfo.description}</p>
          <div className="text-3xl font-bold text-gray-600 mt-6">
            MAD {productInfo.price}
          </div>

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
            {token ? (
              <button
                className="mt-4 w-[50%] bg-gray-500 text-white font-bold py-3 rounded-lg hover:bg-gray-600 transition"
                onClick={addToCart}
              >
                Add to Cart
              </button>
            ) : (
              <a href="/login">
                <button className="mt-4 w-[50%] bg-gray-500 text-white font-bold py-3 rounded-lg hover:bg-gray-600 transition">
                  Login to add to cart
                </button>
              </a>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Key Features
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {features?.map((feature, index) => (
                <li key={index}>{feature.description}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Payments Methods Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payments Methods</h2>
        <div className="flex gap-4 justify-center">
          {[visa, mastercard, paypal, cash].map((paymentMethod, index) => (
            <div key={index} className="w-12 h-12">
              <img
                src={paymentMethod}
                alt={paymentMethod}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Customer Reviews</h2>
        {customers.reviews?.map((review, index) => (
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
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
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
