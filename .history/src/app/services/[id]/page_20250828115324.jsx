import dbConnect, { collectionNamesobj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react'

const s = async ({params}) => {
  const p = await params;
  const servicesCollection = dbConnect(collectionNamesobj.servicesCollection)
  const data = await servicesCollection.findOne({_id: new ObjectId(p.id)})
  return (
    <div>
      <p>{p.id}</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default s