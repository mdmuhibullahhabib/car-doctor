// "use client"
import React, { useEffect, useState } from 'react'
import MyBookingsTable from './components/MyBookingsTable';

        const myBooking  = async () =>{
            const res = await fetch("http://localhost:3000/api/service");
            const d = await res.json();
            setData(d)
        };

const MyBookingPage = () => {
    const data = await myBooking();
    // const [data , setData] = useState([])
    // useEffect(() => {
    //     const myBooking  = async () =>{
    //         const res = await fetch("http://localhost:3000/api/service");
    //         const d = await res.json();
    //         setData(d)
    //     };
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