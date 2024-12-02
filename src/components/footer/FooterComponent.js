import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-12 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-800">csw-ecommerce</h2>
          <p className="text-sm text-gray-600 mt-2">© {new Date().getFullYear()} csw-ecommerce. All rights reserved.</p>
        </div>


        <div className="flex space-x-10">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Shop</h3>
            <ul className="text-sm text-gray-600 mt-2 space-y-2">
              <li><a href="/products" className="hover:text-blue-500">Products</a></li>
              <li><a href="/categories" className="hover:text-blue-500">Categories</a></li>
              <li><a href="/offers" className="hover:text-blue-500">Offers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Our Info</h3>
            <ul className="text-sm text-gray-600 mt-2 space-y-2">
              <li><a href="/contacts" className="hover:text-blue-500">Contact</a></li>
              <li><a href="/wishlists" className="hover:text-blue-500">Whislist</a></li>
            </ul>
          </div>
        </div>


        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/" className="text-gray-600 hover:text-blue-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/" className="text-gray-600 hover:text-blue-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" className="text-gray-600 hover:text-blue-500">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>


      <div className="text-center mt-8 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} csw-ecommerce. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FooterComponent;
