"use client"
import { useSession } from 'next-auth/react';
import React from 'react'

const CheckoutForm = ({ data }) => {

    const { data:session } = useSession()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const message = form.message.value;

        const bookingData = ({ name, email, number, message })
        console.log(bookingData)
        console.log(session)


        // const res = await fetch("/api/checkout", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(formData),
        // });
        // if (res.ok) {
        //   alert("Order Confirmed!");
        //   setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
        // } else {
        //   alert("Submission failed!");
        // }
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-md"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                    name="firstName"
                    value={session?.user?.name}
                    placeholder="Name"
                    className="p-3 border rounded-lg w-full"
                    readOnly
                />
           
                <input
                    name="email"
                    value={session?.user?.email}
                    placeholder="Your Email"
                    className="p-3 border rounded-lg w-full"
                    type="email"
                    readOnly
                />
            </div>
            <textarea
                name="message"
                type="text"
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

export default CheckoutForm