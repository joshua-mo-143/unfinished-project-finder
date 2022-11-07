// pages/api/auth/[...nextauth].ts

import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import { PrismaClient } from '@prisma/client';

let prisma = new PrismaClient();
const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
  providers: [
    GitHubProvider({
            // @ts-ignore
      clientId: process.env.GITHUB_ID,
                  // @ts-ignore
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  adapter: PrismaAdapter(prisma),
   secret: process.env.SECRET,
    pages: {
      signIn: '/login'
    }
};