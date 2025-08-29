import React from 'react'

const RegisterForm = () => {
  return (
              <form className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600">Confirm Password</label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full"
              />
            </div>

            <button className="btn bg-red-500 hover:bg-red-600 text-white w-full mt-2">
              Sign Up
            </button>
          </form>
  )
}

export default RegisterForm