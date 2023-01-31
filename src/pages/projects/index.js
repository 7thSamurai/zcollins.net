import Head from "next/head"
import { getAllProjects } from "@/src/utils/mdx"
import { Heading, ArticlePreview } from "@/src/components";

export async function getStaticProps() {
    const articles = await getAllProjects();

    return {
        props: {
            articles,
        },
    };
}

export default function Projects(props) {
  return (
    <div>
      <Head>
        <title>Projects - Zach Collins</title>
      </Head>
  
      <Heading.H1 className='text-center'>Projets</Heading.H1>

      <ArticlePreview path='/projects' {...props}/>
    </div>
  )
}