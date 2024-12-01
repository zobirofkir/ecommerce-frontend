import React, { useState } from 'react';

const CashOnDeliveryComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    country: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order Details:', formData);
    // Handle form submission logic here (e.g., API call)
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Cash on Delivery</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-medium">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-medium">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500"
          />
        </div>

        {/* Postal Code */}
        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-gray-700 font-medium">
            Postal Code
          </label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500"
          />
        </div>

        {/* Country */}
        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700 font-medium">
            Country
          </label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500"
          >
            <option value="">Select a country</option>
            <option value="Morocco">Morocco</option>
            <option value="Algeria">Algeria</option>
            <option value="Tunisia">Tunisia</option>
            <option value="France">France</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CashOnDeliveryComponent;
