"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

const UpdateBookingForm = ({ data }) => {
    const router = useRouter()
    const { data: session } = useSession()
    console.log(data)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const bookingData = {
            // user input
            phone: form.phone.value,
            address: form.address.value,
            date: form.date.value,
            message: form.message.value,
        };
        toast("Submitting...")

    const res = await fetch(`http:localhost:3000/api/my-bookings/${p.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

        const postedResponse = await res.json();
        if (postedResponse.insertedId) {
            toast.success("Booking Submit Successfully")
            router.push('/')
        }
        console.log("post data", postedResponse);
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-md"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                    name="firstName"
                    value={session?.user?.name || ""}
                    placeholder="Name"
                    className="p-3 border rounded-lg w-full"
                    readOnly
                />

                <input
                    name="email"
                    value={session?.user?.email || ""}
                    placeholder="Your Email"
                    className="p-3 border rounded-lg w-full"
                    type="email"
                    readOnly
                />
                <input
                    name="price"
                    value={data?.service_price || ""}
                    className="p-3 border rounded-lg w-full"
                    readOnly
                />
                <input
                    name="phone"
                    type="number"
                    defaultValue={data?.phone || ""}
                    placeholder="Your Phone"
                    className="p-3 border rounded-lg w-full"
                    required
                />
                <input
                    name="address"
                    type="text"
                    defaultValue={data?.address || ""}

                    placeholder="Your Address"
                    className="p-3 border rounded-lg w-full"
                    required
                />
                <input
                    name="date"
                    type="date"
                    defaultValue={data?.date || ""}

                    className="p-3 border rounded-lg w-full"
                    required
                />
            </div>
            <textarea
                name="message"
                type="text"
                defaultValue={data?.message || ""}

                placeholder="Your Message"
                className="p-3 border rounded-lg w-full mt-6 h-32"
            />
            <button
                type="submit"
                className="w-full mt-6 bg-[#FF3811] text-white py-3 rounded-lg font-bold"
            >
                Order Confirm
            </button>
        </form>
    )
}

export default UpdateBookingForm;