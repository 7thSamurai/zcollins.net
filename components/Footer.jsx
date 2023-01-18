import React from 'react'
import { socialMedia } from '@/constants'

const Footer = () => (
  <section className='flex-col md:flex-row my-8 w-full'>
    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-gray-300'>
      <div>
        <p className='text-center'>
          Copyright &copy; {(new Date().getFullYear())} Zachary Collins.
        </p>
      </div>

      <div>
        <a href = 'mailto:contact@zcollins.net' className='text-center'>contact@zcollins.net</a>
      </div>

      <div className='flex flex-row mt-6 md:mt-0 mb-10 text-gray-600'>
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