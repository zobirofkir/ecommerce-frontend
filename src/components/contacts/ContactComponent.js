import React from 'react';

const ContactComponent = () => {
  return (
    <div className="bg-gray-50 min-h-screen container mx-auto flex justify-center items-center py-12 px-4">
      <div className="w-full max-w-7xl bg-white shadow-xl rounded-lg p-8 flex flex-col md:flex-row gap-8">

        {/* Contact Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h2>
          <p className="text-gray-600 text-center mb-8">
            Have a question or feedback? We're here to help!
          </p>
          <form>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Map */}
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6070788132065!2d144.95746931669886!3d-37.81233487975129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5e47e81a1d%3A0xd7ec6be2e06d8a0a!2sMelbourne%20Museum!5e0!3m2!1sen!2sau!4v1635450048255!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default ContactComponent;
