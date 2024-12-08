import NextAuth from "next-auth" // https://next-auth.js.org/getting-started/example#add-api-route
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider.default({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ]
}

export default NextAuth.default(authOptions)
