import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold text-gray-400 mt-1">
           Food Ordering Website
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaFacebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaTwitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-4 ">
          &copy; {new Date().getFullYear()}  Food Ordering Website . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
