import React from 'react'

type Props = {}

const HeroHeader = (props: Props) => {
  return (
    <section className="h-96 w-screen w-max lg:w-full flex flex-col justify-center items-center gap-4">
    <h1 className="text-5xl font-bold">Heehee</h1>
    <p className="text-xl">Unfinished projects? Find other people to help you finish them here.</p>
    <button className='text-xl bg-cyan-400 px-5 py-2 rounded-xl font-bold hover:bg-cyan-300 transition-all'>Get Started</button>
  </section>
  )
}

export default HeroHeader