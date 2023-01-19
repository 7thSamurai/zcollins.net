import React from 'react'
import styles from '@/style'
import { skills } from '@/constants'

function Skills() {
  return (
    <section className={`${styles.paddingX} bg-ghost-white`}>
      <h2 className='text-center font-bold text-4xl'>Skills</h2>

      <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 mt-10 mb-10'>
        {/* Categories */}
        {skills.map((category) => (
          <div className='flex flex-col'>
            <h3 className='text-2xl font-bold text-center'>{category.name}</h3>
            
            {/* Skills */}
            <div className='flex justify-center'>
              <ul className='list-none'>
                {category.skills.map((skill) => (
                  <li className='flex flex-row items-center text-xl text-eerie-black'>
                    <div className='text-roman-silver'>{skill.icon}</div> &nbsp; {skill.name}
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