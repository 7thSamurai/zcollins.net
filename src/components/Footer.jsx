import React from 'react'
import { socialMedia } from '../constants'

const Footer = () => (
  <section className='flex-col md:flex-row mt-8 w-full text-eerie-black bg-ghost-white'>
    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-gray-300'>
      {/* Copyright notice */}
      <div>
        <p className='text-center'>
          Copyright &copy; {(new Date().getFullYear())} Zachary Collins.
        </p>
      </div>

      {/* Contact info */}
      <div>
        <a href = 'mailto:contact@zcollins.net' className='text-center hover:underline hover:text-black'>contact@zcollins.net</a>
      </div>

      {/* Social Media */}
      <div className='flex flex-row mt-6 md:mt-0 mb-10'>
        {socialMedia.map((social, index) => (
          <a key={social.name} title={social.name} href={social.link} className={`text-roman-silver hover:text-keppel transition-colors duration-200 text-[32px] object-contain ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}>
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Footer