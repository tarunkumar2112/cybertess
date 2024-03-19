// src/components/Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-white text-lg font-semibold">Cybertess Security Inc.</Link>

      {/* Mobile Navigation Toggle */}
      <button onClick={toggleMenu} className="md:hidden text-white">
        <svg className={`h-6 w-6 ${isMenuOpen ? 'hidden' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg className={`h-6 w-6 ${isMenuOpen ? '' : 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      {/* Navigation Links */}
      <nav className={`${isMenuOpen ? 'flex flex-col md:flex md:flex-row' : 'hidden md:flex md:flex-row'} md:space-x-4`}>
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
        <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        <Link to="/services" className="text-white hover:text-gray-300">Work</Link>
        <Link to="/services" className="text-white hover:text-gray-300">Pricing</Link>

        <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
      </nav>

      {/* Sign-in Button */}
      <button className={`${isMenuOpen ? 'block' : 'hidden'} md:block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded`}>
        SignIn
      </button>
    </header>
  );
};

export default Header;
