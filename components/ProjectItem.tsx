import React from 'react'

type Props = {
    id: String;
    title: String;
    description: String;
}

const ProjectItem = ({id, title, description}: Props) => {
  return (
    <a href={`/projects/${id}`} className="bg-stone-300 rounded-md px-5 py-2 w-full" >
    <h1 className='text-xl'>{title}</h1>
    <p>Language: Python</p>
    <p>Description: {description.length > 50 ? `${description.slice(1,50)}...` : description}</p>
    Find out more
    </a>
  )
}

export default ProjectItem