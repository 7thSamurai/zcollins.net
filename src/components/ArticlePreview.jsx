import React from 'react'
import Link from 'next/link'
import { Heading } from '.'

function ArticlePreview(props) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 py-10 gap-8'>
      {props.articles.map((article) => (
        <Link key={article.meta.title} href={`${props.path}/${article.meta.slug}`} className='flex flex-col justify-between border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 cursor-pointer p-4'>
          <div>
            {/* Article thumbnail image */}
            <img src={`/images/${article.meta.image}`} className='w-full rounded-lg' alt=''/>

            {/* Article type */}
            <p className='text-keppel text-lg my-4'>
              {article.meta.type}
            </p>

            <Heading.H3>{article.meta.title}</Heading.H3 >
          </div>

          {/* Brief Article description */}
          <p className='text-xl mt-4 text-eerie-black'>
            {article.meta.about}
          </p>

          <div className='flex flex-wrap justify-between mt-8'>
            {/* Reading time */}
            <p className='text-lg text-roman-silver mr-8 flex-shrink-0'>
              {article.meta.readingTime} &middot; {new Date(article.meta.publishedAt).toLocaleDateString('en-us', { year:"numeric", month:"short", day: "2-digit"})}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ArticlePreview