import React from 'react'
import Link from 'next/link'
import styles from '../styles'
import { BsArrowRight } from 'react-icons/bs'

function FeaturedProjects(props) {
  return (
    <section className={`${styles.paddingX} bg-ghost-white`}>
      <h2 className='text-center font-bold pt-10 text-4xl'>Featured Projects</h2>

      <p className='text-center text-xl my-4 max-w-2xl mx-auto'>
        Explore my curated collection of featured projects and case studies. 
        Learn how custom software solutions helped to solve my clients' problems and improve their operations.
      </p>

        <div className='grid grid-cols-1 lg:grid-cols-3 py-10 gap-8'>
          {props.projects.map((project) => (
            <article key={project.meta.title} className='flex flex-col justify-between border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 p-4'>
              {/* Project thumbnail image */}
              <Link href={`/projects/${project.meta.slug}`} passHref>
                <img src={`/images/${project.meta.image}`} className='w-full rounded-lg'/>
              </Link>

              {/* Project type */}
              <p className='text-keppel text-lg my-4'>
                {project.meta.type}
              </p>

              <h3 className='text-3xl font-bold'><Link href={`/projects/${project.meta.slug}`} passHref>{project.meta.title}</Link></h3>

              {/* Brief project description */}
              <p className='text-xl mt-4 text-eerie-black'>
                {project.meta.about}
              </p>

              <div className='flex flex-row justify-between mt-8'>
                {/* Reading time */}
                <p className='text-lg text-eerie-black'>{project.meta.readingTime}</p>

                {/* Link to project page */}
                <Link href={`/projects/${project.meta.slug}`} passHref className='inline-flex items-center text-lg text-keppel hover:underline cursor-pointer'>
                  Read More
                  <BsArrowRight className='ml-2'/>
                  </Link>
              </div>
            </article>
          ))}
        </div>
    </section>
  )
}

export default FeaturedProjects