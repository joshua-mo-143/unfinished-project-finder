import React from 'react'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="h-20 w-full bg-stone-200 align-middle flex flex-row drop-shadow-md bottom-0">
    <div className="w-3/5 flex flex-row justify-center gap-20 items-center h-full hidden">
    <Link href="/"><h1 className='text-2xl'>Heehee</h1></Link>
        <div className="flex flex-row gap-8 text-gray-600">
        <Link href="/projects" className="hover:text-black transition-all">View Projects</Link>
        <p>About</p>
        <p>Contact</p>
        </div>
    </div>
    <div className="w-1/2 flex flex-row justify-around items-center h-full hidden">
      <p>Get Started</p>
      </div>
</div>
  )
}

export default Footer