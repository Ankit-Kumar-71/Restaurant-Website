import React from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const { cart, removeFromCart, grandTotal, updateQuantity } =
    useContext(StoreContext);
  return (
    <div className="bg-[#f8D442] py-16 w-full h-screen flex flex-col items-center">
      <h1 className="text-center text-3xl my-5 text-gray-900">
        Your Shopping Cart
      </h1>
      <div className="max-w-5xl w-full my-8 mx-auto bg-white shadow-lg rounded-lg overflow-hidden ">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-400">
              <th className="p-3 text-left text-gray-700">Image</th>
              <th className="p-3 text-center text-gray-700">Name</th>
              <th className="p-3 text-center text-gray-700">Price</th>
              <th className="p-3 text-center text-gray-700">Quantity</th>
              <th className="p-3 text-center text-gray-700">Total</th>
              <th className="p-3 text-center text-gray-700">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr>
                <td className="p-3 flex item-center gap-3">
                  <img
                    src={item.image}
                    alt=""
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="p-3 text-center text-gray-700">{item.name}</td>
                <td className="p-3 text-center text-gray-700">{item.price}</td>
                <td className="p-3 text-center text-gray-700">
                  <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="px-2 py-1 bg-gray-300 text-black rounded disabled:opacity-50"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-300 text-black rounded"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-3 text-center text-gray-700">
                  ${item.quantity * item.price}
                </td>
                <td className="p-3 text-center text-gray-700">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="cursor-pointer"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center px-5">
          <button
            onClick={() => navigate("/checkout")}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg ml-8 my-5 cursor-pointer"
          >
            PROCEED TO CHECKOUT
          </button>
          <p className="">Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
