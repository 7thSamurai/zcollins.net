import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { navLinks } from '@/constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full items-center py-6 px-4 mb-12 flex justify-between bg-gradient-to-b from-gray-400 to-slate-300 shadow-lg'>
      <a href='#' className='cursor-pointer flex flex-row'>
        <img src='' alt='ZC' className='h-[32px] mx-5'/>
        <h1 className='text-xl mx-5'>ZCollins.net</h1>
      </a>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={'cursor-pointer text-[16px] mr-10'} title={nav.title}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

        <li>
          <a href='#' title='Hire me!' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md'>Hire</a>
        </li>
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
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
              <a href='#' title='Hire me!' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md'>Hire</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar