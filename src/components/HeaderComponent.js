import React, { useState } from "react";
import logo from '../images/logo/logo.png';

const HeaderComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="px-20 py-2 md:block hidden">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row items-center">
            <p className="md:text-md text-sm">Welcome To World Of E-Commerce</p>
          </div>

          <div className="flex flex-row gap-4">
            <p className="flex flex-row gap-2 font-bold">
              <a href="/">Store L'actors</a>
              <span>
                <i class="fa-solid fa-location-dot"></i>
              </span>
            </p>
            |
            <p className="flex flex-row gap-2 font-bold">
              <a href="/">Track Our Order</a>
              <span>
                <i class="fa-solid fa-truck-fast"></i>
              </span>
            </p>
            |
            <p className="flex flex-row gap-2 font-bold">
              <a href="/">USD</a>
              <span>
                <i class="fa-solid fa-dollar-sign"></i>
              </span>
            </p>
            |
            <div className="flex flex-row gap-4">
              <span>
                <i class="fa-regular fa-user"></i>
              </span>
              <p className="flex flex-row gap-2 font-bold">
                <a href="/">Sign In</a>
              </p>
              |
              <p className="flex flex-row gap-2 font-bold">
                <a href="/">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 
        Create Hr Element
      */}
      <p className="w-full h-[0.5px] bg-gray-200"></p>

      {/**
       * Create Nav bar
       */}

      <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">

              <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-[150px] h-10"/>
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
                  <i className="fa-regular fa-heart text-gray-600 text-xl"></i>
                  <i className="fa-solid fa-cart-shopping text-gray-600 text-xl"></i>
                </div>
              </div>
            </div>

            <div className="hidden lg:block ²">
                <div className="flex justify-center items-center">
                  <ul className="flex gap-4 mt-10 mb-5">
                      <li className="text-gray-800 font-bold text-md hover:text-yellow-400 transition duration-300 ease-out">
                          <a href="/">Home</a>
                      </li>
                      <li className="text-gray-800 font-bold text-md hover:text-yellow-400 transition duration-300 ease-out">
                          <a href="/">Categories</a>
                      </li>
                      <li className="text-gray-800 font-bold text-md hover:text-yellow-400 transition duration-300 ease-out">
                          <a href="/">About</a>
                      </li>
                      <li className="text-gray-800 font-bold text-md hover:text-yellow-400 transition duration-300 ease-out">
                          <a href="/">Contact</a>
                      </li>
                  </ul>
                </div>
              </div>

            {/* Sidebar for Mobile */}
            <div
              className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform ${
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
                    <a href="/">Categories</a>
                  </li>
                  <li className="text-gray-700 hover:text-blue-500">
                    <a href="/">Abouts</a>
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
      </nav>
    </div>
  );
};

export default HeaderComponent;
