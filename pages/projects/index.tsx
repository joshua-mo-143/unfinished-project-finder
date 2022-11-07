import React from 'react'
import Layout from '../../components/Layout'
import {GetStaticProps} from 'next'
import {PrismaClient} from '@prisma/client'
import ProjectItem from '../../components/ProjectItem'
import Searchbar from '../../components/Searchbar'

type Props = {
  projectsJSON: Object[]
}
export const getStaticProps: GetStaticProps = async () => {
  let prisma = new PrismaClient();
  const projects = await prisma.project.findMany()
  let projectsJSON: Object[] = JSON.parse(JSON.stringify(projects))
  
  return {
    props: { projectsJSON }
  };
};

const Index = ({projectsJSON}: Props) => {
  console.log(projectsJSON)
  return (
    <Layout>
        <section className="p-10 flex flex-col lg:h-screen items-center gap-10">
        <h1 className="text-3xl">View Projects</h1>
        <Searchbar/>
        {projectsJSON.length == 0 ? <p className="text-xl">No projects fit your search criteria :(</p> :
        <>
        {projectsJSON.map((project: any) => (
          <ProjectItem id={project.id} title={project.title} description={project.description} />
        ))}
        </>}
        </section>
    </Layout>
  )
}

export default Index