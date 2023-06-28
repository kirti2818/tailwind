"use client"
import React, { useState } from "react";
import {AiOutlinePlus} from "react-icons/ai"
import { BiHomeAlt ,BiLibrary} from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

const icons = [
  { text: "Home", icon: <BiHomeAlt /> },
  { text: "Search", icon: <BsSearch /> },
];

const Spotify = () => {
    const [showText,setShowText] = useState(icons[0].text)
  return (
    <div className="bg-black  w-full h-screen">
      <div className="flex flex-col mt-2 ml-5 h-screen gap-5 w-[300px]">
        <div className="flex flex-col  justify-evenly bg-[#0b0b0c] h-[120px] rounded-2xl cursor-pointer">
          {icons.map((el) => {
           if(el.text===showText){
            return (
                <div onClick = {()=>setShowText(el.text)} className="flex gap-3 pl-6 items-center font-bold text-white text-xl">
                  <div>{el.icon}</div>
                  <p>{el.text}</p>
                </div>
              );
           }
           else {
            return (
                <div onClick = {()=>setShowText(el.text)} className="flex gap-3 pl-6 items-center  text-white text-xl cursor-pointer">
                  <div>{el.icon}</div>
                  <p>{el.text}</p>
                </div>
              );
           }
          })}
        </div>
        <div className="flex flex-col flex-1 bg-[#0b0b0c] rounded-2xl p-[20px] ">
            <div className="flex text-lg text-white w-full  px-[5px] justify-between items-center ">
                <div className="flex gap-3 items-center">
                    <div className="text-xl"><BiLibrary /></div>
                    <p>Your Library</p>
                </div>
                <AiOutlinePlus/>
            </div>
            <div className=" border flex-grow" ></div>
            <div></div>
        </div>
      </div>
    </div>
  );
};

export default Spotify;
