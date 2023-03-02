import Head from "next/head"
import { getAllProjects, padArticles } from "@/src/utils/mdx"
import { Heading, ArticlePreview } from "@/src/components";
import { projects_description } from "@/src/constants";

export async function getStaticProps() {
    const articles = padArticles(await getAllProjects(), 'Project');

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
        <meta name="description" content="My curated selection of featured projects and case studies of work I've done as a Freelance Software Developer."/>
      </Head>
  
      <Heading.H1 className='text-center'>Projects</Heading.H1>

      <p className='text-center text-xl mt-8 max-w-2xl mx-auto'>
        {projects_description}
      </p>

      <ArticlePreview path='/projects' {...props}/>
    </div>
  )
}