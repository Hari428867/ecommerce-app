// Arduino.jsx
import React from "react";

function Arduino() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Example Product - Replace/add more later */}
      <div className="border p-4 rounded shadow">
        <img src="https://example.com/arduino-board.jpg" alt="Arduino Uno" className="mb-2 w-full h-48 object-cover" />
        <h3 className="font-semibold text-lg">Arduino UNO R3</h3>
        <p className="text-sm text-gray-600">Microcontroller board with USB cable</p>
        <p className="text-red-600 font-bold mt-2">₹599</p>
        <a
          href="https://www.amazon.in/dp/example"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block px-3 py-1 bg-yellow-400 rounded text-black font-semibold"
        >
          Buy on Amazon
        </a>
      </div>
    </div>
  );
}

export default Arduino;
