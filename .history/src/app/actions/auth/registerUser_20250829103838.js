"use server";

import dbConnect, { collectionNamesobj } from "@/lib/dbConnect";

// validation


export const registerUser = async (payload) =>{
    const userCollection = dbConnect(collectionNamesobj.userCollection)
    const result = await userCollection.insertOne(payload)
}