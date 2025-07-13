import React from "react";
import { PiForkKnife } from "react-icons/pi";

const Filters = ({ setSelectedCategory }) => {
  const categories = [
    { id: 1, name: "Vegetable" },
    { id: 2, name: "Fruit" },
    { id: 3, name: "Pizza" },
    { id: 4, name: "All" },
    { id: 5, name: "Cake" },
    { id: 6, name: "Chicken" },
    { id: 7, name: "Burger" }
  ];

  return (
    <div>
      <h1 className="text-center md:text-start font-bold ml-10 text-gray-900 md:text-3xl text-lg">
        Filter Product By category
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-3 mt-3">
        {categories.map((item) => (
          <div
            onClick={() => setSelectedCategory(item.name)}
            key={item.id}
            className="flex flex-col justify-center items-center gap-2 max-w-[100px] w-full border 
        border-gray-300 bg-orange-400 hover:bg-orange-600 rounded-full p-4 cursor-pointer duration-300"
          >
            <PiForkKnife className="w-10 h-10" />
            <p className="text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
