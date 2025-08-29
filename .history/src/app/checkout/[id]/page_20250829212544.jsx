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
      <CheckoutForm
    </div>
  )
}

export default CheckoutPage