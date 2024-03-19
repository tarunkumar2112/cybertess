// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import Graphics from '../assets/Graphic.png'
import Twitter from '../assets/X.png'
import Facebook from '../assets/Facebook.png'
import Insta from '../assets/Instagram.png'
import Tiktok from '../assets/TikTok.png'
import Youtube from '../assets/YouTube.png'

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4">
      {/* First Row: Logo, Navigation Links, and Social Media Icons */}
      <div className="flex justify-between items-center mb-4">
        {/* Logo */}
        <Link to="/" className="flex text-white text-lg font-semibold"><span className='graphic'><img src={Graphics} /></span> Cybertess Security Inc.</Link>

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
          <a href="#" target="_blank"><img src={Facebook} alt="Social Media Icon" className="h-6 w-6" /></a>
          <a href="#" target="_blank"><img src={Insta} alt="Social Media Icon" className="h-6 w-6" /></a>
          <a href="#" target="_blank"><img src={Twitter} alt="Social Media Icon" className="h-6 w-6" /></a>
          <a href="#" target="_blank"><img src={Tiktok} alt="Social Media Icon" className="h-6 w-6" /></a>
          <a href="#" target="_blank"><img src={Youtube} alt="Social Media Icon" className="h-6 w-6" /></a>

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
