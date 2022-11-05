import React from 'react'

type Props = {}

const Searchbar = (props: Props) => {
  return (
    <section className='py-5 px-2 lg:px-5 lg:my-20 lg:px-10 rounded-xl flex flex-col gap-4 justify-center w-max lg:w-3/5 m-auto bg-stone-200 shadow-md'>
        <h1 className="text-center text-3xl">Search for a project</h1>
        <form className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-10">
        <label htmlFor="" className="flex flex-row justify-center items-center gap-4">
            <span>Search phrase: </span>
        <input type="text" className="px-5 py-2" />
        </label>
        <label className="flex flex-row justify-center items-center gap-4">
            <span>Language: </span>
            <select className="px-5 py-2">
                <option value="">Select one</option>
            </select>
        </label>
        <button type="submit">Search</button>
        </form>
    </section>
  )
}

export default Searchbar