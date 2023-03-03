import React from 'react'
import { services } from '../constants'
import { Heading, HexIcon } from '.'
import { BsArrowRight } from 'react-icons/bs'

const Services = () => (
    <section id='services' className='mb-10 pb-6 bg-ghost-white'>
      <Heading.H2 className='text-center'>Services</Heading.H2>

      {/* Services list */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 gap-x-20 mt-10'>
        {services.map((service) => (
          <div key={service.name} className='flex flex-row justify-between items-center bg-keppel bg-opacity-0 hover:bg-opacity-5 rounded-lg transition-colors duration-200'>

            {/* Service icon */}
            <a href={service.link} title={`Learn more about ${service.name}`}>
              <HexIcon icon={service.icon}/>
            </a>

            {/* Service title */}
            <div className='flex flex-col pl-4 md:pl-10'>
              <Heading.H3>{service.name}</Heading.H3>

              {/* Service description*/}
              <p className='text-eerie-black text-xl py-4'>{service.desc}</p>

              {/* Details */}
              {/*
              <a href={service.link} className='inline-flex w-fit items-center pt-4 hover:underline' title={`Learn more about ${service.name}`}>
                View Details
                <BsArrowRight className='ml-2'/>
              </a>
              */}
            </div>
          </div>
        ))}
      </div>
    </section>
  )

export default Services