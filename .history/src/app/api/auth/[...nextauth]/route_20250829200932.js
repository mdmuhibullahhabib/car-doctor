import { loginUser } from "@/app/actions/auth/loginUser";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { authOptions } from "@/lib/authOptions";

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }