import dbConnect, { collectionNamesobj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react'

const page = async ({params}) => {
  const p = await params;
  const servicesCollection = dbConnect(collectionNamesobj.servicesCollection)
  const data = await servicesCollection.findOne({_id: new ObjectId(id)})
  return (
    <div>
      <p>{p.id}</p>
    </div>
  )
}

export default page