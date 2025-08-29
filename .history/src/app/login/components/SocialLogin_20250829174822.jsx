import React from 'react'
import { FaFacebook, FaLinkedin, FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
        <div className="flex justify-center gap-4 text-2xl">
                <FaGoogle className="text-red-500 cursor-pointer hover:scale-110 transition" />
                <FaGithub onClick={( => handleSocialLogin("github")} className="text-blue-600 cursor-pointer hover:scale-110 transition" />
                <FaLinkedin className="text-blue-700 cursor-pointer hover:scale-110 transition" />
            </div>
  )
}

export default SocialLogin