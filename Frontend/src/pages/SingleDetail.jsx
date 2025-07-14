import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const SingleDetail = () => {
  const { id } = useParams();

  const { products, addToCart } = useContext(StoreContext);

  const product = products.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <div className="text-center mt-10 text-red-500">
        Product not found or still loading...
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="flex flex-col gap-3 max-w-xl w-full mx-auto border border-gray-300 shadow-lg rounded-lg p-5">
        <img
          className="w-full h-full "
          src={`${BASE_URL}/api/images/${product.image}`}
          alt=""
        />
        <p className="text-lg md:text-3xl font-bold text-gray-900 my-2 text-center">
          {product.name}
        </p>
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-2xl font-bold ">
            Category:<span className="text-blue-500">{product.category}</span>
          </p>
          <p className="text-gray-900 text-2xl font-bold ">
            Price:<span className="text-orange-500">${product.price}</span>
          </p>
          <p className="text-lg leading-6 text-gray-800">
            {product.description}
          </p>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold mt-3 cursor-pointer duration-300"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleDetail;
