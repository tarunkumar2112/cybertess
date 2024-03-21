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
    <footer className="bg-[#0B011D] p-4">
      <div className='max-w-[1200px] px-[15px] mx-auto'>
      {/* First Row: Logo, Navigation Links, and Social Media Icons */}
      <div className="flex md:justify-between justify-center gap-[20px] flex-wrap items-center md:py-[50px] py-[30px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-[5px] text-white text-[22px] font-semibold"><span className='graphic'><img src={Graphics} /></span> Cybertess Security Inc.</Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-[#7C7C7C] hover:text-white text-[14px]">Home</Link>
          <Link to="/services" className="text-[#7C7C7C] hover:text-white text-[14px]">Services</Link>
          <Link to="/about" className="text-[#7C7C7C] hover:text-white text-[14px]">About</Link>
          <Link to="/about" className="text-[#7C7C7C] hover:text-white text-[14px]">Work</Link>
          <Link to="/about" className="text-[#7C7C7C] hover:text-white text-[14px]">Pricing</Link>
          <Link to="/contact" className="text-[#7C7C7C] hover:text-white text-[14px]">Contact</Link>
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
      <div class="bg-HR-bg h-px w-full  bg-center bg-no-repeat"></div>
      <div className="text-center text-gray-400 md:py-[50px] py-[30px] text-[14px] text-Paragraph">
        &copy; 2024 Cybertess Security Inc. All rights reserved.
      </div>
      </div>
    </footer>
  );
};

export default Footer;
