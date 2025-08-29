"use client";
import { registerUser } from '@/app/actions/auth/registerUser';
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";

const RegisterForm = () => {
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const form = e.target;
       const name = form.name.value;
       const email = form.email.value;
       const password = form.password.value;

       registerUser({name, email, password})
    }
    return (
        <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 text-gray-600">Name</label>
                    <input
                        type="text"
                        type="text"
                        placeholder="Your name"
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-gray-600">Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Your email"
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-gray-600">Confirm Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Your password"
                        className="input input-bordered w-full"
                    />
                </div>

                <button className="btn bg-red-500 hover:bg-red-600 text-white w-full mt-2">
                    Sign Up
                </button>
            </form>

            <p className="text-center text-gray-500 my-4">Or Sign Up with</p>
            <div className="flex justify-center gap-4 text-2xl">
                <FaFacebook className="text-blue-600 cursor-pointer hover:scale-110 transition" />
                <FaLinkedin className="text-blue-700 cursor-pointer hover:scale-110 transition" />
                <FaGoogle className="text-red-500 cursor-pointer hover:scale-110 transition" />
            </div>

            <p className="text-center mt-6 text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-red-500 font-medium">
                    Login
                </Link>
            </p>
        </div>
    )
}

export default RegisterForm