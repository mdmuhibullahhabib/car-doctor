import React from "react";
import RegisterForm from "./components/RegisterForm";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* Left Illustration */}
        <div className="flex items-center justify-center p-6 bg-gray-50">
          <Image
          src={"/assets/images/login/login.svg"}
          width={460}
          ={500}
          />
        </div>

        {/* Right Form */}
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
};

export default RegisterPage;
