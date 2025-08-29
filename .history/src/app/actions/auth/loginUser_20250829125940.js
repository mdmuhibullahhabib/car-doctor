"use server"

const { default: dbConnect, collectionNamesobj } = require("@/lib/dbConnect");

const loginUser = async (payload) =>{
    const {email, password} = payload;
    const userCollection = dbConnect(collectionNamesobj.userCollection)
    const user = await userCollection.findOne({email})
    if(!user) return null
    const isPasswordOk = bcrypt.compare(user.password, password)
    if()
}