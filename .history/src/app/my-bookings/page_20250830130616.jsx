"use client"
import React, { useEffect, useState } from 'react'

const MyBookingPage = () => {
    const [bookings , setData] = useState([])
    useEffect(() => {
        const myBooking  = async () =>{
            const res = await fetch("http://localhost:3000/api/service");
            const d = await res.json();
            setData(d)
        }
    }, []);
  return (
    <div>
        <h2>My All Bookings</h2>
        
    </div>
  )
}

export default MyBookingPage;