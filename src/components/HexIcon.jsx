import React from 'react'
import { BsHexagonFill } from 'react-icons/bs'

/* Hexagon Icon */
const HexIcon = (props) => (
  <div className={`relative ${props.styles}`}>
    {/* Hexagon background */}
    <BsHexagonFill className='text-6xl md:text-8xl text-keppel block'/>

    {/* Actual icon */}
    <h2 className='text-4xl md:text-6xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{props.icon}</h2>
  </div>
)

export default HexIcon