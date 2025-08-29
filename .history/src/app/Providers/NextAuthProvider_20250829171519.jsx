import { SessionProvider } from 'next-auth/react'
import React from 'react'

const NextAuthProvider = () => {
  return SessionProvider
}

export default NextAuthProvider