import React, { useEffect, useState } from "react";

const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Native by UC Urban Company M1 Water Purifier | Needs No Service For 2 Years | RO+UV+Copper+Alkaline | 10-Stage Purifier | 4-in-1 Health Booster | 8L Capacity | 2 Year Warranty (Filters Included)",
    price: "₹14,498",
    originalPrice: "₹20,999",
    discount: "-31%",
    image: "/images/waterpurifier.png",
    link: "https://amzn.to/4kPqeBW",
    badge: "Limited Time Deal",
  },
  // Add more products as needed
];

function DealOfTheDay() {
  const [deals, setDeals] = useState([]);
  const [countdown, setCountdown] = useState("");

  const generateNewDeals = () => {
    const selectedDeals = ALL_PRODUCTS.slice(0, 3); // You can add random logic if needed
    setDeals(selectedDeals);
  };

  // Set deals on initial mount
  useEffect(() => {
    generateNewDeals();
  }, []);

  // Countdown logic to local midnight with auto-refresh
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();

      const midnightLocal = new Date(now);
      midnightLocal.setHours(24, 0, 0, 0); // Sets to next local midnight

      const diff = Math.max(midnightLocal.getTime() - now.getTime(), 0);

      // Auto-refresh deals at exactly midnight
      if (diff === 0) {
        generateNewDeals();
      }

      const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
      const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, "0");

      setCountdown(`${hours}:${minutes}:${seconds}`);
    };

    updateCountdown(); // Run immediately
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-yellow-600">🔥 Deal of the Day</h1>
      <p className="text-center text-gray-600 mb-6">
        ⏳ Time left: <strong>{countdown}</strong>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {deals.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-2"
            />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-red-600 font-bold text-xl mt-1">{product.price}</p>
            <p className="text-gray-500 line-through text-sm">{product.originalPrice}</p>
            <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-full mt-1 mr-2">
              {product.discount}
            </span>
            <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full mt-1">
              {product.badge}
            </span>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-full transition-transform hover:scale-105"
            >
              Buy on Amazon
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DealOfTheDay;
