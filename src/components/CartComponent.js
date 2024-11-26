import React from 'react';

const cartItems = [
  {
    id: 1,
    name: 'Gaming PC',
    price: 1200,
    quantity: 1,
    imageUrl:
      'https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg',
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    price: 200,
    quantity: 2,
    imageUrl:
      'https://m.media-amazon.com/images/I/71r0oxp2XQL._AC_SL1500_.jpg',
  },
];

const CartComponent = () => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-10 px-4 md:px-0">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
        <p className="text-gray-600 mt-2">Review your selected items before checkout.</p>
      </div>

      {/* Cart Items */}
      <div className="bg-gray-100 rounded-lg shadow-lg p-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm mb-4"
            >
              <div className="flex items-center">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-800">${item.price * item.quantity}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        )}
      </div>

      {/* Total Price */}
      <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Total Price:</h2>
          <p className="text-xl font-bold text-gray-800">${totalPrice}</p>
        </div>
        <div className="mt-4 text-center">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
