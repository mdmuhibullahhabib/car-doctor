"use client"
import React, { useEffect, useState } from 'react'
import MyBookingsTable from './components/MyBookingsTable';



const MyBookingPage = () => {
    const data = await
    // const [data , setData] = useState([])
    // useEffect(() => {

    //     myBooking()
    // }, []);
  return (
    <div>
        <h2>My All Bookings</h2>
        <div className="">
            <MyBookingsTable data={data}></MyBookingsTable>
        </div>
        
    </div>
  )
}

export default MyBookingPage;