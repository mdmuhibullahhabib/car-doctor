import React from "react";
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* Left Illustration */}
        <div className="flex items-center justify-center p-6 bg-gray-50">
          <img
            src="/register-illustration.svg" // replace with your image path
            alt="Sign Up Illustration"
            className="max-w-xs md:max-w-sm"
          />
        </div>

        {/* Right Form */}
        <div className="p-8 md:p-10">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          

          <p className="text-center text-gray-500 my-4">Or Sign Up with</p>
          <div className="flex justify-center gap-4 text-2xl">
            <FaFacebook className="text-blue-600 cursor-pointer hover:scale-110 transition" />
            <FaLinkedin className="text-blue-700 cursor-pointer hover:scale-110 transition" />
            <FaGoogle className="text-red-500 cursor-pointer hover:scale-110 transition" />
          </div>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-red-500 font-medium">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
