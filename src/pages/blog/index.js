import Head from "next/head"
import styles from "@/src/styles"
import { getAllBlogPosts } from "@/src/utils/mdx"

export async function getStaticProps() {
    const articles = await getAllBlogPosts();
    console.log(articles);

    return {
        props: {
            articles,
        },
    };
}

export default function Blog({articles}) {
  return (
    <div className={`${styles.paddingX}`}>
      <Head>
        <title>Blog - Zach Collins</title>
      </Head>
  
      <h1 className='font-bold text-4xl text-center'>Blog</h1>

      <div>
        {articles.map((article) => (
          <h2>{article.meta.title} - {article.meta.about} - {article.meta.readingTime}</h2>
        ))}
      </div>
    </div>
  )
}