import React, { Children } from 'react'
import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'

type Props = {
    children: JSX.Element
}

const Layout = ({children}  : Props) => {
  
  return (
<>
<Head>
    <title>Heehee</title>
    <meta name="description" content="Heehee, the #1 open source project finder app." />
  </Head>
  <Navigation/>
  {children}
    <Footer/>

  </>
  )
}

export default Layout