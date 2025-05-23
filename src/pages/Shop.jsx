import React, { useState } from "react";
import Mobiles from "./categories/Mobiles";
import Appliances from "./categories/Appliances";
import HomeItems from "./categories/HomeItems";
import Accessories from "./categories/Accessories";
import Arduino from "./categories/Arduino"; // <-- New import

function Shop() {
  const [category, setCategory] = useState("mobiles");

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Shop by Category</h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button onClick={() => setCategory("mobiles")} className="px-4 py-2 bg-blue-600 text-white rounded">Mobiles</button>
        <button onClick={() => setCategory("appliances")} className="px-4 py-2 bg-blue-600 text-white rounded">Appliances</button>
        <button onClick={() => setCategory("home")} className="px-4 py-2 bg-blue-600 text-white rounded">Home Items</button>
        <button onClick={() => setCategory("accessories")} className="px-4 py-2 bg-blue-600 text-white rounded">Accessories</button>
        <button onClick={() => setCategory("arduino")} className="px-4 py-2 bg-blue-600 text-white rounded">Arduino</button> {/* <-- New Button */}
      </div>

      {/* Display Selected Category */}
      {category === "mobiles" && <Mobiles />}
      {category === "appliances" && <Appliances />}
      {category === "home" && <HomeItems />}
      {category === "accessories" && <Accessories />}
      {category === "arduino" && <Arduino />} {/* <-- New Display Section */}
    </div>
  );
}

export default Shop;
