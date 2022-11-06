import React from 'react'
import Layout from '../../components/Layout'
import {GetStaticProps} from 'next'
import prisma from '../../lib/prisma'
type Props = {
  projects: Object[]
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await prisma.project.findMany()
  return {
    props: { projects }
  };
};

const Index = ({projects}: Props) => {
  return (
    <Layout>
        <section className="p-10 flex flex-col lg:h-screen items-center gap-10">
        <h1 className="text-3xl">View Projects</h1>
        <p className="text-xl">No projects uploaded yet :(</p>
      
        {/* <p className="text-xl">No projects fit your search criteria :( sorry! Maybe try something else?</p> */}
        </section>
    </Layout>
  )
}

export default Index