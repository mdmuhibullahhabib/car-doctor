"use server";

import dbConnect, { collectionNamesobj } from "@/lib/dbConnect";
export const registerUser = async (payload) => {
    const userCollection = dbConnect(collectionNamesobj.userCollection)
consol.log(payload)
    // validation
    const { email, password} = payload;
    if(!email || !password) return{ success : false}
    const user = await userCollection.findOne.findOne({ email: payload.email });

    if (!user) {
        const result = await userCollection.insertOne(payload)
        const { _id} = result;
        return { _id};
    }
    return { success : false};
 
}