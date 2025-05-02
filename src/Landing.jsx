// src/Landing.jsx
import React from "react";

const Landing = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to MiniKart</h1>
      <p className="text-lg text-gray-600 mb-8">
        Your one-stop affiliate shopping destination
      </p>
      <div className="flex gap-6">
        <a
          href="/app"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Try MiniKart
        </a>
        <a
          href="https://your-median-download-link.com" // Replace with real link
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          download
        >
          Download App
        </a>
      </div>
    </div>
  );
};

export default Landing;
