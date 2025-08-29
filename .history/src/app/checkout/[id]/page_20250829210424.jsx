import React from 'react'

const CheckoutPage = () => {
      const p = await params;
  const res= await fetch(`http://localhost:3000/api/service/${p.id}`);
  const data = await res.json();
  
  return (
    <div>CheckoutPage</div>
  )
}

export default CheckoutPage