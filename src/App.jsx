import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa"; // ✅ Import Arrow Icon
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

// Home component (Hero section + products)
const Home = () => {
  const scrollToProducts = () => {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
      >
        <div className="text-center bg-white bg-opacity-70 p-10 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-gray-900">
            Welcome to My eCommerce Store
          </h2>
          <p className="mt-2 text-lg text-gray-700 flex items-center justify-center">
            Click on Shop Now to explore products  
            <FaArrowDown className="ml-2 animate-bounce text-2xl text-blue-600" /> {/* ✅ Arrow Beside Text */}
          </p>

          {/* "Shop Now" Button */}
          <button
            onClick={scrollToProducts}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Product Listings */}
      <div id="products">
        <ProductList />
      </div>
    </div>
  );
};

export default App;
