import Link from 'next/link'
import React, {useState} from 'react'
import {useSession} from 'next-auth/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import DropdownMenu from './DropdownMenu'
import DropdownItem from './DropdownItem'
import NavigationItemMain from './NavigationItemMain'
import NavigationItem from './NavigationItem';
import DropdownLogout from './DropdownLogout'

type Props = {}

const Navigation = (props: Props) => {

  const {data: session, status } = useSession();
  const [active, setActive] = useState(false);

  return (
    <div className="h-20 w-full bg-stone-200 align-middle flex flex-row drop-shadow-md">
        <div className="w-3/5 flex flex-row justify-center gap-20 items-center h-full invisible lg:visible">
        <Link href="/"><h1 className='text-2xl'>Heehee</h1></Link>
            <div className="flex flex-row gap-8 text-gray-600">
            <NavigationItem mainText="Projects">
              <DropdownMenu>
                <DropdownItem linkText="View" linkUrl="/projects"/>
                <DropdownItem linkText="Submit" linkUrl="projects/create"/>
              </DropdownMenu>
            </NavigationItem>
            <Link href="/contact" className='hover:text-black transition-all'>Contact</Link>
            </div>
        </div>
        <div className="w-2/5 flex flex-row justify-around items-center h-full">
            <NavigationItemMain>
            <DropdownMenu>
              <DropdownItem linkText="Profile" linkUrl="/profile"/>
              <DropdownLogout/>
            </DropdownMenu>
            </NavigationItemMain>
          </div>
    </div>  
  )
}

export default Navigation