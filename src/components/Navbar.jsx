import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Store</h1>
        <div>
          <Link to="/" className="mx-4 hover:text-gray-400">Home</Link>
          <Link to="/shop" className="mx-4 hover:text-gray-400">Shop</Link>
          <Link to="/about" className="mx-4 hover:text-gray-400">About</Link>
          <Link to="/contact" className="mx-4 hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
