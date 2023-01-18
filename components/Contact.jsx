import React from 'react'
import { contactInfo } from '@/constants'

function Contact() {
  return (
    <section className='flex justify-center flex-col items-center'>
      <h2 className='text-3xl mb-6'>Contact Information</h2>

      <p className='text-xl text-center mb-6 max-w-lg mx-auto'>
        If you have a project in mind, or simply have a few questions, please get in touch with me using one of the following:
      </p>

      <div className='flex flex-row items-center'>
        <div>
          {contactInfo.map((contact) => (
            <h3 className='flex flex-row text-2xl items-center'>
              {contact.icon} &nbsp; {contact.name}:
            </h3>
          ))}
        </div>

        <div className='ml-4'>
          {contactInfo.map((contact) => (
            <h3 className='text-2xl'><a className='text-teal-600' href={contact.info}>{contact.text}</a></h3>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact