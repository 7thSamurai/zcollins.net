import React from 'react'
import { ArticlePreview, Heading } from '.'
import { blog_description } from '../constants'

const LatestBlogPosts = (props) => (
  <section className='bg-ghost-white'>
    <Heading.H2 className='text-center pt-10'>Latest Blog Posts</Heading.H2>

    <p className='text-center text-xl my-4 max-w-2xl mx-auto'>
      {blog_description}
    </p>

    <ArticlePreview path='/blog' {...props}/>
  </section>
)

export default LatestBlogPosts