import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Heading, Button } from '.';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const Service = (props) => (
  <>
    <Head>
      <title>{props.title}</title>
    </Head>

    <section className='mx-auto 2xl:w-4/5'>
      <Heading.H1 className='mb-8'>{props.title}</Heading.H1>
        
      <div className='text-lg text-eerie-black'>
        {props.children}
      </div>

      {/* Call to action */}
      <Link href='/#contact' className='flex justify-center py-8'>
        <Button styles='inline-flex items-center' title={
          <>
            Hire Me
            <BsArrowRight className='ml-2'/>
          </>
        }/>
      </Link>

      {/* Back */}
      <Link href='/#services' className='inline-flex w-fit items-center hover:underline text-keppel'>
        <BsArrowLeft className='mr-2'/>
        Back to Services
      </Link>
    </section>
  </>
);

export default Service;