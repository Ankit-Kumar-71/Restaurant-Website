import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const SingleItem = ({ product }) => {
  const { addToCart } = useContext(StoreContext);
  if (!product) return null;
  const { id, name, price, category, image } = product;
  return (
    <div className="max-w-[300px] w-full mx-auto flex flex-col item-center p-4 border border-gray-200 rounded-2xl shadow-xl bg-white">
      <Link to={`/product/${id}`} className="w-full">
        <img
          src={`${BASE_URL}/api/images/${image}`}
          alt=""
          className="w-full h-48 object-contain rounded-lg  shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <p className="text-2xl text-center text-gray-800 font-bold mt-3 ">
        {name}
      </p>
      <p className="text-lg text-center text-blue-600 font-bold mt-3 ">
        {category}
      </p>
      <p className="text-xl text-center text-orange-500 font-bold mt-3 ">
        ${price}
      </p>
      <button
        onClick={() => addToCart(product)}
        className="text-white bg-orange-500 w-full py-2 rounded-lg font-semibold mt-3 cursor-pointer duration-300"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default SingleItem;
