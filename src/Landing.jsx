import React from "react";
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-between bg-gray-100 text-center px-4">
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
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
            download
          >
            Visit Website
          </a>
          <a
            href="https://median.co/share/wzelqp#apk" 
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
            download
          >
            Download App for Android
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-200 w-full py-4 mt-6">
        <p className="text-sm text-gray-600">
          Please, all users kindly notice that the app has some update errors. Kindly visit our website for more details.
        </p>
      </footer>
    </div>
  );
};

export default Landing;
