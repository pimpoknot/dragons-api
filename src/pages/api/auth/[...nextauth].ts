import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { imageConfigDefault } from "next/dist/server/image-config"
import {Users } from '../../../services/auth/AuthApi'
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
        username: { label: "Username", type: "text", placeholder: "qualquer usuario" },
        password: {  label: "Password", type: "password", placeholder: "qualquer senha" }
        
      },
      async authorize(credentials, req) {
        const user = { id: 1, name: 'UserProfile', email: 'teste123@example.com' }

        if (user) {
          return user
        } else {
          return null

        }
      }
    })
  ],
})