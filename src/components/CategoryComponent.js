import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryAction } from '../redux/actions/CategoryAction';

const CategoryComponent = () => {
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();
  const { categories: fetchedCategories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(categoryAction());
  }, [dispatch]);

  useEffect(() => {
    if (fetchedCategories) {
      setCategories(fetchedCategories);
    }
  }, [fetchedCategories]);

  return (
    <div className="container mx-auto py-10 md:px-0 px-10">
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Our Categories</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <a href={`/categories/${category.slug}`} key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover hover:scale-105 transition duration-500 ease-in-out"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {category.title}
                </h2>
                <div className='flex justify-between w-full items-center gap-8'>
                  <p className="text-gray-600">{category.description.substring(0, 20)}</p>
                  <p>{category.user_name}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryComponent;
