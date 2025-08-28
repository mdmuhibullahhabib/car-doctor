import dbConnect from '@/lib/dbConnect';
import React from 'react'

const page = async ({params}) => {
  const p = await params;
  const servicesCollection = dbConnect(coll)
  const data = 
  return (
    <div>
      <p>{p.id}</p>
    </div>
  )
}

export default page