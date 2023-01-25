import React from 'react'
import styles from '../styles'
import { services } from '../constants'
import { HexIcon } from '.'
import { HiArrowLongRight } from 'react-icons/hi2'

const Services = () => (

    <section className={`${styles.paddingX} mb-10 pt-10 pb-6 bg-ghost-white`}>
      <h2 className='text-center font-bold text-4xl'>Services</h2>

      {/* Services list */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 gap-x-20 mt-10'>
        {services.map((service) => (
          <div key={service.name} className='flex flex-row justify-between items-center'>

            {/* Service icon */}
            <HexIcon icon={service.icon}/>

            {/* Service title */}
            <div className='flex flex-col pl-4 md:pl-10'>
              <h3 className='text-2xl font-bold'>{service.name}</h3>

              {/* Service description*/}
              <p className='text-eerie-black text-xl py-4'>{service.desc}</p>

              {/* Details */}
              <a href={service.link} className='flex flex-row items-center pt-4'>
                View Details
                <HiArrowLongRight className='ml-2'/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )

export default Services