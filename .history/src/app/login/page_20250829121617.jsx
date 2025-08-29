"use client";
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* Left Illustration */}
        <div className="flex items-center justify-center p-6 bg-gray-50">
          <img
            src="/login-illustration.svg" // Replace with your own image
            alt="Login Illustration"
            className="max-w-xs md:max-w-sm"
          />
        </div>

        {/* Right Form */}

      </div>
    </div>
  );
};

export default LoginPage;
