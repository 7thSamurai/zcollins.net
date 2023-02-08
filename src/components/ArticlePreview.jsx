import React from 'react'
import Link from 'next/link'
import { Heading } from '.'

function ArticlePreview(props) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 py-10 gap-8'>
      {props.articles.map((article) => (
        <Link key={article.meta.title} href={`${props.path}/${article.meta.slug}`} className='flex flex-col border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 cursor-pointer'>
          {/* Article thumbnail image */}
          <img src={`/images/${article.meta.image}`} className='w-full rounded-t-lg' alt=''/>

          <div className='p-4 flex flex-col justify-between h-full'>
            <div className='justify-start'>
              {/* Article type */}
              <p className='text-keppel text-lg mb-2 font-medium'>
                {article.meta.type}
              </p>

              <Heading.H3>{article.meta.title}</Heading.H3>
            </div>
            
            <div className='justify-end'>
              {/* Brief Article description */}
              <p className='text-xl mt-4 text-eerie-black'>
                {article.meta.about}
              </p>

              {/* Reading time */}
              <p className='text-lg text-roman-silver mt-8 flex-shrink-0'>
                {article.meta.readingTime} &middot; {new Date(article.meta.publishedAt).toLocaleDateString('en-us', { year:"numeric", month:"short", day: "numeric"})}
              </p> 
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ArticlePreview