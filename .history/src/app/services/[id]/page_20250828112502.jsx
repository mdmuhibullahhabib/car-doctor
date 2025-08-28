import dbConnect, { collectionNamesobj } from '@/lib/dbConnect';
import React from 'react'

const page = async ({params}) => {
  const p = await params;
  const servicesCollection = dbConnect(collectionNamesobj.servicesCollection)
  const data = aw
  return (
    <div>
      <p>{p.id}</p>
    </div>
  )
}

export default page