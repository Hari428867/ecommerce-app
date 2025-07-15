import React from "react";

function GamingAccessories() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-2">Gaming Accessories</h2>
      <p className="text-center text-gray-600 mb-4">
        Find the best deals on gaming accessories
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Appliance Card 1 */}
        <div className="border rounded-lg p-4 shadow-md relative">
          <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded">
            -82%
          </span>
          <img
            src="/images/striffgamingpad.png"
            alt="Gaming mouse pad"
            className="w-full h-52 object-contain mb-4"
          />
          <h3 className="font-semibold text-lg mb-2">
            STRIFF World Map Extended Size (800 mm x 300 mm x 2 mm) Gaming Mouse Pad| Desk Mat | Stitched Edges| Non-Slip Rubber Base|Computer Laptop|Keyboard Mouse Pad for Office & Home (World Map)
          </h3>
          <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded">
            Prime Day Sale
          </span>
          <div className="text-red-600 font-bold text-lg">
            ₹229{" "}
            <span className="line-through text-gray-500 text-sm">₹1,299</span>
          </div>
          <a
            href="https://amzn.to/3YvUg5k"
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
            -38%
          </span>
          <img
            src="/images/zebronicslaptopcooler.png"
            alt="Laptop cooler"
            className="w-full h-52 object-contain mb-4"
          />
          <h3 className="font-semibold text-lg mb-2">
            Zebronics NC5500D Powerful Laptop Cooler with Dual 125mm Fans, Silent Operation, Adjustable Fan Speed, Display, Controls, USB, 5 Step Retractable Stand and Mobile Holder
          </h3>
          <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded">
            Prime Day Sale
          </span>
          <div className="text-red-600 font-bold text-lg">
            ₹799{" "}
            <span className="line-through text-gray-500 text-sm">₹1,299</span>
          </div>
          <a
            href="https://amzn.to/3RMDrPK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-4 py-2 bg-yellow-400 text-black rounded font-semibold hover:bg-yellow-300"
          >
            Buy on Amazon
          </a>
        </div>
        {/* Appliance Card 3 */}
        <div className="border rounded-lg p-4 shadow-md relative">
          {/*<span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded">
            -82%
          </span>
          */}
          <img
            src="/images/zebronicslaptopcooler.png"
            alt="Laptop cooling pad"
            className="w-full h-52 object-contain mb-4"
          />
          <h3 className="font-semibold text-lg mb-2">
            Amazon Basics USB Powered Laptop Cooling Pad | Dual Fan | Dual USB Port | Blue LED Lights | 4 Adjustable Heights with Stand |
          </h3>
          <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded">
            Currently Unavailable
          </span>
          {/*<div className="text-red-600 font-bold text-lg">
            ₹399{" "}
            <span className="line-through text-gray-500 text-sm">₹2,179</span>
          </div>
          */}
          <a
            href="https://amzn.to/4d0k3IA"
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

export default GamingAccessories;
