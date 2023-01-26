import React from 'react'
import styles from '../styles'
import { RecentArticles } from '.'

const FeaturedProjects = (props) => (
  <section className={`${styles.paddingX} bg-ghost-white`}>
    <h2 className='text-center font-bold pt-10 text-4xl'>Featured Projects</h2>

    <p className='text-center text-xl my-4 max-w-2xl mx-auto'>
      Explore my curated collection of featured projects and case studies. 
      Learn how custom software solutions helped to solve my clients' problems and improve their operations.
    </p>

    <RecentArticles path='/projects' {...props}/>
  </section>
)

export default FeaturedProjects