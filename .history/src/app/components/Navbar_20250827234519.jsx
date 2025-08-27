import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { LuStethoscope } from 'react-icons/lu';


const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg font-sans">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and title section */}
        <div className="flex items-center space-x-2">
          {/* Using a stethoscope icon to represent "Car Doctor" */}
          <LuStethoscope className="text-4xl text-red-500" />
          <span className="text-2xl font-bold text-gray-800">Car Doctor</span>
        </div>

        {/* Desktop navigation links */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-300">Home</a>
          <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-300">About</a>
          <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-300">Services</a>
          <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-300">Blog</a>
          <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-300">Contact</a>
        </div>

        {/* Desktop actions (Search icon and Appointment button) */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="text-gray-600 hover:text-red-500 transition-colors duration-300">
            <FaSearch className="text-xl" />
          </button>
          <button className="bg-transparent border-2 border-red-500 text-red-500 px-6 py-2 rounded-lg font-medium hover:bg-red-500 hover:text-white transition-colors duration-300">
            Appointment
          </button>
        </div>

        {/* Mobile menu and button (visible on smaller screens) */}
        <div className="lg:hidden flex items-center space-x-4">
          <button className="text-gray-600 hover:text-red-500 transition-colors duration-300">
            <FaSearch className="text-xl" />
          </button>
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu links (toggled based on state) */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center space-y-4">
          <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-300 py-2">Home</a>
          <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-300 py-2">About</a>
          <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-300 py-2">Services</a>
          <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-300 py-2">Blog</a>
          <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-300 py-2">Contact</a>
          <button className="bg-transparent border-2 border-red-500 text-red-500 px-6 py-2 rounded-lg font-medium w-full text-center hover:bg-red-500 hover:text-white transition-colors duration-300">
            Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
