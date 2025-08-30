import dbConnect from "@/lib/dbConnect";

export const GET = async (req, {params}) => {
    const p = await params;
    const bookingCollection= dbConnect(coll)

}