import React from 'react'
import styles from '../styles'
import Image from 'next/image'
import { Heading, Button } from '.'
import { socialMedia } from '../constants'
import { BsArrowRight } from 'react-icons/bs'

const About = () => (
  <section className={`${styles.paddingX} mx-4 bg-ghost-white`}>
    <div className='text-center'>
      <Heading.H1 className='py-2'>Zach Collins</Heading.H1>
      <Heading.H3 className='py-2 font-normal'>Software Developer</Heading.H3>

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
        <a href='/#contact' className='inline-flex items-center'>
          Hire Me
          <BsArrowRight className='ml-2'/>
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