import React from 'react'
import Layout from '../components/Layout'

type Props = {}

const contact = (props: Props) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Hello world!");
    }
  return (
    <Layout>
        <div className='flex flex-col justify-center items-center'>
            <form onSubmit={handleSubmit} className='w-4/5  lg:w-3/5 flex flex-col gap-4 items-center p-5 bg-stone-200 rounded-xl shadow-md my-5'>
            <h1>Contact Us</h1>
                <p>Queries? Problems? Let us know and we'll get back to you!</p>
                <label htmlFor="email" className="flex flex-row justify-center gap-4 items-center">
                    <span>E-mail:</span>
                    <input type="text" name="email" className='px-5 py-2' required/>
                </label>
                <label htmlFor="ticketCategory" className="flex flex-row justify-center gap-4 items-center">
                    <span>Category:</span>
                    <select name="ticketCategory" className='px-5 py-2' required>
                    <option value=""></option>
                    <option value="query">I have a query</option>
                        <option value="login">Login issue</option>
                        <option value="website">Website issue</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <label htmlFor="message" className="flex flex-col justify-center gap-4 items-center w-full">
                    <span>Message:</span>
                    <textarea name="" id="" className='w-3/5 px-5 py-2' required></textarea>
                </label>
                <button type="submit">Submit Ticket</button>
            </form>
        </div>
    </Layout>
  )
}

export default contact