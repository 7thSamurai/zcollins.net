import React from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from 'next/image'
import { socialMedia } from '@/constants'

const About = () => (
  <section>
    <div className='text-center p-10'>
      <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Zach Collins</h2>
      <h3 className='text-2xl py-2 md:text-3xl'>Software Developer</h3>
      <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>
        Freelancer and independant contractor providing software development services.
        Specializes in automating and optimizing you business with custom applications to increase your productivity and profit!
      </p>
    </div>

    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
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