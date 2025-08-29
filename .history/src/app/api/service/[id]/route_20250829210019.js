import dbConnect, { collectionNamesobj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
const {}

export const GET = async (req, {params}) =>{
      const p = await params;
      const servicesCollection = dbConnect(collectionNamesobj.servicesCollection);
      const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });

      return NextResponse.json(data);

}