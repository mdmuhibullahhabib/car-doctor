import React from 'react'

const DeleteBookingButton = (id) => {

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