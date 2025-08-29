"use client"
import Link from 'next/link';
import React from 'react';
import { FaBars, FaTimes, FaSearch, FaShoppingBag } from 'react-icons/fa';
import { LuStethoscope } from 'react-icons/lu';

// This is a responsive navbar component that mimics the design
// from the provided image using React and Tailwind CSS.
// It uses a CSS-only method for the mobile menu toggle,
// avoiding the use of React state (useState).

const Navbar = () => {
  const session = useSession
  return (
    <nav className="bg-white font-sans">
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
          <Link href={'login'}  className='btn'>Login</Link>
          <Link href={'register'}  className='btn'>Register</Link>
          <button className="text-gray-600 hover:text-red-500 transition-colors duration-300">
            <FaShoppingBag className="text-xl" />
          </button>
          <button className="text-gray-600 hover:text-red-500 transition-colors duration-300">
            <FaSearch className="text-xl" />
          </button>
          <button className="bg-transparent border-2 border-red-500 text-red-500 px-6 py-2 rounded-lg font-medium hover:bg-red-500 hover:text-white transition-colors duration-300">
            Appointment
          </button>
        </div>

        {/* Mobile menu toggle (Checkbox is hidden, used for state) */}
        <div className="lg:hidden flex items-center">
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <label htmlFor="menu-toggle" className="text-gray-600 peer-checked:hidden focus:outline-none">
            <FaBars className="text-2xl cursor-pointer" />
          </label>
          <label htmlFor="menu-toggle" className="text-gray-600 hidden peer-checked:block focus:outline-none">
            <FaTimes className="text-2xl cursor-pointer" />
          </label>
        </div>
      </div>

      {/* Mobile menu links (toggled by the hidden checkbox) */}
      <div className="lg:hidden transition-all duration-300 ease-in-out overflow-hidden max-h-0 peer-checked:max-h-96 opacity-0 peer-checked:opacity-100 py-0 peer-checked:py-4">
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
