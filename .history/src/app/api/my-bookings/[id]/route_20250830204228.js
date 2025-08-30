import dbConnect, { collectionNamesobj } from "@/lib/dbConnect";

export const GET = async (req, {params}) => {
    const p = await params;
    const bookingCollection= dbConnect(collectionNamesobj.bookingCollection)
    const query = {_id: newc}

}