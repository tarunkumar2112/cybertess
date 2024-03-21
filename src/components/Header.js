// src/components/Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Graphics from '../assets/Graphic.png'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute w-full py-[20px] ">
      <div className='max-w-[1200px] w-full mx-auto px-[15px]'>
        <div className='flex justify-between items-center'>
      {/* Logo */}
      <Link to="/" className="flex text-white text-lg font-semibold"><span className='graphic'><img src={Graphics} /></span> Cybertess Security Inc.</Link>

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
      <nav className={`${isMenuOpen ? 'flex flex-col md:flex md:flex-row ]' : 'hidden md:flex md:flex-row'} md:space-x-4 px-4`}>
        <Link to="/" className="text-slate-300 hover:text-white font-medium py-3 px-2">Home</Link>
        <Link to="/" className="text-slate-300 hover:text-white font-medium py-3 px-2">Services</Link>
        <Link to="/" className="text-slate-300 hover:text-white font-medium py-3 px-2">About</Link>
        <Link to="/" className="text-slate-300 hover:text-white font-medium py-3 px-2">Work</Link>
        <Link to="/" className="text-slate-300 hover:text-white font-medium py-3 px-2">Pricing</Link>

        <Link to="/contact" className="text-slate-300 hover:text-white font-medium py-3 px-2">Contact</Link>
      </nav>

      {/* Sign-in Button */}
      <button className={`${isMenuOpen ? 'block' : 'hidden'} md:block font-medium  text-white hover:text-gray-300  py-2 px-4 rounded`}>
        Sign In
      </button>
      </div>
      </div>
    </header>
  );
};

export default Header;
