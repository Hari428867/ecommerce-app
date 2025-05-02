import React from "react";

function HomeItems() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-2">HomeItems</h2>
      <p className="text-center text-gray-600 mb-4">
        Find the best deals on home items
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Appliance Card 1 */}
        <div className="border rounded-lg p-4 shadow-md relative">
          <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded">
            -50%
          </span>
          <img
            src="/images/acer32inchtv.png"
            alt="Acer smart tv"
            className="w-full h-52 object-contain mb-4"
          />
          <h3 className="font-semibold text-lg mb-2">
            Acer 80 cm (32 inches) V Pro Series HD Ready Smart QLED Google TV with Android 14 (Black) | 16GB Storage | 30W Dolby Audio
          </h3>
          <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded">
            Great Summer Sale
          </span>
          <div className="text-red-600 font-bold text-lg">
            ₹12,499{" "}
            <span className="line-through text-gray-500 text-sm">₹24,999</span>
          </div>
          <a
            href="https://amzn.to/4jYgCEy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-4 py-2 bg-yellow-400 text-black rounded font-semibold hover:bg-yellow-300"
          >
            Buy on Amazon
          </a>
        </div>

        {/* Appliance Card 2 */}
        <div className="border rounded-lg p-4 shadow-md relative">
          <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded">
            -56%
          </span>
          <img
            src="/images/redmi32inchtv.png"
            alt="redmi32inchtv"
            className="w-full h-52 object-contain mb-4"
          />
          <h3 className="font-semibold text-lg mb-2">
            Redmi Xiaomi 80 cm (32 inches) F Series HD Ready Smart LED Fire TV L32MA-FVIN (Black)
          </h3>
          <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded">
            Great Summer Sale
          </span>
          <div className="text-red-600 font-bold text-lg">
            ₹10,999{" "}
            <span className="line-through text-gray-500 text-sm">₹24,999</span>
          </div>
          <a
            href="https://amzn.to/42X12SL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-4 py-2 bg-yellow-400 text-black rounded font-semibold hover:bg-yellow-300"
          >
            Buy on Amazon
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeItems;
