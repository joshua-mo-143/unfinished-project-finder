import { useSession } from 'next-auth/react'
import React, {ReactNode, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

type Props = {
    children: ReactNode;
    mainText: String;
}

const NavigationItem = ({children, mainText}: Props) => {
    const {data : session} = useSession();
    const [active, setActive] = useState(false);

  return (
    <>
        <div className='relative flex flex-row items-center gap-2' onMouseLeave={() => setActive(false)}  onMouseEnter={() => setActive(true)}>
          <p className='cursor-pointer'>{mainText}</p>
          {!active ? <FontAwesomeIcon icon={faChevronDown} className="text-stone-500 hover:text-black transition-all cursor-pointer" onClick={() => setActive(!active)}/>
          : <>
          <FontAwesomeIcon icon={faChevronUp} className="text-stone-500 hover:text-black transition-all cursor-pointer" onClick={() => setActive(!active)}/> 
            {children}</>
                }
                </div>
        </>
            
  )
}

export default NavigationItem