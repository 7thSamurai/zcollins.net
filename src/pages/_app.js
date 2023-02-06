import Head from 'next/head'
import '../styles/globals.css'
import { Navbar, Footer } from '../components'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='description' content='Zachary Collins personal portfolio'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
      </Head>

      <Navbar/>
      
      <div className='flex flex-col justify-between min-h-screen px-4 md:px-20 lg:px-40 xl:px-60 pt-28'>
        <Component {...pageProps} />
        <Footer/>
      </div>
    </>
  )
}
