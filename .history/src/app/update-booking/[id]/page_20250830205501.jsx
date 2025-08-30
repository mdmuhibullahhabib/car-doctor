import React from 'react'
import UpdateBookingForm from './components/UpdateBookingForm';

const UpdateBookingPage = async ({params}) => {
    const p = await params;
    const res = await fetch(`http:localhost:3000/api/my-bookings/${p.id}`);
    const data = await res.json();
  return (
    <div>
        <h2>Update booking</h2>

        <UpdateBookingForm data={}></UpdateBookingForm>
    </div>
  )
}

export default UpdateBookingPage;