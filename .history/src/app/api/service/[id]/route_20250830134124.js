import dbConnect, { collectionNamesobj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import {ObjectId} from "mongodb";

export const DELETE = async (req, {params}) =>{
      const p = await params;
      const bookingCollection = dbConnect(collectionNamesobj.bookingCollection)
      const deleteResponse = await bookingCollection
}
const

export const GET = async (req, {params}) =>{
      const p = await params;
      const servicesCollection = dbConnect(collectionNamesobj.servicesCollection);
      const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });

      return NextResponse.json(data);
}
