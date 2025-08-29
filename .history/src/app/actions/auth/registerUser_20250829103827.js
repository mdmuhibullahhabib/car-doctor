"use server";

import dbConnect, { collectionNamesobj } from "@/lib/dbConnect";

vali

export const registerUser = async (payload) =>{
    const userCollection = dbConnect(collectionNamesobj.userCollection)
    const result = await userCollection.insertOne(payload)
}