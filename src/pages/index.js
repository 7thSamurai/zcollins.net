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

        <div className='pt-10 pb-20'><hr className='border-keppel absolute left-0 w-full'/></div>

        <Services/>
        <Skills/>

        <hr className='border-keppel my-20'/>

        <FeaturedProjects articles={props.projects}/>
        <LatestBlogPosts articles={props.posts}/>

        <div className='pt-20 pb-20'><hr className='border-keppel absolute left-0 w-full'/></div>

        <Contact/>
      </main>
    </div>
  )
}
