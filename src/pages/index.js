import Head from 'next/head'
import styles from '../styles'

import { About, Services, Skills, Contact } from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zach Collins - Freelance Software Developer</title>
      </Head>
      
      <main>
        <About/>
        <Services/>
        <Skills/>
        <Contact/>
      </main>
    </div>
  )
}
