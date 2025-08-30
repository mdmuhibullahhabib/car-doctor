import dbConnect, { collectionNamesobj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// for get data
export const GET = async (req, { params }) => {
  const p = await params;
  const bookingCollection = dbConnect(collectionNamesobj.bookingCollection)
  const query = { _id: new ObjectId(p.id) }
  const singleBooking = await bookingCollection.findOne(query)

  return NextResponse.json(singleBooking)
}

// বুকিং ডেটা আপডেট করার জন্য PUT API
export const PUT = async (req, { params }) => {
    const p = await params;
  const body = await req.json();
  const bookingCollection = dbConnect(collectionNamesobj.bookingCollection);
  const query = { _id: new ObjectId(p.id) };

  const updateDoc = {
    $set: {
      phone: body.phone,
      address: body.address,
      date: body.date,
      message: body.message,
    },
  };

  const result = await bookingCollection.updateOne(query, updateDoc);
  return NextResponse.json(result);
};