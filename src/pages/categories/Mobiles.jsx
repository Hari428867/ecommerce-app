import React from "react";

function Mobiles() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-4">Mobile Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Sample Product */}
        <div className="p-4 border rounded-lg shadow-md">
          <img src="https://via.placeholder.com/150" alt="Mobile" />
          <h3 className="mt-2 font-semibold">Smartphone XYZ</h3>
          <a href="https://www.amazon.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600">Buy Now</a>
        </div>
        {/* Add more product cards here */}
      </div>
    </div>
  );
}

export default Mobiles;
 
