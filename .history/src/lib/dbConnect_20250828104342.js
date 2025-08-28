import { MongoClient, ServerApiVersion } from "mongodb";

export default function dbConnect(collectionName){

    const uri = process.env.DB_PASS
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    return client.db(process.env.DB_name).collection(collectionName)
}