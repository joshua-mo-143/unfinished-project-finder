import { signOut } from 'next-auth/react'
import React from 'react'

type Props = {}

const DropdownLogout = (props: Props) => {
  return (
    <button className=" px-1 rounded-md hover:bg-stone-100 transition-all" onClick={() => signOut()}>Sign Out</button>
  )
}

export default DropdownLogout