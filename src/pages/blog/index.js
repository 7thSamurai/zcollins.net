import Head from "next/head"
import { getAllBlogPosts, padArticles } from "@/src/utils/mdx"
import { Heading, ArticlePreview } from "@/src/components";
import { blog_description } from "@/src/constants";

export async function getStaticProps() {
    const articles = padArticles(await getAllBlogPosts(), 'Blog Post');

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
        <meta name='description' content='My personal blog as a Freelance Software Developer. Sharing my journey and experiences with articles about coding, technology, and business solutions.'/> 
      </Head>
  
      <Heading.H1 className='text-center'>Blog</Heading.H1>

      <p className='text-center text-xl mt-8 max-w-2xl mx-auto'>
        {blog_description}
      </p>

      <ArticlePreview path='/blog' {...props}/>
    </div>
  )
}