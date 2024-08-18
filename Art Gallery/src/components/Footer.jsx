import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12 w-full">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        
        {/* Left Section - Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 w-full md:w-auto">
          <div>
            <h5 className="font-semibold">Shop</h5>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-900">Prints</a></li>
              <li><a href="#" className="hover:text-gray-900">Originals</a></li>
              <li><a href="#" className="hover:text-gray-900">Art Objects</a></li>
              <li><a href="#" className="hover:text-gray-900">Gift Cards</a></li>
              <li><a href="#" className="hover:text-gray-900">Search</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-semibold">Info</h5>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-900">Our Story</a></li>
              <li><a href="#" className="hover:text-gray-900">Journal</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Center Section - Subscribe */}
        <div className="flex flex-col space-y-4 w-full md:w-auto">
          <h5 className="font-semibold">Subscribe to our emails</h5>
          <form className="flex items-center space-x-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" 
            />
            <button className="px-4 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-800">
              →
            </button>
          </form>
        </div>

        {/* Right Section - Logo and Mission */}
        <div className="text-right w-full md:w-auto">
          <h1 className="text-3xl font-semibold">Studio</h1>
          <p className="text-sm text-gray-500 mt-4">
            We curate affordably priced pieces from the most exciting up-and-coming artists.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
