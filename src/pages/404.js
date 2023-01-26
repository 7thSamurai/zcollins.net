import Head from "next/head"
import styles from "../styles"
import { Button } from "../components"

export default function Custom404() {
  return (
    <div className={`${styles.paddingX}`}>
      <Head>
        <title>Zach Collins - 404</title>
      </Head>

      <div className='text-center'>
        <h1 className='mb-4 text-7xl lg:text-9xl font-extrabold text-keppel'>404</h1>
        <p className='mb-4 text-3xl md:text-4xl font-bold'>Something's missing.</p>
        <p className='mb-4 text-lg font-light text-eerie-black'>Sorry, we can't find that page.</p>

        <a href='/'>
          <Button title='Back to Homepage'/>
        </a>
      </div>
    </div>
  )
}