import React from 'react'
import Link from 'next/link'
import { ArticlePreview, Heading } from '.'
import { projects_description } from '../constants'

const FeaturedProjects = (props) => (
  <section className='bg-ghost-white'>
    <Heading.H2 className='text-center'>
      <Link href='/projects' title='View all Projects'>Featured Projects</Link>
    </Heading.H2>

    <p className='text-center text-xl my-4 max-w-2xl mx-auto'>
      {projects_description}
    </p>

    <ArticlePreview path='/projects' {...props}/>
  </section>
)

export default FeaturedProjects