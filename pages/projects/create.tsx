import React, { useState } from 'react'
import Accordion from '../../components/Accordion'
import Layout from '../../components/Layout'
import {useQuery} from 'react-query'
import { useSession } from 'next-auth/react'
import Router from 'next/router';

type Props = {}

interface Object {
  name?: String;
  id?: number;
  title: String;
  description: String;
}

export const CreateProject = (props: Props) => {
  const {data: session} = useSession();
  const [projectId, setProjectId] = useState("");

  const submitProject = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submittedData: any = data?.find((x: any) => x.id.toString() == projectId);
    let title: String = submittedData.name;
    let description: String = submittedData.description > "" ? submittedData.description : "No description";
    let githubLink: String = submittedData.html_url;
    const body = {title, description, githubLink};
    try {
      await fetch('/api/project', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
      });
      await Router.push('/projects');
    } catch(error) {
      console.error(error);
    }
  }

  // set react-query to fetch data from logged-in user repos
  const { isLoading, isFetching, isError, data, error, refetch } = useQuery<Object[], Error>(["repo"], () =>
    
      fetch(`https://api.github.com/users/${session?.user?.name}/repos`)
      .then((res) => res.json()));

      // if (isLoading) {
      //   return "Loading..."
      // }
  
      // if (isFetching) {
      //   return "Fetching data..."
      // }

  return (
        <Layout>
            <section className="p-10 flex w-full flex-col lg:min-h-screen items-center gap-10">
              <h1 className="text-3xl">Submit Project</h1>
              <Accordion text="Submission Guidelines"/>
              <form onSubmit={submitProject} className='bg-stone-300 p-5 rounded-xl shadow-md flex flex-col justify-center gap-4'>
                <p>Select a project from below:</p>
                {isFetching || isLoading ? 
                "Loading..." :
                <select className='px-5 py-2' value={projectId} onChange={(e) => setProjectId(e.target.value.toString())}>
                {data?.map((project: Object) => (
                  <option value={project.id} key={project.id}>{project.name}</option>
                ))}
                </select>}
                <button type="submit">Submit</button>
              </form>
              </section>
        </Layout>
  )
}

export default CreateProject