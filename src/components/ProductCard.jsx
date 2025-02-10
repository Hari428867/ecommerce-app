import React from "react";

function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
      <img src={product.image} alt={product.name} className="w-60 h-60 object-contain" />
      <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
        View Details
      </button>
    </div>
  );
}


export default ProductCard;
