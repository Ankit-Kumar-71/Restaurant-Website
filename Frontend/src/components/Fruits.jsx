import React from "react";
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
import SingleItem from "./SingleItem";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Fruits = () => {
  const {products} = useContext(StoreContext);
  const iceCreams = products.filter((item) => item.category === "Ice Cream");

  return (
    <div className="py-6">
      <h1 className="text-3xl text-center md:text-start text-gray-900 font-bold md:ml-12">
        Grab Your Favourite Ice Cream
      </h1>
      <div className="my-6 px-4">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          //navigation
          pagination={{ clickable: true }}
          //scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          //loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
          }}
        >
          {iceCreams.map((item) => (
            <SwiperSlide>
              <SingleItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                category={item.category}
                image={item.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Fruits;
