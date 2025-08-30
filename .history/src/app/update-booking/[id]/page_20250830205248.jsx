import React from 'react'
import UpdateBookingForm from './components/UpdateBookingForm';

const UpdateBookingPage = async ({params}) => {
    const p = await params;
    const res = await fetch(`http:localhost:30000`)
  return (
    <div>
        <h2>Update booking</h2>

        <UpdateBookingForm></UpdateBookingForm>
    </div>
  )
}

export default UpdateBookingPage;