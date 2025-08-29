import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) =>{
      const p = await params;
      const servicesCollection = dbConnect(collectionNamesob.servicesCollection);
      const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });

      return NextResponse.json(data)

}