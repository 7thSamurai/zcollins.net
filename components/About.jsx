import React from 'react'
import Image from 'next/image'
import { Button } from '.'
import { socialMedia } from '@/constants'
import { HiArrowLongRight } from 'react-icons/hi2'

const About = () => (
  <section className='mx-4 bg-middle-gray'>
    <div className='text-center p-10'>
      <h1 className='text-5xl py-2 font-bold md:text-6xl font-redhat'>Zach Collins</h1>
      <h2 className='text-2xl py-2 md:text-3xl'>Software Developer</h2>

      {/* About me summary */}
      <p className='text-md py-5 leading-8 text-eerie-black md:text-xl max-w-xl mx-auto'>
        Freelancer and independant contractor providing software development services.
        Specializes in automating and optimizing you business with custom applications to increase your productivity and profit!
      </p>

      <Button title={
        <a href='#contact' className='flex flex-row items-center'>
          Hire Me
          <HiArrowLongRight className='ml-2'/>
        </a>
      }/>
    </div>

    {/* Social media */}
    <div className='text-5xl flex justify-center gap-16 py-3 text-roman-silver'>
      {socialMedia.map((social) => (
        <a key={social.name} title={social.name} href={social.link}>
          {social.icon}
        </a>
      ))}
    </div>

    <div className=''>
      <Image/>
    </div>
  </section>
)

export default About