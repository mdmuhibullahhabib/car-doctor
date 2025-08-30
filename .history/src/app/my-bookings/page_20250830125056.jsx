"use client"
import React, { useEffect, useState } from 'react'

const MyBookingPage = () => {
    const [data , setData] = useState([])
    useEffect(() => {
        const myBooking  = async () =>{
            const res = await fetch("htt")
        }
    })
  return (
    <div>MyBookingPage</div>
  )
}

export default MyBookingPage;