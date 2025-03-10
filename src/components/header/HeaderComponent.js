import React, { useEffect, useState } from "react";
import logo from '../../images/logo/logo.png';
import { useDispatch, useSelector } from "react-redux";
import { categoryAction } from "../../redux/actions/CategoryAction";
import { productAction } from "../../redux/actions/ProductAction";
import { getProfile } from "../../redux/actions/ProfileAction";

const HeaderComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state.product);
  const { profile } = useSelector((state) => state.profile);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const token = localStorage.getItem("accessToken");

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/";
  };

  useEffect(() => {
    dispatch(categoryAction());
    dispatch(productAction());
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = (products || []).filter((product) =>
        product?.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm, products]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

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
              {token ? (
                <p className="flex flex-row gap-2 font-semibold hover:text-yellow-400 transition duration-300 ease-out">
                  <a href="/profile">Profile</a>
                </p>
              ) : (
                <>
                  <p className="flex flex-row gap-2 font-semibold hover:text-yellow-400 transition duration-300 ease-out">
                    <a href="/login">Sign In</a>
                  </p>
                  |
                  <p className="flex flex-row gap-2 font-semibold hover:text-yellow-400 transition duration-300 ease-out">
                    <a href="/register">Sign Up</a>
                  </p>
                </>
              )}
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

                <div className="flex flex-col items-center relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search products..."
                    className="bg-gray-100 rounded-full px-3 py-2 text-sm w-80 outline-none"
                    aria-label="Search Products"
                  />

                  {searchTerm && (
                    <ul
                      className="absolute bg-white shadow-lg w-full mt-2 rounded-lg z-[999] mt-[40px]"
                      role="listbox"
                    >
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                          <div className="flex flex-row justify-between items-center hover:bg-gray-200 cursor-pointer" 
                            onClick={() =>
                              (window.location.href = `/products/${product.slug}`)
                            }
                          >
                            <img
                              src={product.images.split(",")[0].trim()}
                              alt={product.title}
                              className="w-10 h-10 object-cover hover:scale-105 transition-transform duration-500"
                            />

                            <li
                              key={product.id}
                              className="px-3 py-2"
                              role="option"
                              aria-selected="false"
                            >
                              {product.title.substring(0, 5)} ...
                            </li>
                          </div>
                        ))
                      ) : (
                        <li className="px-3 py-2 text-gray-500" role="alert">
                          No results found
                        </li>
                      )}
                    </ul>
                  )}
                </div>

                <select
                  className="bg-transparent outline-none ml-2 text-sm"
                  defaultValue=""
                  onChange={(e) => {
                    const selectedCategory = categories.find(
                      (category) => category.title === e.target.value
                    );
                    if (selectedCategory) {
                      window.location.href = `/categories/${selectedCategory.slug}/products`;
                    }
                  }}
                  aria-label="Category Selector"
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
              <a href="/wishlists" aria-label="Wishlist">
                <i className="fa-regular fa-heart text-gray-600 text-xl"></i>
              </a>
              <a href="/carts" aria-label="Cart">
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

        {/* Profile Image Section */}
        {token && profile?.image && (
          <div className="flex justify-center items-center p-4 border-b bg-gray-100">
            <a href="/profile">
              <img
                src={profile.image}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
            </a>
          </div>
        )}

        <div className="p-4">
          <input
            type="text"
            placeholder="Search ..."
            onChange={handleSearchChange}
            className="w-full bg-gray-100 rounded-lg px-4 py-2 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="lg:hidden">
            {searchTerm && (
                    <ul
                      className="absolute bg-white shadow-lg w-full rounded-lg z-[999] mt-[30px] mr-20 gap-2"
                      role="listbox"
                    >
                      {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                          <div className="flex flex-row justify-between items-center hover:bg-gray-200 cursor-pointer" 
                            onClick={() =>
                              (window.location.href = `/products/${product.slug}`)
                            }
                          >
                            <img
                              src={product.images.split(",")[0].trim()}
                              alt={product.title}
                              className="w-10 h-10 object-cover hover:scale-105 transition-transform duration-500"
                            />

                            <li
                              key={product.id}
                              className="px-3 py-2"
                              role="option"
                              aria-selected="false"
                            >
                              {product.title.substring(0, 5)} ...
                            </li>
                          </div>
                        ))
                      ) : (
                        <li className="px-3 py-2 text-gray-500" role="alert">
                          No results found
                        </li>
                      )}
                    </ul>
            )}
          </div>
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
            {!token ? (
              <>
                <li>
                  <a href="/contacts" className="flex items-center gap-3 hover:text-blue-500 transition">
                    <i className="fa-solid fa-envelope text-gray-600"></i>
                    Contact
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="/orders" className="flex items-center gap-3 hover:text-blue-500 transition">
                    <i className="fa-solid fa-user text-gray-600"></i>
                    Orders
                  </a>
                </li>
              </>
            )}
            {!token && (
              <>
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
              </>
            )}
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
              </li>
              <li className="group text-gray-900 font-semibold text-md hover:text-gray-950 transition duration-300 ease-out transform hover:scale-105">
                <a href="/categories" className="block py-2 px-4">Categories</a>
              </li>
              <li className="group text-gray-900 font-semibold text-md hover:text-gray-950 transition duration-300 ease-out transform hover:scale-105">
                <a href="/products" className="block py-2 px-4">Products</a>
              </li>
              <li className="group text-gray-900 font-semibold text-md hover:text-gray-950 transition duration-300 ease-out transform hover:scale-105">
                <a href="/offers" className="block py-2 px-4">Offers</a>
              </li>
              {!token ? (
                <>
                  <li className="group text-gray-900 font-semibold text-md hover:text-gray-950 transition duration-300 ease-out transform hover:scale-105">
                    <a href="/contacts" className="block py-2 px-4">Contact</a>
                  </li>
                </>
              ) : (
                <>
                  <li className="group text-gray-900 font-semibold text-md hover:text-gray-950 transition duration-300 ease-out transform hover:scale-105">
                    <a href="/orders" className="block py-2 px-4">Orders</a>
                  </li>
                </>
              )}
            </ul>
          </div>

          {token ? (
            <div className="relative">
              <div
                className="flex items-center gap-3 w-10 h-10 cursor-pointer"
                onClick={() => setDropdownVisible(!dropdownVisible)}
              >
                <img
                  className="w-10 h-10 rounded-full object-cover border border-gray-300"
                  src={profile?.image}
                  alt={profile?.name || "Profile"}
                />
              </div>
              {dropdownVisible && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                  <ul className="py-2">
                    <li>
                      <a
                        href="/profile"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center mx-4"
                      >
                        <i className="fas fa-user-circle mr-2"></i> Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block px-4 py-2 text-red-600 hover:bg-red-100 flex items-center rounded-md mx-4"
                        onClick={handleLogout}
                      >
                        <i className="fas fa-sign-out-alt mr-2"></i> Logout
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center">
              <a href="/">
                <p className="text-gray-900 font-semibold text-sm md:text-md whitespace-nowrap">
                  Free shipping on orders over MAD 100
                </p>
              </a>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default HeaderComponent;
