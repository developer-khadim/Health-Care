import React from 'react'

const Button = ({ white, text, full, fullwhite }) => {
  return (
    <button className={`flex items-center font-semibold px-8 py-2 rounded-md hover:scale-105 ${white ? 'bg-transparent text-black px-3' : 'bg-active text-white'} 
        ${full ? 'rounded-full py-3 px-5' : 'rounded-md'} ${fullwhite ? 'rounded-full py-3 px-5 bg-white text-[#007E85] font-light ' : ''}`} >{text}</button>
  )
}

export default Button