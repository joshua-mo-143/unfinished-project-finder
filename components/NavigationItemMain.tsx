import { useSession } from 'next-auth/react'
import React, {ReactNode, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

type Props = {
    children: ReactNode
}

const NavigationItemMain = ({children}: Props) => {
    const {data : session} = useSession();
    const [active, setActive] = useState(false);

  return (
    <>
    {session ? 
        <div className='relative flex flex-row items-center gap-4' onMouseLeave={() => setActive(false)} onMouseEnter={() => setActive(true)}>
          <p className='cursor-pointer'>Hello {session?.user?.name}!</p>
          {!active ? <FontAwesomeIcon icon={faChevronDown} className="text-stone-500 hover:text-black transition-all cursor-pointer"/>
          : <>
          <FontAwesomeIcon icon={faChevronUp} className="text-stone-500 hover:text-black transition-all cursor-pointer"/> 
            {children}</>
                }
                </div>
                 :
        <Link href="/login" className='hover:text-black text-stone-500 transition-all'>Sign In</Link>
            }
        </>
            
  )
}

export default NavigationItemMain