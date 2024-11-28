import React, { useEffect, useState } from "react";
import logo from '../../images/logo/logo.png';
import { useDispatch, useSelector } from "react-redux";
import { categoryAction } from "../../redux/actions/CategoryAction";
import { productAction } from "../../redux/actions/ProductAction";

const HeaderComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(categoryAction());
    dispatch(productAction());
  }, [dispatch]);

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
                <select
                  className="bg-transparent outline-none ml-2 text-sm"
                  defaultValue=""
                  onChange={(e) =>
                    window.location.href = `/categories/${categories.find(category => category.title === e.target.value)?.slug}/products`
                  }
                >
                  <option value="" disabled>
                    Categories
                  </option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.title}>
                      {category.title}
                    </option>
                  ))}
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

        <div className="flex justify-between items-center p-4 border-b bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-800">Menu</h3>
          <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700 transition">
            <i className="fa-solid fa-times text-xl"></i>
          </button>
        </div>


        <div className="p-4">
          <input
            type="text"
            placeholder="Search ..."
            className="w-full bg-gray-100 rounded-lg px-4 py-2 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <nav className="p-4 space-y-4">
          <ul className="space-y-4 text-gray-700">
            <li>
              <a href="/" className="flex items-center gap-3 hover:text-blue-500 transition">
                <i className="fa-solid fa-house text-gray-600"></i>
                Home
              </a>
            </li>
            <li>
              <a href="/categories" className="flex items-center gap-3 hover:text-blue-500 transition">
                <i className="fa-solid fa-list text-gray-600"></i>
                Categories
              </a>
            </li>
            <li>
              <a href="/products" className="flex items-center gap-3 hover:text-blue-500 transition">
                <i className="fa-solid fa-box text-gray-600"></i>
                Products
              </a>
            </li>
            <li>
              <a href="/carts" className="flex items-center gap-3 hover:text-blue-500 transition">
                <i className="fa-solid fa-cart-shopping text-gray-600"></i>
                Carts
              </a>
            </li>
            <li>
              <a href="/wishlists" className="flex items-center gap-3 hover:text-blue-500 transition">
                <i className="fa-regular fa-heart text-gray-600"></i>
                Wishlists
              </a>
            </li>
            <li>
              <a href="/contacts" className="flex items-center gap-3 hover:text-blue-500 transition">
                <i className="fa-solid fa-envelope text-gray-600"></i>
                Contact
              </a>
            </li>
            <li>
              <a href="/login" className="flex items-center gap-3 hover:text-blue-500 transition">
                <i className="fa-solid fa-sign-in-alt text-gray-600"></i>
                Login
              </a>
            </li>
            <li>
              <a href="/register" className="flex items-center gap-3 hover:text-blue-500 transition">
                <i className="fa-solid fa-user-plus text-gray-600"></i>
                Register
              </a>
            </li>
          </ul>

          {/* Categories Dropdown */}
          <div className="pt-4">
            <select
              className="w-full bg-gray-100 rounded-lg px-4 py-2 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue=""
              onChange={(e) =>
                window.location.href = `/categories/${categories.find(category => category.title === e.target.value)?.slug}/products`
              }
              >
              <option value="">Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.title}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
        </nav>
      </div>

      <div className="hidden lg:block z-50 relative fixed top-0 left-0 w-full bg-gray-100">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center">
          <select
            className="w-[200px] bg-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700"
            onChange={(e) => {
              const product = products.find(p => p.title === e.target.value);
              product && (window.location.href = `/products/${product.slug}`);
            }}
          >
            <option value="">Last Products</option>
            {products.map(product => (
              <option key={product.id} value={product.title}>
                {product.title}
              </option>
            ))}
          </select>
          </div>
          
          <div className="flex items-center w-full justify-center">
            <ul className="flex gap-8 mt-5 mb-5 list-none p-0">
              <li className="group text-gray-900 font-semibold text-md hover:text-gray-950 transition duration-300 ease-out transform hover:scale-105">
                <a href="/" className="block py-2 px-4">Home</a>
                <span className="absolute left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300 ease-out"></span>
              </li>
              <li className="group text-gray-900 font-semibold text-md hover:text-gray-950 transition duration-300 ease-out transform hover:scale-105">
                <a href="/categories" className="block py-2 px-4">Categories</a>
                <span className="absolute left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300 ease-out"></span>
              </li>
              <li className="group text-gray-900 font-semibold text-md hover:text-gray-950 transition duration-300 ease-out transform hover:scale-105">
                <a href="/products" className="block py-2 px-4">Products</a>
                <span className="absolute left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300 ease-out"></span>
              </li>
              <li className="group text-gray-900 font-semibold text-md hover:text-gray-950 transition duration-300 ease-out transform hover:scale-105">
                <a href="/contacts" className="block py-2 px-4">Contact</a>
                <span className="absolute left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300 ease-out"></span>
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
