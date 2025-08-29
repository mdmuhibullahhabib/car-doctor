"use server";

import dbConnect, { collectionNamesobj } from "@/lib/dbConnect";
export const registerUser = async (payload) => {
    const userCollection = dbConnect(collectionNamesobj.userCollection)

    // validation
    const {name, email, password} = payload;
    if()
    const user = userCollection.findOne.findOne({ email: payload.email });

    if (!user) {
        const result = await userCollection.insertOne(payload)
        return result;
    }
    return null;


}