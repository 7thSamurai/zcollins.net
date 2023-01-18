import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { navLinks } from '@/constants'
import { Button } from '.'

const Navbar = () => {
  {/* Mobile drop-down menu status */}
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full items-center py-6 px-4 mb-12 flex justify-between'>
      {/* Logo */}
      <a href='#' className='cursor-pointer flex flex-row'>
        <img src='' alt='ZC' className='h-[32px] mx-10'/>
      </a>

      {/* Desktop menu */}
      <div className='sm:flex hidden flex-1'>
        <ul className='list-none items-center flex flex-1 justify-start'>
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={'text-gray-600 hover:text-black cursor-pointer text-[18px] mr-10'} title={nav.title}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <Button style='justify-end' title='Hire'/>
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
              <li key={nav.id} className={'cursor-pointer text-[16px] mb-4'} title={nav.title}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            <li>
            <Button title='Hire'/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar