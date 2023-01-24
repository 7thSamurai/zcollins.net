import React from 'react'
import styles from '../styles'
import { services } from '../constants'
import { HexIcon } from '.'

const Services = () => (

    <section className={`${styles.paddingX} mb-10 pt-10 pb-6 bg-ghost-white`}>
      <h2 className='text-center font-bold text-4xl'>Services</h2>

      {/* Services list */}
      <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4 mt-10'>
        {services.map((service) => (
          <div key={service.name} className='flex flex-col text-center items-center'>
            {/* Service title */}
            <div className=''>
              <h3 className='text-2xl font-bold mb-6'>{service.name}</h3>
            </div>

            {/* Service icon */}
            <HexIcon icon={service.icon}/>

            {/* Service description*/}
            <p className='text-eerie-black text-xl py-4'>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )

export default Services