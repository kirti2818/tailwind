import React from 'react'

const Hero = () => {
  return (
    <div className="flex justify-between items-center  border border-red-800 text-white h-24 w-[1240px] mx-auto">
        <div className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</div>
        <ul className='flex w-full justify-between ' >
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Resources</li>
        </ul>
    </div>
  )
}

export default Hero