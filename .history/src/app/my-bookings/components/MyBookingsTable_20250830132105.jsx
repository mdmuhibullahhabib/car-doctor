"use client";

import { useState } from "react";

const MyBookingsTable = ({ data }) => {
    const [bookings, setBookings] = useState(data || []);
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Open confirmation modal
    const handleDeleteClick = (booking) => {
        setSelectedBooking(booking);
        setShowModal(true);
    };

    // Delete booking after confirmation
    const confirmDelete = async () => {
        if (!selectedBooking) return;

        const res = await fetch(`/api/bookings/${selectedBooking._id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            setBookings(bookings.filter((b) => b._id !== selectedBooking._id));
        }

        setShowModal(false);
        setSelectedBooking(null);
    };

    return (
        <div className="max-w-5xl mx-auto mt-8 px-4">
            <h2 className="text-2xl font-bold mb-6">My Bookings</h2>

            {/* Responsive Card Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookings.map((booking) => (
                    <div
                        key={booking._id}
                        className="bg-white p-4 rounded-xl shadow-md flex flex-col"
                    >
                        <img
                            src={booking.service_img}
                            alt={booking.service_name}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold">{booking.service_name}</h3>
                        <p className="text-gray-600 text-sm mt-1">
                            Date: {booking.date}
                        </p>
                        <p className="text-gray-800 font-bold mt-1">
                            ${booking.service_price}
                        </p>
                        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                            {booking.message}
                        </p>

                        <button
                            onClick={() => handleDeleteClick(booking)}
                            className="mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            {/* Confirmation Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
                        <h3 className="text-lg font-bold mb-4">
                            Are you sure you want to delete this booking?
                        </h3>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-gray-300 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Yes, Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyBookingsTable;
