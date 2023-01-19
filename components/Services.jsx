import React from 'react'
import styles from '@/style'
import { services } from '@/constants'

function Services() {
  return (
    <div className={`${styles.paddingX} mb-10 py-6`}>
      <h2 className='text-center font-bold text-4xl'>Services I Offer</h2>

      {/* Services list */}
      <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 mt-10'>
        {services.map((service) => (
          <div className='flex flex-col text-center items-center'>
            <div className=''>
              <h3 className='text-2xl font-bold mb-6'>{service.name}</h3>
            </div>

            <h2 className='text-6xl text-teal-500'>{service.icon}</h2>
            <p className='text-gray-800 text-xl py-4'>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services