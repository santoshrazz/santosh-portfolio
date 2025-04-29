import auth from "@/auth/auth"
import NextAuth from "next-auth"

const handler = NextAuth(auth)

export { handler as GET, handler as POST }