import React, { useState } from "react";
import pic from "../assets/1.jpg";
import google from "../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/button";

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const trimmedFirst = firstName.trim();
    const trimmedLast = lastName.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedFirst || !trimmedLast || !trimmedEmail || !trimmedPassword) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (trimmedPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    const username =
      `${trimmedFirst}_${trimmedLast}_${Date.now()}`.toLowerCase();

    try {
      const res = await fetch(
        "http://62.72.46.248:1337/api/auth/local/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email: trimmedEmail,
            password: trimmedPassword,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.jwt);
        navigate("/");
      } else {
        const msg = data?.error?.message || "Registration failed.";
        setError(msg);
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 m-auto pt-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-grow items-center justify-center">
          <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="w-1/2 hidden md:block">
              <img
                src={pic}
                alt="Signup Illustration"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                Create an account
              </h2>
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-purple-600 font-semibold">
                  Login
                </Link>
              </p>

              <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-1/2 p-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="w-1/2 p-2 border rounded-lg"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 border rounded-lg mt-2"
                />
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-2 border rounded-lg mt-2"
                />

                <div className="flex items-center mt-2">
                  <input type="checkbox" id="terms" className="mr-2" required />
                  <label htmlFor="terms" className="text-gray-600">
                    I agree to the{" "}
                    <a href="#" className="text-purple-600 font-semibold">
                      Terms & Conditions
                    </a>
                  </label>
                </div>

                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

                <Button
                  label={loading ? "Creating Account..." : "Create Account"}
                  className="w-full mt-3"
                  type="submit"
                  disabled={loading}
                />
              </form>

              <div className="mt-4 flex justify-center gap-4">
                <button className="border px-4 py-2 rounded-lg flex items-center gap-2">
                  <img src={google} alt="Google" className="w-5 h-5" />
                  Google
                </button>
                <button className="border px-4 py-2 rounded-lg flex items-center gap-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                    alt="Apple"
                    className="w-5 h-5"
                  />
                  Apple
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
