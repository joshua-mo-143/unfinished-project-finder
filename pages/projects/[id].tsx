import React from 'react'
import {GetServerSideProps, GetStaticProps} from 'next'
import {PrismaClient} from '@prisma/client'
import Layout from '../../components/Layout'
import { ObjectFlags } from 'typescript'

type Props = {
  project: Object
}

type Proj = {
  title: String;
  description: String;
  id: String;
  githubLink: String;
  user: String;
}

type Object = {
  title: String;
  description: String;
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/project', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}});
  const projects: Proj[] = await res.json();

  const paths = projects.map((project) => ({
    params: {id: project.id}
  }))

  return {paths, fallback: false};
}

export const getStaticProps = async (context: any) => {
  const {id} = context.params;
  const res = await fetch(`http://localhost:3000/api/project/${id}`, {method: 'GET'});
  const project = await res.json();
  
  return {props: {project}}
}

export const Project = ({project}: Props) => {

  return (
    <Layout>
      <div className="flex flex-col items-center gap-4">
      <p className='text-lg lg:text-3xl mt-10'>Viewing project: {project.title}</p>
      <div className="flex flex-col items-center">
      <p>Language: Python</p>
      <p>Description: {project.description = null ? "Project has no description :(" : project.description}</p>
      </div>
      </div>
    </Layout>
      
    
  )
}

export default Project