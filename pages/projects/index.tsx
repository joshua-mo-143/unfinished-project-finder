import React from 'react'
import Layout from '../../components/Layout'

type Props = {}

const Index = (props: Props) => {
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