// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4">
      {/* First Row: Logo, Navigation Links, and Social Media Icons */}
      <div className="flex justify-between items-center mb-4">
        {/* Logo */}
        <Link to="/" className="text-white text-lg font-semibold">Cybertess Security Inc.</Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/about" className="text-white hover:text-gray-300">Work</Link>
          <Link to="/about" className="text-white hover:text-gray-300">Pricing</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {/* Replace the src attribute with the URLs of your social media icons */}
          <img src="social-icon-1.png" alt="Social Media Icon" className="h-6 w-6" />
          <img src="social-icon-2.png" alt="Social Media Icon" className="h-6 w-6" />
          <img src="social-icon-3.png" alt="Social Media Icon" className="h-6 w-6" />
          <img src="social-icon-4.png" alt="Social Media Icon" className="h-6 w-6" />
          <img src="social-icon-5.png" alt="Social Media Icon" className="h-6 w-6" />
        </div>
      </div>

      {/* Second Row: Copyright */}
      <div className="text-center text-gray-400">
        &copy; 2024 Cybertess Security Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
