import React from "react";

function Laptops() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Laptop Accessories</h2>
      <p className="text-center text-gray-600 mb-6">Enhance your laptop experience with the best accessories available at great deals!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Laptop Accessory 1 */}
        <div className="p-4 border rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
          <img
            src="https://m.media-amazon.com/images/I/61I7gGpNquL._SL1500_.jpg"
            alt="Laptop Stand"
            className="w-full h-48 object-cover mb-2"
          />
          <h3 className="font-semibold text-lg">Adjustable Aluminum Laptop Stand</h3>
          <p className="text-red-600 font-bold text-xl mt-1">₹999</p>
          <p className="text-gray-500 line-through text-sm">₹1,599</p>
          <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-full mt-1">-38%</span>
          <a
            href="https://amzn.to/your-affiliate-link"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-full transition-transform hover:scale-105"
          >
            Buy on Amazon
          </a>
        </div>

        {/* You can copy & modify above card for more accessories */}
      </div>
    </div>
  );
}

export default Laptops;
