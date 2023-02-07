import React from 'react'
import Link from 'next/link'
import { ArticlePreview, Heading } from '.'
import { blog_description } from '../constants'
import { BsArrowRight } from 'react-icons/bs'

const LatestBlogPosts = (props) => (
  <section className='bg-ghost-white flex flex-col'>
    <Heading.H2 className='text-center pt-10'>
      <Link href='/blog' title='View all Blog Posts'>Latest Blog Posts</Link>
    </Heading.H2>

    <p className='text-center text-xl my-4 max-w-2xl mx-auto'>
      {blog_description}
    </p>

    <ArticlePreview path='/blog' {...props}/>

    <Link href='/projects' className='justify-center inline-flex items-center text-xl text-keppel hover:underline hover:text-teal-600'>
      View all Blog Projects
      <BsArrowRight className='ml-2'/>
    </Link>
  </section>
)

export default LatestBlogPosts