"use client"
import React, { useState } from "react";
import { AiOutlineMenu ,AiOutlineCloseCircle} from "react-icons/ai";


const Hero = () => {
  const [show,setShow] = useState(false)
  return (
   <>
   {!show ?  <div className="flex justify-between items-center text-white h-24 border border-red-500 px-[10px]">
      <div className="text-3xl font-bold text-[#00df9a] border bg-yellow-300">
        REACT.
      </div>
      <div className="w-[50%] text-xl flex justify-between items-center">
        <ul className="w-[70%] flex justify-between">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Resources</li>
        </ul>
        <div onClick = {()=>setShow(!show)}>
          <AiOutlineMenu className="text-3xl" />
        </div>
      </div>
    </div> :  <div  className="flex flex-col ease-in-out duration-300 justify-evenly text-white h-[200px] w-[400px] border border-red-500 px-[10px]">
     <div className="flex justify-between">
     <div className=" text-3xl font-bold text-[#00df9a] border bg-yellow-300">
        REACT.
      </div>
      <div onClick = {()=>setShow(!show)}><AiOutlineCloseCircle className="text-3xl" /></div>
     </div>
     
        <ul className="w-[70%] flex flex-col ">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Resources</li>
        </ul>
       
     
    </div>}
   </>
  );
};

export default Hero;
