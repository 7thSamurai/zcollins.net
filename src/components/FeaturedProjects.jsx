import React from 'react'
import Link from 'next/link'
import { ArticlePreview, Heading } from '.'
import { projects_description } from '../constants'
import { BsArrowRight } from 'react-icons/bs'

const FeaturedProjects = (props) => (
  <section className='bg-ghost-white flex flex-col'>
    <Heading.H2 className='text-center'>
      <Link href='/projects' title='View all Projects'>Featured Projects</Link>
    </Heading.H2>

    <p className='text-center text-xl my-4 max-w-2xl mx-auto'>
      {projects_description}
    </p>

    <ArticlePreview path='/projects' {...props}/>

    <Link href='/projects' className='justify-center inline-flex items-center text-xl text-keppel hover:underline hover:text-teal-600'>
      View all Featured Projects
      <BsArrowRight className='ml-2'/>
    </Link>
  </section>
)

export default FeaturedProjects