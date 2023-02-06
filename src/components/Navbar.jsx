import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { navLinks } from '../constants'
import { Button } from '.'
import Image from 'next/image'
import logo from '../assets/logo-low-res.png'

const Navbar = () => {
  {/* Mobile drop-down menu status */}
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full items-center py-1 px-4 flex justify-between fixed top-0 z-50 bg-ghost-white shadow-md'>
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
        <div onClick={() => setToggle((prev) => !prev)}>
          {toggle
            ? <AiOutlineClose className='w-[28px] h-[28px] object-contain'/>
            : <AiOutlineMenu className='w-[28px] h-[28px] object-contain'/>
          }
        </div>

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gradient-to-br from-gray-900 to-gray-800 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1 text-white'>
            {navLinks.map((nav, index) => (
              <li key={nav.name} className={'cursor-pointer text-[16px] mb-4'} title={nav.name}>
                <Link href={nav.link}>{nav.name}</Link>
              </li>
            ))}

            <li>
              <Link href="/#contact"><Button style='justify-end' title='Contact'/></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar