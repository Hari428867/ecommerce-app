import React, { useState } from "react";
import Laptops from "../categories/Laptops";
import SmartWatches from "../categories/SmartWatches";
import AudioDevices from "../categories/AudioDevices";

function Accessories() {
  const [selectedAccessory, setSelectedAccessory] = useState("");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-2">Accessories</h2>
      <p className="text-center text-gray-600 mb-6">
        Discover the latest accessories and gadgets.
      </p>

      {/* Subcategory Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => setSelectedAccessory("laptops")}
        >
          Laptops
        </button>
        <button
          className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => setSelectedAccessory("smartwatches")}
        >
          Smartwatches
        </button>
        <button
          className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => setSelectedAccessory("audio")}
        >
          Audio Devices
        </button>
        <button
          className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => setSelectedAccessory("gaming")}
        >
          Gaming Accessories
        </button>
      </div>

      {/* Conditional Rendering */}
      {selectedAccessory === "laptops" && <Laptops />}
      {selectedAccessory === "smartwatches" && <SmartWatches />}
      {selectedAccessory === "audio" && <AudioDevices />}
      {/* Add similar conditional blocks for other accessories when ready */}
    </div>
  );
}

export default Accessories;
