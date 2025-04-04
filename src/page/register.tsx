import React from "react";
import pic from "../assets/1.jpg";
import google from "../assets/google.png";
const Register: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-grow items-center justify-center">
        <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-1/ hidden md:block">
            <img
              src={pic}
              alt="Signup Illustration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Form Section */}
          <div className="w-full md:w-1/1 p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Create an account
            </h2>
            <p className="text-gray-600">
              Already have an account?{" "}
              <a href="#" className="text-purple-600 font-semibold">
                Login
              </a>
            </p>

            {/* Form Section */}
            <form className="mt-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-1/2 p-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-1/2 p-2 border rounded-lg"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded-lg mt-6"
              />
              <input
                type="password"
                placeholder="Your Password"
                className="w-full p-2 border rounded-lg mt-6"
              />

              <div className="flex items-center mt-4">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-purple-600 font-semibold">
                    Terms & Condition
                  </a>
                </label>
              </div>

              <button className="w-full bg-purple-600 text-white py-2 rounded-lg mt-6 hover:bg-purple-700 transition duration-300">
                Create account
              </button>
            </form>

            {/* Social Logins */}
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
    </div>
  );
};

export default Register;
``;
