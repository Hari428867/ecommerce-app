import React, { useState } from "react";
import Laptops from "../categories/Laptops"; // ✅ Corrected path (no dot before "src")

function Accessories() {
  const [selectedAccessory, setSelectedAccessory] = useState("");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-2">Accessories</h2>
      <p className="text-center text-gray-600 mb-6">
        Discover the latest accessories and gadgets.
      </p>

      {/* Subcategory Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => setSelectedAccessory("laptops")}
        >
          Laptops
        </button>
        <button className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Smartwatches
        </button>
        <button className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Audio Devices
        </button>
        <button className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Gaming Accessories
        </button>
        <button className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Others
        </button>
      </div>

      {/* Render Laptops Component */}
      {selectedAccessory === "laptops" && <Laptops />}
    </div>
  );
}

export default Accessories;
