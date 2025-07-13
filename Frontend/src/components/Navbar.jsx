import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../public/assets";
import { BsCart } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { useState, useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, auth } = useContext(StoreContext);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const onClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed flex shadow-md w-full h-16 px-2 md:px-4 bg-[#4a4e69] text-white z-50">
      <div className="flex items-center justify-between w-full h-full max-w-screen-xl mx-auto">
        {/* logo */}
        <Link className="flex items-center px-2 py-2" to={"/"}>
          <div className="h-14 w-auto">
            <img
              src={assets.logo}
              alt="Logo"
              className="h-full w-auto max-w-[200px] object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Link>

        {/* navigation links */}
        <div className="flex items-center gap-4 md:gap-6">
          <ul className="hidden md:flex gap-4 text-base-lg">
            <Link className="hover:text-[#FEAF00] duration-300" to={"/"}>
              Home
            </Link>
            <Link className="hover:text-[#FEAF00] duration-300" to={"/menu"}>
              Menu
            </Link>
            <Link className="hover:text-[#FEAF00] duration-300" to={"/about"}>
              About
            </Link>
            <Link className="hover:text-[#FEAF00] duration-300" to={"/contact"}>
              Contact
            </Link>
          </ul>

          {/* cart icon */}

          <div className="text-2xl text-slate-600 relative">
            <Link to={"/cart"}>
              <BsCart className="text-white" />
              <div className="absolute -top-2 -right-2 bg-orange-700 text-white rounded-full h-5 w-5 flex items-center justify-center text-sm">
                {cartCount ? cartCount : 0}
              </div>
            </Link>
          </div>

          {/* user icons */}
          <div className="relative text-slate-600">
            <div
              onClick={toggleMenu}
              className="text-3xl cursor-pointer w-8 h-8 rounded-full drop-shadow-md overflow-hidden"
            >
              {auth.user ? (
                <Link to="/profile">
                  <span className="w-8 h-8 rounded-full bg-white text-gray-800 flex items-center justify-center font-semibold text-sm shadow-md cursor-pointer overflow-hidden">
                    {auth.user.image ? (
                      <img
                        src={`http://localhost:8080/api/images/${auth.user.image}`}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <span className="text-sm font-bold text-gray-700">
                        {auth.user.name?.charAt(0).toUpperCase() || "U"}
                      </span>
                    )}
                  </span>
                </Link>
              ) : (
                <FaRegCircleUser className="text-[#c3cab8] cursor-pointer text-3xl" />
              )}
            </div>

            {/* login popup */}
            {isMenuOpen && (
              <div
                className="absolute right-0 top-10 py-2 
                  flex flex-col min-w-[120px] text-center"
              >
                <div className="flex flex-col gap-2 text-black">
                  {!auth.isAuthenticated && (
                    <Link
                      onClick={onClose}
                      to={"/login"}
                      className="absolute right-0 top-4 min-w-[120px] bg-white border border-gray-200 shadow-lg rounded-md flex flex-col py-2 text-sm text-gray-700 z-50 "
                    >
                      Login
                    </Link>
                  )}
                </div>

                {/* mobile version */}
                <ul className="md:hidden flex flex-col  text-base  md:text-lg gap-2">
                  <Link
                    onClick={onClose}
                    className="hover:text-[#FEAF00] duration-300"
                    to={"/"}
                  >
                    Home
                  </Link>
                  <Link
                    onClick={onClose}
                    className="hover:text-[#FEAF00] duration-300"
                    to={"/menu"}
                  >
                    Menu
                  </Link>
                  <Link
                    onClick={onClose}
                    className="hover:text-[#FEAF00] duration-300"
                    to={"/about"}
                  >
                    About
                  </Link>
                  <Link
                    onClick={onClose}
                    className="hover:text-[#FEAF00] duration-300"
                    to={"/contact"}
                  >
                    Contact
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
