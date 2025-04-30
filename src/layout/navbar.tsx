import pic from "../assets/logo.png";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "../components/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in based on token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists, false if not
  }, []); // This effect runs once when the component mounts

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setIsLoggedIn(false); // Update the state to reflect logged-out status
  };

  return (
    <nav className="flex items-center justify-between px-6 py-2 w-full bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={pic} alt="logo" role="logo" className="w-24 sm:w-30" />
      </div>

      {/* Hamburger Icon (Visible on smaller screens) */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu (Hidden on larger screens) */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <div className="p-4">
          <button onClick={() => setIsOpen(false)} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col items-start gap-3 p-4">
          <Link
            to="/home"
            className="px-4 py-2 font-semibold hover:text-purple-600"
          >
            Home
          </Link>
          <Link
            to="/story"
            className="px-4 py-2 font-semibold hover:text-purple-600"
          >
            Story
          </Link>
          <Link
            to="/favorite"
            className="px-4 py-2 font-semibold hover:text-purple-600"
          >
            Favorite
          </Link>
        </div>
      </div>

      {/* Desktop Menu (Visible only on larger screens) */}
      <div className="hidden sm:flex items-center gap-3 p-2 rounded-full border-2 border-purple-500 transition-all duration-300 hover:scale-105">
        <Link
          to="/#"
          className="px-4 py-1 font-semibold hover:text-purple-600 transition-colors duration-300"
        >
          Home
        </Link>
        <span className="border-l-2 border-purple-500 h-6"></span>
        <Link
          to="/story"
          className="px-4 py-1 font-semibold hover:text-purple-600 transition-colors duration-300"
        >
          Story
        </Link>
        <span className="border-l-2 border-purple-500 h-6"></span>
        <Link
          to="/favorite"
          className="flex items-center gap-1.5 px-4 py-1 font-semibold hover:text-purple-600 transition-colors duration-300"
        >
          <Heart className="w-4 h-4" /> Favorite
        </Link>
      </div>

      {/* Conditional rendering for Login and Register buttons */}
      {!isLoggedIn && ( // Show buttons only if not logged in
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/register"
            className="px-2 sm:px-4 py-1 font-semibold hover:underline"
          >
            Sign up
          </Link>
          <Link to="/login">
            <Button label="Login" />
          </Link>
        </div>
      )}

      {/* If the user is logged in, show Profile and Logout options */}
      {isLoggedIn && (
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="px-4 py-1 font-semibold text-red-600 hover:underline"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
