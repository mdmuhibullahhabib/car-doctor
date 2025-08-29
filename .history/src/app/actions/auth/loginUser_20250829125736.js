"use server"

const { default: dbConnect, collectionNamesobj } = require("@/lib/dbConnect");

const loginUser = async (payload) =>{
    const {email, password} = payload;
    const userCollection = dbConnect(collectionNamesobj.userCollection)
    const user = await userCollection.findOne
}