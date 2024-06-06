import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import Nodemailer from "next-auth/providers/nodemailer"
import { prisma } from "./prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Nodemailer({
      server: process.env.EMAIL_SERVER,
      from: "auth@amspaceseth.net",
    }),
  ],
  callbacks: {
    async signIn({ user: { id, email } }) {
      if (email === "nate@qstreet.org") {
        return true
      }

      const user = await prisma.user.findUnique({ where: { id } })
      return user ? true : false
    },
  },
})
