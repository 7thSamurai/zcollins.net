import React, { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../constants'
import { Button } from '.'
import Image from 'next/image'
import logo from '../assets/logo-low-res.png'

const Navbar = () => {
  {/* Mobile drop-down menu status */}
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full items-center py-1 px-4 flex justify-between fixed top-0 z-50 bg-ghost-white border-b border-gray-200'>
      {/* Logo */}
      <Link href='/' className='cursor-pointer ml-[-19px]'>
        <Image src={logo} alt='ZC' className='w-[100px] mr-10'/>
      </Link>

      {/* Desktop menu */}
      <div className='sm:flex hidden flex-1'>
        <ul className='list-none items-center flex flex-1 justify-start'>
          {navLinks.map((nav, index) => (
            <li key={nav.name} className={'text-eerie-black hover:text-black cursor-pointer text-[18px] mr-10'} title={nav.name}>
              <Link href={nav.link}>{nav.name}</Link>
            </li>
          ))}
        </ul>

        <Link href="/#contact"><Button style='justify-end' title='Contact'/></Link>
      </div>

      {/* Mobile menu*/}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        {/* Drop down button*/}
        <div className='text-roman-silver cursor-pointer' onClick={() => setToggle((prev) => !prev)}>
          {toggle
            ? <FiX className='w-[28px] h-[28px] object-contain'/>
            : <FiMenu className='w-[28px] h-[28px] object-contain'/>
          }
        </div>

        <div className={`${toggle ? 'flex' : 'hidden'} bg-ghost-white absolute top-[70px] right-0 w-full border-b border-gray-200`}>
          <ul className='list-none flex flex-col justify-end flex-1 bg-gray-50 border border-gray-100 rounded-lg p-4 m-4'>
            {navLinks.map((nav, index) => (
              <li key={nav.name} className='cursor-pointer text-[16px] py-2 pl-3 rounded hover:bg-gray-100 text-eerie-black font-inter'>
                <Link href={nav.link} onClick={() => setToggle(false)} className='block w-full'>{nav.name}</Link>
              </li>
            ))}

            <li className='cursor-pointer text-[16px] py-2 pl-3 rounded bg-keppel text-white font-inter'>
              <Link href='/#contact' onClick={() => setToggle(false)} className='block w-full'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar