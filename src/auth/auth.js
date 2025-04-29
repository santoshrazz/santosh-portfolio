import { connectToDb } from '@/db/ConnectDb'
import { userModel } from '@/models/User.model'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialProvider from 'next-auth/providers/credentials'
import FaceBookProvider from "next-auth/providers/facebook"
import bcryptjs from 'bcryptjs'

const auth = {
    providers: [GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        authorization: { params: { prompt: "consent" } }
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    FaceBookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    CredentialProvider({
        name: "credentials",
        credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
            await connectToDb()
            const user = await userModel.findOne({ email: credentials?.email })
            if (!user) {
                throw new Error("No user found with this email");
            }
            const isValidPassword = await bcryptjs.compare(credentials.password, user?.password || "")
            if (!isValidPassword) {
                throw new Error("Invalid Password");
            }
            return { id: user._id, name: user.name, email: user.email }
        }
    })
    ],
    secret: process.env.AUTH_SECRET,
    callbacks: {
        async signIn({ user, account }) {
            await connectToDb()
            // Checking if user already exists
            const isUserExists = await userModel.findOne({ email: user?.email });
            if (isUserExists) {
                return true
            }
            // If user doesn't exists then create account
            const newUser = await userModel.create({
                name: user?.name,
                email: user?.email,
                profilePic: user?.image,
                providerId: user?.id,
            })
            return true;
        },
        async session({ session }) {
            await connectToDb()
            const currentUser = await userModel.findOne({ email: session?.user?.email })
            if (currentUser) {
                session.user.id = currentUser?._id?.toString();
            }
            return session
        }
    },
    pages: {
        signIn: "/login"
    }
}

export default auth