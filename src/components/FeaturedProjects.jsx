import React from 'react'
import { ArticlePreview, Heading } from '.'

const FeaturedProjects = (props) => (
  <section className='bg-ghost-white'>
    <Heading.H2 className='text-center pt-10'>Featured Projects</Heading.H2>

    <p className='text-center text-xl my-4 max-w-2xl mx-auto'>
      Explore my curated collection of featured projects and case studies. 
      Learn how custom software solutions helped to solve my clients' problems and improve their operations.
    </p>

    <ArticlePreview path='/projects' {...props}/>
  </section>
)

export default FeaturedProjects