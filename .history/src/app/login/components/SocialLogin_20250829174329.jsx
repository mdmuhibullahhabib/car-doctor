import React from 'react'

const SocialLogin = () => {
  return (
        <div className="flex justify-center gap-4 text-2xl">
                <FaFacebook className="text-blue-600 cursor-pointer hover:scale-110 transition" />
                <FaLinkedin className="text-blue-700 cursor-pointer hover:scale-110 transition" />
                <FaGoogle className="text-red-500 cursor-pointer hover:scale-110 transition" />
            </div>
  )
}

export default SocialLogin