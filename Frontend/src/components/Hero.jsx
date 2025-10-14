import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { assets } from "../../public/assets";

const Hero = () => {
  return (
    <div className="w-full py-20 flex flex-col md:flex-row justify-center items-center gap-3 ">
      <div className="w-[100%] md:w-[50%] mx-auto text-center">
        <h1 className="text-3xl font-semibold md:text-5xl md:font-bold text-[#FEAF00] text-center">
          Delicious Food
        </h1>
        <p className="my-4 text-base md:text-xl font-normal text-gray-900 max-w-md w-full mx-auto">
          Creaving something testy? Order your favorite meals from top
          restaurants and get them delivered hot & fresh to your doorstop.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3">
          <div className="flex items-center gap-3">
            <FaRegCheckCircle className="text-green-600 text-2xl" />
            <p className="text-lg font-semibold ">30-Minute Delivery</p>
          </div>
          <div className="flex items-center gap-3">
            <FaRegCheckCircle className="text-green-600 text-2xl" />
            <p className="text-lg font-semibold ">Free Delivery</p>
          </div>
          <div className="flex items-center gap-3">
            <FaRegCheckCircle className="text-green-600 text-2xl" />
            <p className="text-lg font-semibold ">Easy Payment</p>
          </div>
        </div>
        <h3 className="mt-5 text-4xl font-bold text-black px-4">
          Order Now & Satisfy Your Cravings!
        </h3>
        <div className="flex justify-center">
          <button className="px-5 py-2 rounded-full bg-emerald-500 text-white hover:bg-gray-600 cursor-pointer mt-5">
            Order Now
          </button>
        </div>
      </div>

      {/* slider using swiper */}
      <div className="w-[100%] md:w-[50%] md:mr-5 px-4">
        <img
          src={assets.hero}
          alt=""
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
