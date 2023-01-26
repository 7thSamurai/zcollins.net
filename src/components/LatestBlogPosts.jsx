import React from 'react'
import styles from '../styles'
import { RecentArticles } from '.'

const LatestBlogPosts = (props) => (
  <section className={`${styles.paddingX} bg-ghost-white`}>
    <h2 className='text-center font-bold pt-10 text-4xl'>Latest Blog Posts</h2>

    <p className='text-center text-xl my-4 max-w-2xl mx-auto'>
      Browse my blog where I discuss a variety of topics including programming, 
      business solutions, and the latest developments in tech.
    </p>

    <RecentArticles path='/blog' {...props}/>
  </section>
)

export default LatestBlogPosts