import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/button";
import Pic from "../assets/mac-os-mojave-5k-np-2048x2048.jpg"; // Ensure you have this image in your assets folder
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with: ${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-lg w-[80%]  flex"
      >
        <div className="w-1/2">
          <img
            src={Pic}
            alt="Desert"
            className="w-full h-[70vh] object-cover rounded-2xl"
          />
        </div>
        <div className="w-1/2 p-8 items-center">
          <h2 className="text-2xl font-bold mb-2">Already have an account!</h2>
          <p className="text-gray-600 mb-6">
            Don’t have an account?{" "}
            <Link to="/register">
              <span className="font-semibold text-purple-600">Sign In</span>.
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <Button type="submit" label="Login" />
          </form>
        </div>
      </motion.div>
    </div>
  );
}
