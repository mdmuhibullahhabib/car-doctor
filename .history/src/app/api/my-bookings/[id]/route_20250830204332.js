import dbConnect, { collectionNamesobj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const GET = async (req, {params}) => {
    const p = await params;
    const bookingCollection= dbConnect(collectionNamesobj.bookingCollection)
    const query = {_id: new ObjectId(params.id)}
    const singleBooking = await bookingCollection.findOne(qu)

}