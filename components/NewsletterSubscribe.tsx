import React from 'react'

type Props = {}

const NewsletterSubscribe = (props: Props) => {
  return (
    <section className="w-full px-4 py-5 lg:my-20">
    <div className="flex flex-col justify-center items-center lg:w-3/5 m-auto bg-stone-200 py-2 px-3 lg:py-5 lg:px-10 rounded-xl shadow-md">
    <h1 className="text-xl lg:text-3xl pt-5">Subscribe to our newsletter</h1>
    <p className="text-md text-center lg:text-xl py-5 w-full">Receive updates on all of our new feature releases and updates. Opt out at any time.</p>
      <form className="flex flex-row justify-center">
        <input className="lg:w-96 w-full px-5 py-2 rounded-tl-xl rounded-bl-xl"/>
        <button type="submit" className='bg-cyan-400 px-5 py-2 rounded-tr-xl rounded-br-xl font-bold hover:bg-cyan-300 transition-all'>Subscribe</button>
      </form>
    </div>
  </section>
  )
}

export default NewsletterSubscribe