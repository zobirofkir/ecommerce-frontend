import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import categoryProductAction from "../../redux/actions/CategoryProductAction";
import { useParams } from "react-router-dom";

const CategoryProductComponent = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.categoryProductReducer); 

  useEffect(() => {
    if (slug) {
      dispatch(categoryProductAction(slug));
    }
  }, [dispatch, slug]);

  return (
    <div className="container mx-auto p-6">
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Featured Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {loading ? (
            <p>Loading products...</p>
          ) : products.length > 0 ? ( 
            products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <div className="relative">
                  <a href={`/products/${product.slug}`}>
                    <img
                      src={product.images.split(",")[0].trim()}
                      alt={product.title}
                      className="w-full h-56 object-cover rounded-md hover:rotate-[10deg] transition duration-500 mb-4"
                    />
                  </a>
                  <span className="absolute top-2 left-2 bg-yellow-600 text-white text-xs font-semibold py-1 px-3 rounded-full">
                    New
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {product.description.substring(0, 20)}...
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    {product.price}
                  </span>
                  <div className="flex space-x-4">
                    <button className="text-gray-600 hover:text-gray-800">
                      <i className="fas fa-cart-plus"></i>
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      <i className="fas fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryProductComponent;
