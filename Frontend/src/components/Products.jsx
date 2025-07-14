import React from "react";
import SingleItem from "./SingleItem";

const Products = ({ products }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold ml-12 mt-12 my-6">All Product</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 px-3 sm:px-5">
        {products.map((product) => (
           <SingleItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
