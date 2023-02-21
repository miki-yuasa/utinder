import { NextApiRequest, NextApiResponse } from "next"
import NextAuth, { AuthOptions } from "next-auth"
import GoogleProviders from "next-auth/providers/google"

const authOptions: AuthOptions = {
    providers: [
        GoogleProviders({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            if (
                account!.provider === 'google' &&
                profile!.email!.endsWith('@gmail.com')
            ) {
                return true
            } else {
                return false
            }
        },
    },
}


export default NextAuth(authOptions);