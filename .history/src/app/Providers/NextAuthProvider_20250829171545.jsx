import { SessionProvider } from 'next-auth/react'
import React from 'react'

const NextAuthProvider = () => {
  return <SessionProvider>{children}</SessionProvider>
}

export default NextAuthProvider