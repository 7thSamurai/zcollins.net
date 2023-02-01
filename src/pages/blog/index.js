import Head from "next/head"
import { getAllBlogPosts } from "@/src/utils/mdx"
import { Heading, ArticlePreview } from "@/src/components";
import { blog_description } from "@/src/constants";

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

      <p className='text-center text-xl mt-8 max-w-2xl mx-auto'>
        {blog_description}
      </p>

      <ArticlePreview path='/blog' {...props}/>
    </div>
  )
}