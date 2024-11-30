import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartAction,
  deleteCartAction,
  updateCartAction,
} from "../../redux/actions/CartAction";
import { cartPaymentAction } from "../../redux/actions/payments/StripePaymentAction";

const CartComponent = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const token = localStorage.getItem("accessToken");

  // State for controlling the payment modal and loading state
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [loading, setLoading] = useState(false); // Added loading state

  useEffect(() => {
    if (token) {
      dispatch(getCartAction());
    }
  }, [dispatch, token]);

  const totalPrice = cartItems.reduce((acc, item) => {
    if (item.product && item.product.price) {
      return acc + item.product.price * item.quantity;
    }
    return acc;
  }, 0);

  const handlePaymentSelection = (paymentMethod) => {
    setShowPaymentModal(false);
    setLoading(true); // Set loading to true when payment is selected

    if (paymentMethod === "visa") {
      dispatch(cartPaymentAction(token)).finally(() => {
        setLoading(false); // Set loading to false after payment is processed
      });
    } else if (paymentMethod === "cash") {
      console.log("Cash on Delivery Selected");
      setLoading(false); // Set loading to false if cash on delivery is selected
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteCartAction(id));
  };

  const handleQuantityChange = (item, increment = true) => {
    const updatedItem = {
      ...item,
      quantity: increment ? item.quantity + 1 : item.quantity - 1,
    };
    dispatch(updateCartAction(updatedItem));
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-0">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
        <p className="text-gray-600 mt-2">
          Review your selected items before checkout.
        </p>
      </div>

      <div className="bg-gray-100 rounded-lg shadow-lg p-6">
        {cartItems.length > 0 ? (
          cartItems.map(
            (item) =>
              item.product && (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm mb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.product.images.split(",")[0].trim()}
                      alt={item.product.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="ml-4">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.product.title}
                      </h2>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuantityChange(item, false)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          -
                        </button>
                        <p className="text-md text-gray-600">{item.quantity}</p>
                        <button
                          onClick={() => handleQuantityChange(item)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-800">
                      MAD {item.product.price * item.quantity}
                    </p>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-sm text-red-500 hover:text-red-700 mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )
          )
        ) : (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        )}
      </div>

      <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Total Price:</h2>
          <p className="text-xl font-bold text-gray-800">MAD {totalPrice}</p>
        </div>
        <div className="mt-4 text-center">
          {token ? (
            <button
              className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition"
              onClick={() => setShowPaymentModal(true)}
            >
              {loading ? "Processing..." : "Proceed to Checkout"} {/* Show processing message */}
            </button>
          ) : (
            <a href="/login">
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition">
                Login to checkout
              </button>
            </a>
          )}
        </div>
      </div>

      {/* Payment Method Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
            >
              <i className="fas fa-times text-xl"></i>
            </button>

            <h2 className="text-2xl font-bold text-gray-700 mb-6 flex items-center justify-center">
              <i className="fas fa-credit-card mr-2 text-gray-500"></i>
              Select Payment Method
            </h2>

            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handlePaymentSelection("visa")}
                className="flex items-center justify-center bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-500 transition"
              >
                <i className="fas fa-credit-card mr-2"></i>
                Pay with Visa
              </button>

              <button
                onClick={() => handlePaymentSelection("cash")}
                className="flex items-center justify-center bg-white text-black px-6 py-3 rounded-lg shadow-md hover:bg-white transition"
              >
                <i className="fas fa-money-bill-wave mr-2"></i>
                Cash on Delivery
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
