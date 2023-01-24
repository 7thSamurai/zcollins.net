import Head from 'next/head'
import styles from '../styles'

import { Navbar, About, Services, Skills, Contact, Footer } from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zach Collins - Freelance Developer For Hire</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
      </Head>

      <Navbar/>
      
      <main className='flex flex-col h-screen justify-between'>
        <About/>
        <Services/>
        <Skills/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}
