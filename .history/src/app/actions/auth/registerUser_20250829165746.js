"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNamesobj } from "@/lib/dbConnect";
export const registerUser = async (payload) => {
    const userCollection = dbConnect(collectionNamesobj.userCollection)
console.log(payload)

    // validation
    const { email, password} = payload;
    if(!email || !password) return null
    
    const user = await userCollection.findOne({ email: payload.email });

    if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10)
        payload.password= hashedPassword
        const result = await userCollection.insertOne(payload)
        result.insertedId = result.insertedId.toString()
        return result;
    }
    return null;
 
}