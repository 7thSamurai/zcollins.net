import Head from 'next/head'
import styles from '../styles'

import { About, Services, Skills, FeaturedProjects, Contact } from '../components'
import { getAllProjects } from "@/src/utils/mdx";

export async function getStaticProps() {
  const projects = await getAllProjects();

  return {
      props: {
          projects,
      },
  };
}

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Zach Collins - Freelance Software Developer</title>
      </Head>
      
      <main>
        <About/>
        <Services/>
        <Skills/>
        <FeaturedProjects projects={props.projects}/>
        <Contact/>
      </main>
    </div>
  )
}
