"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";

const MyBookingsTable = ({ bookings, handleDelete }) => {
  const [selectedBooking, setSelectedBooking] = useState(null);

  const confirmDelete = (id) => {
    setSelectedBooking(id);
    document.getElementById("delete_modal").showModal();
  };

  const deleteBooking = () => {
    handleDelete(selectedBooking);
    setSelectedBooking(null);
    document.getElementById("delete_modal").close();
    toast.success("Booking deleted successfully!");
  };

  return (
    <div className="p-6">
      {bookings?.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 border hover:shadow-lg transition"
            >
              {/* Delete Button */}
              <button
                onClick={() => confirmDelete(booking._id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTimes size={18} />
              </button>

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

              {/* Status */}
              <span className="px-3 py-1 rounded-full text-white bg-red-500 text-sm">
                Pending
              </span>
            </div>
          ))}
        </div>
      )}

      {/* DaisyUI Delete Confirmation Modal */}
      <dialog id="delete_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm Deletion</h3>
          <p className="py-4">Are you sure you want to delete this booking?</p>
          <div className="modal-action">
            <button
              onClick={() => document.getElementById("delete_modal").close()}
              className="btn"
            >
              Cancel
            </button>
            <button onClick={deleteBooking} className="btn btn-error text-white">
              Delete
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyBookingsTable;

