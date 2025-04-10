import React from "react";

function Mobiles() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Mobile Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Mobile Deal 1 */}
        <div className="relative p-4 border rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
          {/* Discount Badge */}
          <div className="absolute top-2 left-2 bg-red-600 text-white text-sm font-bold rounded-full px-3 py-1 shadow-md">
            -37%
          </div>

          <img
            src="/images/IQOO Z9X 5G.jpg"
            alt="iQOO Z9x 5G"
            className="w-60 h-80 object-cover mx-auto"
          />
          <h3 className="mt-2 font-semibold text-lg">
            iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge
          </h3>
          
          {/* Price Styled */}
          <div className="mt-2 space-x-2">
            <span className="text-red-600 font-bold text-xl">₹11,999</span>
            <span className="text-gray-500 line-through text-lg">₹18,999</span>
          </div>

          {/* Button Styled */}
          <a
            href="https://amzn.to/3CNgBUa"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Buy on Amazon
          </a>
        </div>

        {/* Mobile Deal 2 */}
        <div className="relative p-4 border rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
          {/* Discount Badge */}
          <div className="absolute top-2 left-2 bg-red-600 text-white text-sm font-bold rounded-full px-3 py-1 shadow-md">
            -31%
          </div>

          <img
            src="/images/Samsung Galaxy M35 5G.png"
            alt="Samsung Galaxy M35 5G"
            className="w-60 h-80 object-cover mx-auto"
          />
          <h3 className="mt-2 font-semibold text-lg">
            Samsung Galaxy M35 5G (Thunder Grey,6GB RAM,128GB Storage) | Corning Gorilla Glass Victus+ | AnTuTu Score 595K+ | Vapour Cooling Chamber | 6000mAh Battery | 120Hz Super AMOLED Display
          </h3>
          
          {/* Price Styled */}
          <div className="mt-2 space-x-2">
            <span className="text-red-600 font-bold text-xl">₹16,998</span>
            <span className="text-gray-500 line-through text-lg">₹24,499</span>
          </div>

          {/* Button Styled */}
          <a
            href="https://amzn.to/3FYfhio"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-transform transform hover:scale-105"
          >
            Buy on Amazon
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobiles;
