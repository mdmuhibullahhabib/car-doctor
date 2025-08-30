"use client";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import DeleteBookingButton from "./DeleteBookingButton";

const MyBookingsTable = ({ data, onDelete }) => {
  const [bookings, setBookings] = useState(data || []);

  const handleDelete = async (id) => {
    const res = await fetch(`/api/bookings/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setBookings(bookings.filter((b) => b._id !== id));
      toast.success("Booking deleted successfully!");
    } else {
      toast.error("Failed to delete booking!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 border hover:shadow-lg transition"
            >
              {/* Booking Info */}
              <div className="flex items-center gap-4">
                <img
                  src={booking.service_img}
                  alt={booking.service_name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{booking.service_name}</h2>
                  <p className="text-gray-500">${booking.service_price}</p>
                </div>
              </div>

              {/* Date */}
              <p className="text-gray-600">{booking.date}</p>

              {/* Delete Button (No Modal, replaces pending) */}
              <DeleteBookingButton></DeleteBookingButton>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookingsTable;
