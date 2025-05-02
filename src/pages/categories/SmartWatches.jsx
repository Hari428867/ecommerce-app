import React from "react";

function SmartWatches() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Smartwatches</h2>
      <p className="text-center text-gray-600 mb-6">
        Enhance your smartwatch experience with the best accessories available at great deals!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {/* Smartwatch Accessory 1 */}
        <div className="p-4 border rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
          <img
            src="/images/firebolt.png"
            alt="firebolt smartwatch"
            className="w-full h-48 object-cover mb-2"
          />
          <h3 className="font-semibold text-lg">
            Fire-Boltt Ninja Call Pro Max Smart Watch 2.01 inch Display, Bluetooth Calling, 120+ Sports Modes, Health Suite, Voice Assistance (Black SS)
          </h3>
          <p className="text-red-600 font-bold text-xl mt-1">₹1,099</p>
          <p className="text-gray-500 line-through text-sm">₹16,999</p>
          <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-full mt-1">-94%</span>
          <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-full mt-1">Great Summer Sale</span>
          <a
            href="https://amzn.to/44DqU95"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-full transition-transform hover:scale-105"
          >
            Buy on Amazon
          </a>
        </div>

        {/* Smartwatch Accessory 2 (Dummy Deal) */}
        <div className="p-4 border rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
          <img
            src="/images/dummy-smartwatch.jpg"  // Replace with real image if available
            alt="Amazfitwatch"
            className="w-full h-48 object-cover mb-2"
          />
          <h3 className="font-semibold text-lg">
            Amazfit Active 42mm AMOLED Smart Watch, Built in GPS, 14day Battery, 5ATM Water Resistant, for iOS & Android, Accurate Readings, BT Calls, Strava Support, Temperature Sensor, VO2 Max (Midnight Black)
          </h3>
          <p className="text-red-600 font-bold text-xl mt-1">₹6,999</p>
          <p className="text-gray-500 line-through text-sm">₹19,999</p>
          <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-full mt-1">-65%</span>
          <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full mt-1">Limited Time Offer</span>
          <a
            href="https://amzn.to/432JQLW" // Replace with actual affiliate link
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-full transition-transform hover:scale-105"
          >
            Buy on Amazon
          </a>
        </div>

      </div>
    </div>
  );
}

export default SmartWatches;
