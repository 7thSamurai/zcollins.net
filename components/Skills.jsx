import React from 'react'
import styles from '@/style'
import { skills } from '@/constants'
import { HexIcon } from '.'

import { AiOutlineCode } from 'react-icons/ai'

function Skills() {
  return (
    <section className={`${styles.paddingX} bg-ghost-white`}>
      <h2 className='text-center font-bold text-4xl'>Skills</h2>

      <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 mt-10 mb-10'>
        {/* Categories */}
        {skills.map((category) => (
          <div className='flex flex-col items-center'>
            <h3 className='text-3xl font-bold text-center'>{category.name}</h3>
            <HexIcon icon={category.icon}/>
            {/* Skills */}
            <div className='flex flex-row justify-center items-center'>
              <ul className='list-none'>
                {category.skills.map((skill) => (
                  <li className='flex flex-row items-center text-2xl text-eerie-black'>
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