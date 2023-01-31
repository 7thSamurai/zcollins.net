import Head from "next/head"
import { getAllBlogPosts } from "@/src/utils/mdx"
import { Heading, ArticlePreview } from "@/src/components";

export async function getStaticProps() {
    const articles = await getAllBlogPosts();

    return {
        props: {
            articles,
        },
    };
}

export default function Blog(props) {
  return (
    <div>
      <Head>
        <title>Blog - Zach Collins</title>
      </Head>
  
      <Heading.H1 className='text-center'>Blog</Heading.H1>

      <ArticlePreview path='/blog' {...props}/>
    </div>
  )
}