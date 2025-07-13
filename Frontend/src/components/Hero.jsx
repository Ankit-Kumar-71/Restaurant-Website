import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {assets} from "../../public/assets";

const Hero = () => {
  return (
    <div className="w-full py-20 flex flex-col md:flex-row justify-center items-center gap-3 ">
      <div className="w-[100%] md:w-[50%] mx-auto text-center">
        <h1 className="text-xl font-semibold md:text-5xl md:font-bold text-[#FEAF00] text-center">
          Delicious Food
        </h1>
        <p className="my-4 text-base md:text-xl font-normal text-gray-900 max-w-md w-full mx-auto">
          Creaving something testy? Order your favorite meals from top
          restaurants and get them delivered hot & fresh to your doorstop.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3">
          <div className="flex items-center gap-3">
            <FaRegCheckCircle className="text-blue-600 text-2xl" />
            <p className="text-lg font-semibold ">30-Minute Delivery</p>
          </div>
          <div className="flex items-center gap-3">
            <FaRegCheckCircle className="text-blue-600 text-2xl" />
            <p className="text-lg font-semibold ">Free Delivery</p>
          </div>
          <div className="flex items-center gap-3">
            <FaRegCheckCircle className="text-blue-600 text-2xl" />
            <p className="text-lg font-semibold ">Easy Payment</p>
          </div>
        </div>
        <h3 className="mt-5 text-4xl font-bold text-gray-900 px-4">
          Order Now & Satisfy Your Cravings!
        </h3>
        <div className="flex justify-center">
          <button className="px-5 py-2 rounded-full bg-black text-white hover:bg-gray-600 cursor-pointer mt-5">
            Order Now
          </button>
        </div>
      </div>

      {/* slider using swiper */}
      <div className="w-[100%] md:w-[50%] md:mr-5 px-4">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          //navigation 
          //pagination={{ clickable: true }} 
          //scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="rounded-lg overflow-hidden"
        >
          <SwiperSlide>
            <img
              src={assets.hero}
              alt=""
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={assets.c4}
              alt=""
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={assets.f4}
              alt=""
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={assets.v1}
              alt=""
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
