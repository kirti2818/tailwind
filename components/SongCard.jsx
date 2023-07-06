import Image from 'next/image'
import React from 'react'

const SongCard = ({image , songTitle}) => {
    console.log(image);
  return (
    <div className='flex flex-col justify-around p-2 bg-[#1b1b1d] rounded-md hover:bg-[#363636]'>
       <Image className='rounded-md h-[80%] w-full' width={0} height = {0} src = {image} alt = "No image"/>
       <p className='text-white font-bold'>{songTitle}</p>
    </div>
  )
}

export default SongCard