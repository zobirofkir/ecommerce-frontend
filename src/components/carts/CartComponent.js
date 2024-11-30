import React, { useEffect } from "react";
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

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      dispatch(getCartAction());
    }
  }, [dispatch]);

  const totalPrice = cartItems.reduce((acc, item) => {
    if (item.product && item.product.price) {
      return acc + item.product.price * item.quantity;
    }
    return acc;
  }, 0);

  const handlePayment = () => {
    dispatch(cartPaymentAction(token));
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
              onClick={handlePayment}
            >
              Proceed to Checkout
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
    </div>
  );
};

export default CartComponent;
