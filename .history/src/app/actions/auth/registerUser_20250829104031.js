"use server";

import dbConnect, { collectionNamesobj } from "@/lib/dbConnect";
export const registerUser = async (payload) =>{
    const userCollection = dbConnect(collectionNamesobj.userCollection)

// validation
const user = userCollection.findOne.findOne


    const result = await userCollection.insertOne(payload)
}