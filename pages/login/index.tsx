import React from 'react'
import {signIn, getCsrfToken, getProviders, getSession} from 'next-auth/react'
import {GetServerSideProps} from 'next'
import Layout from '../../components/Layout';

type Providers = {
    providers: Object[];
    name: string;
    id: Number;
}

const index = ({providers}: Providers) => {
  return (
    <Layout>
    <div className='p-10 flex w-full flex-col justify-center min-h-screen items-center gap-10'>
    <div className="p-10 text-center flex flex-col gap-4 rounded-xl shadow-lg bg-stone-100">
    <p className='text-3xl'>Sign In</p>
      {Object.values(providers).map((provider: any) => {
        return (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id, {callbackUrl: "/"})} className="bg-stone-300 py-2 px-5 rounded-xl font-bold">
              Sign in with {provider.name}
            </button>
          </div>
        );
      })}
    </div>
      </div>
      </Layout>
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