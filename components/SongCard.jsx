import Image from 'next/image'
import React from 'react'

const SongCard = ({image , songTitle}) => {
    console.log(image);
  return (
    <div>
       <Image width={150} height = {900} src = {image} alt = "No image"/>
       <p>{songTitle}</p>
    </div>
  )
}

export default SongCard