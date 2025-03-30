import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">About Us</h1>

      <p className="text-lg text-gray-700 text-center">
        Welcome to <strong>[Your Store Name]</strong>! We help you discover the
        <strong> best deals</strong> on top-quality products. Our mission is to bring you
        the latest gadgets, electronics, and everyday essentials <strong>at the best prices</strong>,
        all while ensuring a smooth and hassle-free shopping experience.
      </p>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
        <ul className="list-disc ml-6 text-gray-700 text-lg">
          <li>✅ <strong>Curated Selection:</strong> We handpick the best products for you.</li>
          <li>✅ <strong>Updated Prices:</strong> We provide real-time Amazon price updates.</li>
          <li>✅ <strong>Convenience:</strong> Easily compare and find what suits your needs.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">How It Works</h2>
        <p className="text-lg text-gray-700">
          We are an <strong>Amazon Affiliate Store</strong>, meaning all purchases are made directly
          on <strong>Amazon</strong> through our <strong>trusted affiliate links</strong>. This ensures 
          <strong> safe transactions, fast delivery, and secure payments</strong>—straight from Amazon itself!
        </p>
      </div>

      <div className="mt-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Support Us</h2>
        <p className="text-lg text-gray-700">
          Whenever you buy a product using our links, we earn a small commission
          <strong> at no extra cost to you</strong>. Your support helps us keep the site running
          and bring you even better deals! 💖
        </p>
      </div>
    </div>
  );
};

export default About;
