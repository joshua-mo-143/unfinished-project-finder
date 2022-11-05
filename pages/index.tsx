import Head from 'next/head'
import Image from 'next/image'
import HeroHeader from '../components/HeroHeader'
import Layout from '../components/Layout'
import NewsletterSubscribe from '../components/NewsletterSubscribe'
import Searchbar from '../components/Searchbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <>
        <HeroHeader/>
        <Searchbar/>
        <section className="w-full py-5">
          <div className="w-full lg:w-3/5 flex flex-col justify-center items-center">
          <h1 className="text-2xl lg:text-5xl py-5">What is Heehee?</h1>
          <p className="w-full px-10 lg:ml-10 text-md lg:text-2xl">
            Have you ever had an unfinished project and lost motivation to finish it, or wanted to contribute to someone else's but didn't know where to start?
            <br/>
            Heehee can help you! No more will you have to dig deep to find motivation to finish that 6-month project you've been forgetting about,
            nor will you have to constantly hunt on Github for things to contribute to.
            <br/>
            We want to provide a place for developers to submit their Github repos of unfinished projects for other people to contribute to.
            <br/>
            Submitting and contributing to a project is <strong>easy</strong>, <strong>low-effort</strong> and <strong>no-hassle</strong>. 
            All you need to do is log in with your Github account, add a project and leave the rest up to us. Once you're done,
            you just need to approve pull requests on projects that you want to add on.
            <br/>
            This service is totally free and you don't have to pay anything.
            
          </p>
          </div>
        </section>
        <NewsletterSubscribe/>
        </>
        
    </Layout>
  )
}
