import Head from "next/head"
import { Button } from "../components"
import Link from 'next/link'

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>Zach Collins - 404</title>
      </Head>

      <div className='text-center'>
        <h1 className='mb-4 text-7xl lg:text-9xl font-extrabold text-keppel'>404</h1>
        <p className='mb-4 text-3xl md:text-4xl font-bold'>Something&apos;s missing.</p>
        <p className='mb-4 text-lg font-light text-eerie-black'>Sorry, we can&apos;t find that page.</p>

        <Link href='/'>
          <Button title='Back to Homepage'/>
        </Link>
      </div>
    </div>
  )
}