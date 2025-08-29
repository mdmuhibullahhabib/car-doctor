"use server"

const { default: dbConnect } = require("@/lib/dbConnect");

const loginUser = async (payload) =>{
    const {email, password} = payload;
    const userCollection = dbConnect()
}