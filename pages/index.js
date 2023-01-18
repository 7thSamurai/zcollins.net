import Head from 'next/head'

import { Navbar, About, Contact, Footer } from '@/components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zach Collins Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-white flex flex-col h-screen'>
        <Navbar/>

        <section className='flex flex-col px-4 md:px-20 lg:px-40 xl:px-60 h-screen justify-between'>
          <About/>
          <Contact/>

          <Footer/>
        </section>
      </main>
    </>
  )
}