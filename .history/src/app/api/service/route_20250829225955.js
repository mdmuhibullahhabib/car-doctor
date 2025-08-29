import { NextResponse } from "next/server";

export const POST = async (req) =>{
    const body = await req.json()
    const bookingCollection = dbConnec()
    console.log(body)
    return NextResponse.json({})
}