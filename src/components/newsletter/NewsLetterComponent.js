import React from 'react'

const NewsLetterComponent = () => {
  return (
    <div>
      {/* Newsletter Section */}
      <div className='container mx-auto px-10 md:px-0'>
        <div className="bg-white text-gray-800 shadow-lg rounded-lg py-12 mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">Stay Updated with Our Latest Offers!</h2>
            <p className="text-lg mb-8 text-gray-600">Subscribe to our newsletter and never miss an offer again.</p>
            <div className="flex md:flex-row flex-col gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 w-80 rounded-l-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button className="bg-gray-800 text-white px-6 py-2 text-lg font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 ml-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetterComponent
