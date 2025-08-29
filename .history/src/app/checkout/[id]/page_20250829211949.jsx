import React from 'react'

const CheckoutPage = async ({params}) => {
      const p = await params;
  const res= await fetch(`http://localhost:3000/api/service/${p.id}`);
  const data = await res.json();
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/car-repair.jpg"
          alt="Car Repair"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Check Out</h1>
          <p className="text-sm mt-2 bg-red-500 px-4 py-1 rounded-full">Home / Checkout</p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="p-3 border rounded-lg w-full"
            required
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="p-3 border rounded-lg w-full"
            required
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            className="p-3 border rounded-lg w-full"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 border rounded-lg w-full"
            type="email"
            required
          />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="p-3 border rounded-lg w-full mt-6 h-32"
        />
        <button
          type="submit"
          className="w-full mt-6 bg-[#FF3811] text-white py-3 rounded-lg font-bold"
        >
          Order Confirm
        </button>
      </form>
    </div>
  )
}

export default CheckoutPage