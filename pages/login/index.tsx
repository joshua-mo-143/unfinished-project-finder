import React from 'react'
import {signIn, getCsrfToken, getProviders, getSession} from 'next-auth/react'
import {GetServerSideProps} from 'next'

type Providers = {
    providers: Object[];
    name: string;
    id: Number;
}

const index = ({providers}: Providers) => {
  return (
    <div>
      {Object.values(providers).map((provider: any) => {
        return (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id, {callbackUrl: "/"})}>
              Sign in with {provider.name}
            </button>
          </div>
        );
      })}
      </div>
  )
}

export default index

export const getServerSideProps: GetServerSideProps = async (context) => {

    const { req } = context;
    const session = await getSession({req});

    if (session) {
        return {
          redirect: { destination: "/", permanent: true },
        };
      }
    
    return {
      props: {
        // @ts-ignore
        providers: await getProviders(context),
        csrfToken: await getCsrfToken(context),
      },
    };
  }