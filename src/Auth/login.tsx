import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/button";
import Pic from "../assets/mac-os-mojave-5k-np-2048x2048.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://62.72.46.248:1337/api/auth/local", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });

      const data = await res.json();

      console.log(data, "===data,");
      if (res.ok) {
        localStorage.setItem("token", data.jwt);
        console.log("Login successful:", data);
        navigate("/"); // redirect to home or dashboard
      } else {
        setError(data.error?.message || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-lg w-[80%] flex"
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
              <span className="font-semibold text-purple-600">Sign Up</span>.
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              label={loading ? "Logging in..." : "Login"}
              disabled={loading}
            />
          </form>
        </div>
      </motion.div>
    </div>
  );
}
