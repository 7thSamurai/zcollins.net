import React from 'react'
import styles from '@/style'
import Image from 'next/image'
import { Button } from '.'
import { socialMedia } from '@/constants'
import { HiArrowLongRight } from 'react-icons/hi2'

const About = () => (
  <section className={`${styles.paddingX} mx-4 bg-ghost-white`}>
    <div className='text-center'>
      <h1 className='text-5xl py-2 font-bold md:text-6xl font-redhat'>Zach Collins</h1>
      <h2 className='text-2xl py-2 md:text-3xl'>Software Developer</h2>

      {/* About me summary */}
      <p className='text-md py-5 leading-8 text-eerie-black md:text-xl max-w-2xl mx-auto'>
        Highly skilled and knowledgeable independent contractor and freelance developer.
        Specializing in creating custom software solutions to automate and optimize businesses
        with a focus on desktop applications and back-end development.
        Delivering custom, high-quality software systems to turn your ideas into reality!
      </p>
      <p className='text-md pb-5 leading-8 text-eerie-black md:text-xl max-w-2xl mx-auto'>
        If you are seeking a professional developer, please do not hesitate to reach out and contact me.
        I am happy to discuss your project with you and provide you with a detailed proposal outlining
        how I can assist you in achieving your goals.
      </p>

      <Button title={
        <a href='#contact' className='flex flex-row items-center'>
          Hire Me
          <HiArrowLongRight className='ml-2'/>
        </a>
      }/>
    </div>

    {/* Social media */}
    <div className='text-5xl flex justify-center gap-16 pt-10 text-roman-silver'>
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