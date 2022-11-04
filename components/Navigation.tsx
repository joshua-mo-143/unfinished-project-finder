import React from 'react'

type Props = {}

const Navigation = (props: Props) => {
  return (
    <div className="h-20 w-full bg-stone-200 align-middle drop-shadow-md">
        <div className="w-1/2 flex flex-row justify-around items-center h-full">
            <div className="flex flex-row gap-8 text-gray-600">
            <p>About</p>
            <p>Contact</p>
            <p>Hello world!</p>
            </div>
        </div>
    </div>
  )
}

export default Navigation