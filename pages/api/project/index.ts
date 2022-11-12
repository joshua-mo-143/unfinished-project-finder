import { PrismaClient } from "@prisma/client";
import { E } from "msw/lib/SetupApi-75fbec12";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    let prisma = new PrismaClient();
    const {title, description, githubLink}  = req.body;
    const session = await getSession({req});
    let result;
    switch (req.method) {
      case "POST":
        try {
          result = await prisma.project.create({
            data: {
              title: title,
              description: description,
              githubLink: githubLink,
              User: {connect: {email: session?.user?.email!}}
            },
          });
          return res.json(result);
        } catch(e:any) {
          throw new Error(e.message)
        }
      case "GET":
        result = await prisma.project.findMany();
        return res.json(result);
      default:
        throw new Error("Method not supported.");
    }
}