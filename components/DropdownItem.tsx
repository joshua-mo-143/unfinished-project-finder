import React from 'react'
import Link from 'next/link'

type Props = {
    linkUrl: string;
    linkText: string;
}

const DropdownItem = ({linkUrl, linkText}: Props) => {
  return (
    <Link href={linkUrl} className="px-1 rounded-md hover:bg-stone-100 transition-all">{linkText}</Link>
  )
}

export default DropdownItem