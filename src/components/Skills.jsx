import React from 'react'
import styles  from '../styles'
import { skills } from '../constants'
import { Heading } from '.'

function Skills() {
  return (
    <section className={`${styles.paddingX} bg-ghost-white`}>
      <Heading.H2 className='text-center'>Skills</Heading.H2>

      <div className='flex flex-row xl:flex-row justify-between 2xl:mx-52 mt-10 mb-10'>
        {/* Categories */}
        {skills.map((category) => (
          <div key={category.name} className='flex flex-col items-center'>
            <h3 className='flex flex-row items-center text-lg md:text-2xl lg:text-3xl font-bold text-center mb-1 lg:mb-4'>
               {category.name} 
               {/* Make icon not visible on mobile*/}
               <div className='hidden md:flex ml-2'>{category.icon}</div>
            </h3>

            {/* Skills */}
            <div className='flex flex-row justify-center items-center'>
              <ul className='list-none'>
                {category.skills.map((skill) => (
                  <li key={skill.name} className='flex flex-row items-center text-xl md:text-2xl lg:text-3xl text-eerie-black'>
                    <div className='text-keppel'>{skill.icon}</div> &nbsp; {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </div> 
        ))}
      </div>
    </section>
  )
}

export default Skills