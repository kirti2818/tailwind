import React from 'react'

const Card = ({head,text,btn}) => {
  return (
    <div className="flex flex-col gap-2 bg-[#36363a] rounded-lg w-full text-white p-[15px]">
            <h3 className="font-bold">{head}</h3>
            <p className="text-sm">{text}</p>
            <div className="rounded-2xl text-black mt-2 bg-white p-[5px] w-[130px] text-center text-sm font-bold"><button>{btn}</button></div>
            </div>
  )
}

export default Card
