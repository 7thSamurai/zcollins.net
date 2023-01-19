import React from 'react'
import styles from '@/style'
import { BsHexagonFill } from 'react-icons/bs'
import { services } from '@/constants'

function Services() {
  return (
    <section className={`${styles.paddingX} mb-10 py-6 bg-ghost-white`}>
      <h2 className='text-center font-bold text-4xl'>Services</h2>

      {/* Services list */}
      <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 mt-10'>
        {services.map((service) => (
          <div className='flex flex-col text-center items-center'>
            {/* Service title */}
            <div className=''>
              <h3 className='text-2xl font-bold mb-6'>{service.name}</h3>
            </div>

            {/* Service icon */}
            <div className='grid grid-cols-1 grid-rows-1 items-center'>
              {/* Hexagon background */}
              <BsHexagonFill className='text-8xl row-start-1 col-start-1 text-teal-500'/>

              {/* Actually icon */}
              <div className='flex row-start-1 col-start-1 justify-center'>
                <h2 className='text-6xl text-white'>{service.icon}</h2>
              </div>
            </div>

            {/* Service description*/}
            <p className='text-eerie-black text-xl py-4'>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services