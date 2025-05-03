import React from "react";

function AudioDevices() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-2">Audio Devices</h2>
      <p className="text-center text-gray-600 mb-4">
        Find the best deals on audio devices.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Appliance Card 1 */}
        <div className="border rounded-lg p-4 shadow-md relative">
          <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm rounded">
            -84%
          </span>
          <img
            src="/images/boatearbuds.png"
            alt="boat ear buds"
            className="w-full h-52 object-contain mb-4"
          />
          <h3 className="font-semibold text-lg mb-2">
            boAt Nirvana Ion ANC Pro, Hi-Res Audio LDAC,ANC(~32dB), 120Hrs Battery, App Support, Fast Charge, v5.3 Bluetooth TWS in Ear Earbuds Wireless Earphones with mic (Blazing Comet)
          </h3>
          <div className="text-red-600 font-bold text-lg">
            ₹2,299{" "}
            <span className="line-through text-gray-500 text-sm">₹13,990</span>
          </div>
          <a
            href="https://amzn.to/4jGEHQP"
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
            -80%
          </span>
          <img
            src="/images/tripledoor.png"
            alt="Mivi Superpods Halo"
            className="w-full h-52 object-contain mb-4"
          />
          <h3 className="font-semibold text-lg mb-2">
             Mivi SuperPods Halo [Flagship Launch], 35dB ANC Active Noise Cancellation in Ear Ear Buds Wireless, Spatial Audio, 60HRS Battery,13mm Drivers, IPX4, v5.4 Bluetooth Earbuds with Mic
          </h3>
          <div className="text-red-600 font-bold text-lg">
            ₹1,499{" "}
            <span className="line-through text-gray-500 text-sm">₹7,499</span>
          </div>
          <a
            href="https://amzn.to/4lZqHTy"
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

export default AudioDevices;
