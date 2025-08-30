"use client";

import { useState, useEffect } from "react";

const MyBookingsTable = ({ data }) => {
    const [bookings, setBookings] = useState([]);
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
        <div className="max-w-4xl mx-auto mt-8">
            {/* Bookings Table */}
            <table className="w-full border">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2 border">Service</th>
                        <th className="p-2 border">Date</th>
                        <th className="p-2 border">Price</th>
                        <th className="p-2 border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((booking) => (
                        <tr key={booking._id}>
                            <td className="p-2 border flex items-center gap-2">
                                <img
                                    src={booking.service_img}
                                    alt={booking.service_name}
                                    className="w-10 h-10 rounded"
                                />
                                {booking.service_name}
                            </td>
                            <td className="p-2 border">{booking.date}</td>
                            <td className="p-2 border">${booking.service_price}</td>
                            <td className="p-2 border">
                                <button
                                    onClick={() => handleDeleteClick(booking)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Confirmation Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
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
