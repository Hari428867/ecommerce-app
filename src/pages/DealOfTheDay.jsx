import React, { useEffect, useState } from "react";

const ALL_PRODUCTS = [
  { id: 1, name: "iPhone 14 Pro", price: "₹1,20,000", image: "/images/iphone.jpg" },
  { id: 2, name: "Samsung Galaxy S23", price: "₹85,000", image: "/images/samsung.jpg" },
  { id: 3, name: "OnePlus Nord CE 3", price: "₹24,999", image: "/images/oneplus.jpg" },
  // Add more dummy affiliate products
];

const ONE_DAY_MS = 24 * 60 * 60 * 1000;

function DealOfTheDay() {
  const [deals, setDeals] = useState([]);
  const [countdown, setCountdown] = useState("");

  // Generate or fetch today's deal
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("deals")) || {};
    const now = new Date();

    if (!saved.startTime || new Date(saved.startTime).toDateString() !== now.toDateString()) {
      // New day: Pick random 2-3 products
      const selectedDeals = ALL_PRODUCTS.sort(() => 0.5 - Math.random()).slice(0, 3);
      const startTime = new Date().toISOString();

      const newDeals = { startTime, items: selectedDeals };
      localStorage.setItem("deals", JSON.stringify(newDeals));
      setDeals(selectedDeals);
    } else {
      setDeals(saved.items);
    }
  }, []);

  // Timer logic
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🔥 Deal of the Day</h1>
      <p className="text-gray-600 mb-4">⏳ Time left: <strong>{countdown}</strong></p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {deals.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow">
            <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-2" />
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-green-600 font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DealOfTheDay;
