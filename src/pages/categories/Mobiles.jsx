import React from "react";

function Mobiles() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Mobile Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Mobile Deal 1 */}
        <div className="p-4 border rounded-lg shadow-md text-center">
          <img
            src="/images/IQOO Z9X 5G.jpg"  // ✅ Replace with real mobile image
            alt="Smartphone XYZ"
            className="w-60 h-80 object-cover"
          />
          <h3 className="mt-2 font-semibold text-lg">iQOO Z9x 5G (Tornado Green, 6GB RAM, 128GB Storage) | Snapdragon 6 Gen 1 with 560k+ AnTuTu Score | 6000mAh Battery with 7.99mm Slim Design | 44W FlashCharge</h3>
          <p className="text-gray-600">₹13,499</p>
          <a
            href="https://amzn.to/3CNgBUa"  // ✅ Your Amazon affiliate link
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Buy on Amazon
          </a>
        </div>
<<<<<<< HEAD
=======
        <div className="p-4 border rounded-lg shadow-md text-center">
          <img 
             src="/images/Samsung Galaxy M35 5G.png"
             alt="Smartphone XYZ"
             className="w-60 h-80 object-cover"
          />
          <h3 className="mt-2 font-semibold text-lg">Samsung Galaxy M35 5G (Thunder Grey,6GB RAM,128GB Storage)| Corning Gorilla Glass Victus+| AnTuTu Score 595K+ | Vapour Cooling Chamber | 6000mAh Battery | 120Hz Super AMOLED Display</h3>
          <p className="text-gray-600">₹13,999</p>
          <a
            href="https://amzn.to/3FYfhio"  // ✅ Your Amazon affiliate link
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Buy on Amazon
          </a>
        </div>
>>>>>>> master
      </div>
    </div>
  );
}

export default Mobiles;
