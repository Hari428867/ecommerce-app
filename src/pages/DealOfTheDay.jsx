import React, { useEffect, useState } from "react";

const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Amazfit Active 42mm AMOLED Smart Watch, Built in GPS, 14day Battery, 5ATM Water Resistant, for iOS & Android, Accurate Readings, BT Calls, Strava Support, Temperature Sensor, VO2 Max (Midnight Black)",
    price: "₹6,999",
    originalPrice: "₹19,999",
    discount: "-65%",
    image: "/images/Amazfitwatch.png",
    link: "https://amzn.to/42SFWFi",
    badge: "Top Trending",
  }
];

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

function DealOfTheDay() {
  const [deals, setDeals] = useState([]);
  const [countdown, setCountdown] = useState("");

  // Load or generate deals for today
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("deals")) || {};
    const now = new Date();

    if (!saved.startTime || new Date(saved.startTime).toDateString() !== now.toDateString()) {
      const selectedDeals = ALL_PRODUCTS.sort(() => 0.5 - Math.random()).slice(0, 3);
      const newDeals = {
        startTime: new Date().toISOString(),
        items: selectedDeals,
      };
      localStorage.setItem("deals", JSON.stringify(newDeals));
      setDeals(selectedDeals);
    } else {
      setDeals(saved.items);
    }
  }, []);

  // Countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      const saved = JSON.parse(localStorage.getItem("deals"));
      if (saved?.startTime) {
        const end = new Date(saved.startTime).getTime() + ONE_DAY_MS;
        const now = Date.now();
        const diff = Math.max(end - now, 0);

        const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
        const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
        const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, "0");

        setCountdown(`${hours}:${minutes}:${seconds}`);
      }
    }, 1000);

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
