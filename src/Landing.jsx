import React from "react";
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100 text-center px-4">

      {/* 🚨 Top Notice Banner */}
      <div className="bg-yellow-200 text-yellow-800 text-sm font-medium py-2 px-4 w-full shadow-md">
        ⚠️ Please note: If product updates are not appearing, kindly clear the app's cache and data on your phone. The app currently has some update issues. For the latest deals, please visit our website.

      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to MiniKart</h1>
        <p className="text-lg text-gray-600 mb-8">
          Your one-stop affiliate shopping destination
        </p>
        <div className="flex gap-6">
          <Link
            to="/home"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Try MiniKart
          </Link>
          <a 
             href="https://minikart-ecommerce.netlify.app"
             target="_blank" 
             rel="noopener noreferrer"
             className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            Visit Website
          </a>

          <a
            href="https://median.co/share/wzelqp#apk" 
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            Download App for Android
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
