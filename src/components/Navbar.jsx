import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Brand and Trust Label */}
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">Mini Kart</h1>
          
          {/* ✅ Trusted by Amazon */}
          <div className="flex items-center bg-green-700 text-white px-2 py-1 rounded-full text-sm shadow-md">
            <span className="mr-1">✅</span>
            <span className="mr-1">Trusted by</span>
            <span className="font-bold text-yellow-400">Amazon</span>
          </div>
        </div>

        {/* Navigation Links */}
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
