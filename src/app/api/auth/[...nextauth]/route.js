import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import User from "@/models/userdetail"
import connectDB from "@/helper/connectDB"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      await connectDB()
      if(account.provider=='github'){
        let x = new User({
          name: user.name,
          email: user.email,
          image: user.image
        })
        await x.save()
      }
      
      return true
    }
  }
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }