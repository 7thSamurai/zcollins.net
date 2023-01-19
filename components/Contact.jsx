import React from 'react'
import styles from '@/style'
import { contactInfo } from '@/constants'

function Contact() {
  return (
    <section id='contact' className={`${styles.paddingX} bg-ghost-white`}>
      <div className={'flex justify-between flex-col 2xl:flex-row 2xl:px-20 items-center p-6 bg-ghost-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100'}>
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl font-bold mb-6 text-center'>Contact Information</h2>

          {/* Contact notice */}
          <p className='text-eerie-black text-xl text-center mb-6 max-w-lg mx-auto'>
            If you have a project in mind, or simply have a few questions, please get in touch with me by using one of the following:
          </p>
        </div>

        <div className='flex flex-row items-center'>
          {/* Contact type */}
          <div>
            {contactInfo.map((contact) => (
              <h3 className='flex flex-row text-xl md:text-2xl items-center'>
                {contact.icon} &nbsp; {contact.name}:
              </h3>
            ))}
          </div>

          {/* Contact info */}
          <div className='ml-4'>
            {contactInfo.map((contact) => (
              <h3 className='text-xl md:text-2xl text-eerie-black'><a className='text-keppel hover:underline hover:text-teal-600' href={contact.info} title={contact.name}>{contact.text}</a></h3>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact