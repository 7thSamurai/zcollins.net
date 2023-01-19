import React from 'react'
import { BsHexagonFill } from 'react-icons/bs'

/* Hexagon Icon */
const HexIcon = (props) => (
  <div className='grid grid-cols-1 grid-rows-1 items-center'>
    {/* Hexagon background */}
    <BsHexagonFill className='text-8xl row-start-1 col-start-1 text-keppel'/>

    {/* Actual icon */}
    <div className='flex row-start-1 col-start-1 justify-center'>
      <h2 className='text-6xl text-white'>{props.icon}</h2>
    </div>
  </div>
)

export default HexIcon