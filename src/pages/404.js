import Head from "next/head"
import styles from "../styles"

export default function Custom404() {
  return (
    <div className={`${styles.paddingX}`}>
      <Head>
        <title>Zach Collins - 404</title>
      </Head>

      <h1 className='font-bold text-4xl text-center py-20'>
        404 - Page Not Found
      </h1>
    </div>
  )
}