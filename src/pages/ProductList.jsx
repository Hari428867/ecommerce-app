import React from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 14999,
    image: "/images/smartphone.png",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 2999,
    image: "/images/headphones.png",
  },
  {
    id: 3,
    name: "Laptop",
    price: 49999,
    image: "/images/laptop.png",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 3999,
    image: "/images/smartwatch.png",
  },
];

function ProductList() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* New Button Added */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/shop")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Explore More Deals
        </button>
      </div>
    </div>
  );
}

export default ProductList;
