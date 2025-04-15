import React from "react";

function Appliances() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-2">Appliances</h2>
      <p className="text-center text-gray-600 mb-4">
        Find the best deals on home appliances.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Appliance Card */}
        <div className="border rounded-lg p-4 shadow-md relative">
          <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded">
            -29%
          </span>
          <img
            src="/images/refridgerator.png" // Replace with your appliance image URL
            alt="Washing Machine"
            className="w-full h-52 object-contain mb-4"
          />
          <h3 className="font-semibold text-lg mb-2">
            Haier 190 L 5 Star Direct Cool Single Door Refrigerator with 1 Hour Icing Technology (HED-205DS-P, Dazzle Steel)
          </h3>
          <div className="text-red-600 font-bold text-lg">₹15,990 <span className="line-through text-gray-500 text-sm">₹22,490</span></div>
          <a
            href="https://amzn.to/4jvnRUv" // Replace with your affiliate link
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

export default Appliances;
