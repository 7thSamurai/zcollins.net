import React from 'react'
import { RecentArticles, Heading } from '.'

const LatestBlogPosts = (props) => (
  <section className='bg-ghost-white'>
    <Heading.H2 className='text-center pt-10'>Latest Blog Posts</Heading.H2>

    <p className='text-center text-xl my-4 max-w-2xl mx-auto'>
      Browse my blog where I discuss a variety of topics including programming, 
      business solutions, and the latest developments in tech.
    </p>

    <RecentArticles path='/blog' {...props}/>
  </section>
)

export default LatestBlogPosts