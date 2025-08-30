import dbConnect, { collectionNamesobj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { revalidatePath } from "next/cache";

export const DELETE = async (req, { params }) => {

      const p = await params;
      const bookingCollection = dbConnect(collectionNamesobj.bookingCollection)
      const query = { _id: new ObjectId(p.id) }

      // validation
      const session = await getServerSession(authOptions)
      const currentBooking = await bookingCollection.findOne(query)
      const isWonerOk = session?.user?.email == currentBooking.email

      if (isWonerOk) {

            // deleting user specific bookings
            const deleteResponse = await bookingCollection.deleteOne(query)
            revalidatePath("/my-bookings")
            return NextResponse(deleteResponse)
      } else {
            return NextResponse.json({ success: false, message: "Forbidden Action" })
      }
}

export const GET = async (req, { params }) => {
      const p = await params;
      const servicesCollection = dbConnect(collectionNamesobj.servicesCollection);
      const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });

      return NextResponse.json(data);
}
