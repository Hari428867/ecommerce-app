import React, { useEffect, useState } from "react";

const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Samsung 80 cm (32 inches) HD Ready Smart LED TV Dolby Digital Audio (Glossy Black)",
    price: "₹11,990",
    originalPrice: "₹18,900",
    discount: "-37%",
    image: "/images/samsungsmarttv.png",
    link: "https://amzn.to/4jZuA9h",
    badge: "Top Trending",
  },
  // Add more products here as needed
];

function DealOfTheDay() {
  const [deals, setDeals] = useState([]);
  const [countdown, setCountdown] = useState("");

  // Set today's deals (same for everyone)
  useEffect(() => {
    const selectedDeals = ALL_PRODUCTS.slice(0, 3); // Pick top 3 (you can make it dynamic too)
    setDeals(selectedDeals);
  }, []);

  // Countdown to midnight UTC
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const midnightUTC = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1));
      const diff = Math.max(midnightUTC.getTime() - now.getTime(), 0);

      const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
      const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, "0");

      setCountdown(`${hours}:${minutes}:${seconds}`);
    };

    updateCountdown(); // Initial call
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-yellow-600">🔥 Deal of the Day</h1>
      <p className="text-center text-gray-600 mb-6">⏳ Time left: <strong>{countdown}</strong></p>

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
