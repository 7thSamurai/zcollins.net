import { Html, Head, Main, NextScript } from 'next/document'
import { Navbar, Footer } from '../components'

export default function Document() {
  return (
    <Html lang='en' className='scroll-smooth'>
      <Head>
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png'/>
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png'/>
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png'/>
      </Head>

      <body className='bg-ghost-white'>
        <Navbar/>

        <div className='flex flex-col justify-between min-h-screen px-4 md:px-20 lg:px-40 xl:px-60 pt-28'>
          <Main/>
          <Footer/>
        </div>

        <NextScript/>
      </body>
    </Html>
  )
}
