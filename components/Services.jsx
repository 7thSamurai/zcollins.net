import React from 'react'
import { services } from '@/constants'

function Services() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 mb-20'>
      {services.map((service) => (
        <div className='flex flex-col text-center items-center'>
          <div className='h-[120px]'>
            <h2 className='text-3xl font-bold my-10'>{service.name}</h2>
          </div>

          <h2 className='text-6xl text-teal-500'>{service.icon}</h2>
          <p className='text-gray-800 text-xl py-4'>{service.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default Services