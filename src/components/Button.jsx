import React from 'react'

function Button(props) {
  return (
    <button type='button' className={`bg-keppel hover:bg-teal-400 text-white px-8 py-1 rounded-md font-medium text-[18px] outline-none ${props.styles}`}>
      {props.title}
    </button>
  )
}

export default Button