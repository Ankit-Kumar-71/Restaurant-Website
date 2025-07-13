import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/");
    toast.success("Order Placed Successfully");
  };

  return (
    <div className="bg-[#F8D442] w-full h-full flex justify-center mx-auto">
      <div className="mt-20 w-auto mb-5 sm:w-[475px] h-auto bg-white border-none rounded-md shadow-md">
        <h1 className="text-center text-2xl font-bold mt-6">
          Enter Your Details
        </h1>
        <form className="w-full max-w-md mx-auto p-4 bg-white">
          <div className="flex flex-col gap-2">
            <label className="text-gray-900" htmlFor="firstName">
              FirstName
            </label>
            <input
              type="text"
              name="firstName"
              className="w-full py-2 outline-none border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-900" htmlFor="lastName">
              LastName
            </label>
            <input
              type="text"
              name="lastName"
              className="w-full py-2 outline-none border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-900" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full py-2 outline-none border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-900" htmlFor="password">
              Address
            </label>
            <input
              type="text"
              name="address"
              className="w-full py-2 outline-none border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-gray-900" htmlFor="email">
              Zip code
            </label>
            <input
              type="text"
              name="address"
              className="w-full py-2 outline-none border border-gray-300 rounded-md"
            />
          </div>
          <button
            onClick={handleOrder}
            className="mt-5 bg-[#FEAF00] text-white w-full max-w-md mx-auto py-2 px-2 rounded-md cursor-pointer flex items-center justify-center"
          >
            Order Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
