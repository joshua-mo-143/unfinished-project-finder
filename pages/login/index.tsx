import React from 'react'
import {getProviders, signIn} from 'next-auth/react'

type Props = {
    getProviders: any
}

const index = ({getProviders}: Props) => {
  return (
    <>
    {Object.values(getProviders).map((provider: any) => (
        <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
                Sign in with {provider.name}
            </button>
        </div>

    ))}
    </>
  )
}

export default index