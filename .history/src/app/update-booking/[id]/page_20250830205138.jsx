import React from 'react'
import UpdateBookingForm from './components/UpdateBookingForm';

const UpdateBookingPage = async ({p}) => {
  return (
    <div>
        <h2>Update booking</h2>

        <UpdateBookingForm></UpdateBookingForm>
    </div>
  )
}

export default UpdateBookingPage;