import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    let prisma = new PrismaClient();
    const projectId = req.query.id;

    let project;
    switch (req.method){
    case "DELETE":
        project = await prisma.project.delete({
            where: {id: projectId?.toString()},
        });
        return res.json(project);
    case "GET":
        project = await prisma.project.findUnique({
            where: { id: projectId?.toString()},
        });
        return res.json(project);
    default:
        throw new Error(`The HTTP ${req.method} method is not supported at this route.`,);
    } 
}