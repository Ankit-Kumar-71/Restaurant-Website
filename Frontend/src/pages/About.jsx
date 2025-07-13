import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../public/assets";


const About = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl py-4">
            Welcome Food Ordering Website
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A place where tradition meets flavor, and every meal tells a story.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center text-center">
            <img
              src={assets.Restaurant}
              alt="Restaurant Interior"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Our Restaurant
            </h3>
            <p className="mt-2 text-gray-600">
              Founded in 2025, Food Ordering website is inspired by the rich
              flavors. We are passionate about serving you fresh,
              high-quality dishes in a welcoming and vibrant atmosphere.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src={assets.chef}
              alt="Chef"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Meet Our Chef
            </h3>
            <p className="mt-2 text-gray-600">
              Our talented All chef, brings years of experience and
              passion to every dish. With a commitment to authentic flavors, they
              continuously push the boundaries of culinary creativity.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to={"/menu"}
            className="inline-block bg-green-500 text-white py-2 px-6 rounded-md text-lg hover:bg-green-600 transition duration-200"
          >
            View Our Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;

