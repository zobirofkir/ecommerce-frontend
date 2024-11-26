import React from 'react';

const categories = [
  {
    title: "Our Categories",
    description: "Semi Description of the Category",
    imageUrl:
      "https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg",  
  },
  {
    title: "Our Categories",
    description: "Semi Description of the Category",
    imageUrl:
      "https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg",  
  },
  {
    title: "Our Categories",
    description: "Semi Description of the Category",
    imageUrl:
      "https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg",  
  },
  {
    title: "Our Categories",
    description: "Semi Description of the Category",
    imageUrl:
      "https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg",  
  },
  {
    title: "Our Categories",
    description: "Semi Description of the Category",
    imageUrl:
      "https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg",  
  },
  {
    title: "Our Categories",
    description: "Semi Description of the Category",
    imageUrl:
      "https://www.cdiscount.com/pdt2/8/8/3/1/1920x800/vib5057551887883/rw/vibox-viii-38-pc-gamer-27-165hz-ecran-pack-in.jpg",  
  },
];

const CategoryScreen = () => {
  return (
    <div className="container mx-auto py-10 md:px-0 px-10">

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Categories</h1>
        <select className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Category 1</option>
          <option>Category 2</option>
          <option>Category 3</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {categories.map((category, index) => (
          <a href="/categories">
            <div className="bg-white rounded-lg shadow-md overflow-hidden" key={index}>
              <img
                    src={category.imageUrl}
                alt="Test Categories"
                className="w-full h-48 object-cover hover:scale-105 transition duration-500 ease-in-out"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {category.title}
                </h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          </a>        
        ))}
      </div>
    </div>
  );
};

export default CategoryScreen;
