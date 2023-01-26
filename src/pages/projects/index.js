import Head from "next/head"
import styles from "@/src/styles"
import { getAllProjects } from "@/src/utils/mdx"

export async function getStaticProps() {
    const articles = await getAllProjects();

    return {
        props: {
            articles,
        },
    };
}

export default function Projects({articles}) {
  return (
    <div className={`${styles.paddingX}`}>
      <Head>
        <title>Projects - Zach Collins</title>
      </Head>
  
      <h1 className='font-bold text-4xl text-center'>Projects</h1>

      <div>
        {articles.map((article) => (
          <h2>{article.meta.title} - {article.meta.about} - {article.meta.readingTime}</h2>
        ))}
      </div>
    </div>
  )
}