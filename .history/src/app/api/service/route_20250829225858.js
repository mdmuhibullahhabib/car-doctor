import { NextResponse } from "next/server";

export const POST = async (req) =>{
    const body = await req.json()
    const bo
    console.log(body)
    return NextResponse.json({})
}