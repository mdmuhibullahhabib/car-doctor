import React from 'react'
import { FaTrash } from 'react-icons/fa'

const DeleteBookingButton = (id) => {

    const handleDelete = async(id) =>{
        const res = await fetch (`http://localhost:3000/api/service/${id}`, {
            method : "DELETE"
        })
    }
    return (
        <>
            <button
                onClick={() => handleDelete(id)}
                className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-2"
            >
                <FaTrash /> Delete
            </button>
        </>
    )
}

export default DeleteBookingButton