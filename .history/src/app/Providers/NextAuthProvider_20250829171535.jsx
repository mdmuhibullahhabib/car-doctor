import { SessionProvider } from 'next-auth/react'
import React from 'react'

const NextAuthProvider = () => {
  return <SessionProvider>{chil}</SessionProvider>
}

export default NextAuthProvider