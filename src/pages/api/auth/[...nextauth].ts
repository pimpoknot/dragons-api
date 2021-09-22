import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user'
    }),
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }

        if (user) {
          return user
        } else {
          return null

        }
      }
    })
  ],
})