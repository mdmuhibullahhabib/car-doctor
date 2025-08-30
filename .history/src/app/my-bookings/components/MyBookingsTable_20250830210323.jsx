"use client";
import React from "react";
import DeleteBookingButton from "./DeleteBookingButton";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
const MyBookingsTable = ({ data, onDelete }) => {

  return (
    <div className="max-w-4xl mx-auto p-6">
      {data.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <div className="space-y-4">
          {data.map((booking) => (
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
              <Link href={`update-`}>
              <button> <FaEdit/> </button>
              </Link>
              {/* Delete Button (No Modal, replaces pending) */}
              <DeleteBookingButton id={booking._id}></DeleteBookingButton>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookingsTable;
