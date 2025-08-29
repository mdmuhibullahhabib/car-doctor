import dbConnect, { collectionNamesobj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) =>{
    const body = await req.json()
    const bookingCollection = dbConnect(collectionNamesobj)
    console.log(body)
    return NextResponse.json({})
}