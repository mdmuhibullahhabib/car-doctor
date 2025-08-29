"use server";

import dbConnect, { collectionNamesobj } from "@/lib/dbConnect";

export const registerUser = async (payload) =>{
    const userCollection = dbConnect(collectionNamesobj)
}