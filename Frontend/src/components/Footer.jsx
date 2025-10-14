import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-500 mt-4 ">
          &copy; {new Date().getFullYear()} Restaurant Website . All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
