import { signIn } from 'next-auth/react';
import React from 'react'
import { FaFacebook, FaLinkedin, FaGoogle, FaGithub } from "react-icons/fa";
import toast from "react-hot"
const SocialLogin = () => {
    const handleSocialLogin = async (providerName) => {
        console.log(providerName)
        const result = await signIn(providerName, {redirect:false});
        if(result.ok){
            router.push('/')
            toast.success(`Logged in successfully useing ${providerName}`)
        }else{
            toast.error('something went wrong')
        }
        console.log(result)
    }
    return (
        <div className="flex justify-center gap-4 text-2xl">
            <FaGoogle onClick={() => handleSocialLogin("google")} className="text-red-500 cursor-pointer hover:scale-110 transition" />
            <FaGithub onClick={() => handleSocialLogin("github")} className="text-blue-600 cursor-pointer hover:scale-110 transition" />
            <FaLinkedin className="text-blue-700 cursor-pointer hover:scale-110 transition" />
        </div>
    )
}

export default SocialLogin