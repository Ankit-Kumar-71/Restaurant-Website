import React from "react";
import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import Filters from "../components/Filters";
import Products from "../components/Products";

const Menu = () => {
  const { products } = useContext(StoreContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterproduct =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="py-20">
      <Filters setSelectedCategory={setSelectedCategory} />
      <Products products={filterproduct} />
    </div>
  );
};

export default Menu;
