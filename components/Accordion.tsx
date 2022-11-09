import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode, useState } from 'react'

type Props = {
    text: String;
}

const Accordion = ({text}: Props) => {

    const [active, setActive] = useState(false);
  return (
    <>
    <div className='w-full lg:w-3/5 h-full shadow-md'>
        <div className='h-10  bg-stone-300 px-5 py-2 font-bold flex flex-row justify-between' onClick={() => setActive(!active)}>
            {text}
            {active ? <FontAwesomeIcon icon={faMinus}/> : <FontAwesomeIcon icon={faPlus}/>}
        </div>
        <div className={`${active ? "" : "hidden"} bg-stone-200`}>
        <ul className='list-disc px-10'>In the interest of ensuring quality and genuine contributions, we've set out some guidelines for submissions to follow.
                <li>You need to be the repo owner on Github.</li>
                <li>Your project must have a README.md and CONTRIBUTING.md in order for people to know how to contribute.</li>
                <li>If this is a project you are planning to actively maintain (or do so in the future), make sure to include tests.</li>
                <li>This goes without saying, but don't submit any projects for things that are intended to be used illegally.</li>
              </ul>
        </div>
    </div>

    </>
  )
}

export default Accordion