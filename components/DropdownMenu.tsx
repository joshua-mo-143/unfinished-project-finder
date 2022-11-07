import React, { ReactNode } from 'react'
import DropdownItem from './DropdownItem'


type Props = {
    children: ReactNode
}

const DropdownMenu = ({children}: Props) => {
  return (
    <div className="absolute top-6 bg-stone-300 w-full rounded-md shadow-md flex flex-col justify-center menu-dropdown">
        {children}
    </div>
  )
}

export default DropdownMenu