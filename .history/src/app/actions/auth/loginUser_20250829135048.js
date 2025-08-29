"use server";

import dbConnect, { collectionNamesobj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";


export const loginUser = async (payload) =>{
    const {email, password} = payload;
    const userCollection = dbConnect(collectionNamesobj.userCollection)
    const user = await userCollection.findOne({email})
    if(!user) return null
    const isPasswordOk = bcrypt.compare(user.password, password)
    if(!isPasswordOk) return null

    return null;
}