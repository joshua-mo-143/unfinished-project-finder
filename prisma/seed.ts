import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const projectSeed = await prisma.project.create({
        data: {
            title: "hee",
            description: "heehee",
            githubLink: "https://github.com",
            submitted: new Date().toISOString(),
            user_id: "cla5r8vog0000uc4sp2b97t5h"
        }
    })
  }

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })