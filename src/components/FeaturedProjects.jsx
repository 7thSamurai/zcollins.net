import React from 'react'
import { ArticlePreview, Heading } from '.'
import { projects_description } from '../constants'

const FeaturedProjects = (props) => (
  <section className='bg-ghost-white'>
    <Heading.H2 className='text-center pt-10'>Featured Projects</Heading.H2>

    <p className='text-center text-xl my-4 max-w-2xl mx-auto'>
      {projects_description}
    </p>

    <ArticlePreview path='/projects' {...props}/>
  </section>
)

export default FeaturedProjects