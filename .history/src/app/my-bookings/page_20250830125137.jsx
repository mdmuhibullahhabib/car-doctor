"use client"
import React, { useEffect, useState } from 'react'

const MyBookingPage = () => {
    const [data , setData] = useState([])
    useEffect(() => {
        const myBooking  = async () =>{
            const res = await fetch("http://localhost:3000/api/service")
        }
    })
  return (
    <div>MyBookingPage</div>
  )
}

export default MyBookingPage;