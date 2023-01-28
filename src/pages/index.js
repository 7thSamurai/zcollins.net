import Head from 'next/head'

import { About, Services, Skills, FeaturedProjects, LatestBlogPosts, Contact } from '../components'
import { getAllBlogPosts, getAllProjects } from "@/src/utils/mdx";

export async function getStaticProps() {
  const posts = await getAllBlogPosts();
  const projects = await getAllProjects();

  return {
      props: {
          posts,
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
        <FeaturedProjects articles={props.projects}/>
        <LatestBlogPosts articles={props.posts}/>
        <Contact/>
      </main>
    </div>
  )
}
