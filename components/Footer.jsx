import React from 'react'
import { socialMedia } from '@/constants'

const Footer = () => (
  <section className='flex-col md:flex-row my-8 w-full'>
    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-gray-300'>
      <div>
        <p className='text-center'>
          Copyright &copy; 2023 Zachary Collins
        </p>
      </div>

      <div className='flex flex-row mt-6 md:mt-0 text-gray-600'>
        {socialMedia.map((social, index) => (
          <a key={social.name} title={social.name} href={social.link} className={`text-[21px] object-contain ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}>
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Footer