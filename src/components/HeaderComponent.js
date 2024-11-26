import React, { useState } from "react";
import logo from '../images/logo/logo.png';

const HeaderComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="px-20 py-2 bg-gray-100 text-sm md:block hidden">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row items-center">
            <p className="text-gray-700">Welcome To World Of E-Commerce</p>
          </div>

          <div className="flex flex-row gap-4">
            <p className="flex flex-row gap-2 font-semibold hover:text-yellow-400 transition duration-300 ease-out">
              <a href="/">Store L'actors</a>
              <span><i className="fa-solid fa-location-dot"></i></span>
            </p>
            |
            <p className="flex flex-row gap-2 font-semibold hover:text-yellow-400 transition duration-300 ease-out">
              <a href="/">Track Our Order</a>
              <span><i className="fa-solid fa-truck-fast"></i></span>
            </p>
            |
            <p className="flex flex-row gap-2 font-semibold hover:text-yellow-400 transition duration-300 ease-out">
              <a href="/">USD</a>
              <span><i className="fa-solid fa-dollar-sign"></i></span>
            </p>
            |
            <div className="flex flex-row gap-4">
              <span><i className="fa-regular fa-user"></i></span>
              <p className="flex flex-row gap-2 font-semibold hover:text-yellow-400 transition duration-300 ease-out">
                <a href="/login">Sign In</a>
              </p>
              |
              <p className="flex flex-row gap-2 font-semibold hover:text-yellow-400 transition duration-300 ease-out">
                <a href="/register">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <p className="w-full h-[1px] bg-gray-200"></p>

      {/* Main Navbar */}
      <nav className="bg-white shadow-lg block w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">

          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <img src={logo} alt="Logo" className="w-[150px] h-10"/>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              className="text-gray-500 focus:outline-none"
              onClick={toggleSidebar}
            >
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>

          {/* Main Menu */}
          <div className="hidden lg:flex justify-between w-full items-center">
            {/* Search Bar */}
            <div className="flex justify-center w-full">
              <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
                <input
                  type="text"
                  placeholder="Search ..."
                  className="bg-transparent outline-none pl-2 text-sm"
                />
                <select className="bg-transparent outline-none ml-2 text-sm">
                  <option value="All">Categories</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                </select>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <a href="/wishlists">
                <i className="fa-regular fa-heart text-gray-600 text-xl"></i>
              </a>
              <a href="/carts">
                <i className="fa-solid fa-cart-shopping text-gray-600 text-xl"></i> 
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 z-50 h-full bg-white shadow-lg transform transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">Menu</h3>
          <button onClick={toggleSidebar} className="text-gray-500">
            <i className="fa-solid fa-times text-xl"></i>
          </button>
        </div>
        <div className="p-4">
          <input
            type="text"
            placeholder="Search ..."
            className="w-full bg-gray-100 rounded-lg px-4 py-2 text-sm mb-4"
          />
          <ul className="space-y-4">
            <li className="text-gray-700 hover:text-blue-500">
              <a href="/">Home</a>
            </li>
            <li className="text-gray-700 hover:text-blue-500">
              <a href="/categories">Categories</a>
            </li>
            <li className="text-gray-700 hover:text-blue-500">
              <a href="/products">Products</a>
            </li>
            <li className="text-gray-700 hover:text-blue-500">
              <a href="/">Contact</a>
            </li>

            <select className="w-full bg-gray-100 rounded-lg px-4 py-2 text-sm mb-4 text-gray-700">
              <option value="All">Categories</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </ul>
        </div>
      </div>

      <div className="hidden lg:block z-50 relative fixed top-0 left-0 w-full bg-gray-100">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center">
            <select className="w-[200px] bg-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700">
              <option value="All">Last Products</option>
              <option value="lenovo">Lenovo ThinkBook G2</option>
              <option value="iphone">Iphone 14</option>
              <option value="samsung">Samsung S23</option>
            </select>
          </div>
          
          <div className="flex items-center w-full justify-center">
            <ul className="flex gap-8 mt-5 mb-5">
              <li className="text-gray-900 font-semibold text-md hover:text-gray-950 transition duration-300 ease-out transform hover:scale-105">
                <a href="/">Home</a>
              </li>
              <li className="text-gray-900 font-semibold text-md hover:text-gray-950 transition duration-300 ease-out transform hover:scale-105">
                <a href="/categories">Categories</a>
              </li>
              <li className="text-gray-900 font-semibold text-md hover:text-gray-950 transition duration-300 ease-out transform hover:scale-105">
                <a href="/products">Products</a>
              </li>
              <li className="text-gray-900 font-semibold text-md hover:text-gray-950 transition duration-300 ease-out transform hover:scale-105">
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <a href="/">
              <p className="text-gray-900 font-semibold text-md whitespace-nowrap">
                Free shipping on orders over $100
              </p>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeaderComponent;
