"use client"
import Card from "@/components/card";
import React, { useState } from "react";
import {AiOutlinePlus} from "react-icons/ai"
import { BiHomeAlt ,BiLibrary} from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import {RiGlobalLine} from "react-icons/ri"

const icons = [
  { text: "Home", icon: <BiHomeAlt /> },
  { text: "Search", icon: <BsSearch /> },
];

const Spotify = () => {
    const [showText,setShowText] = useState(icons[0].text)
  return (
    <div className="bg-black  w-full h-screen">
      <div className="flex flex-col mt-2 ml-5 h-screen gap-5 w-[350px]">
        <div className="flex flex-col  justify-evenly bg-[#131316] h-[120px] rounded-2xl cursor-pointer">
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
        <div className="flex flex-col flex-1 bg-[#0b0b0c] rounded-2xl p-[10px] justify-between">
            <div className="flex text-lg text-white w-full bg-[#131316] px-[5px] justify-between items-center ">
                <div className="flex gap-3 items-center p-[10px]">
                    <div className="text-xl"> <BiLibrary /> </div>
                    <p>Your Library</p>
                </div>
                <AiOutlinePlus/>
            </div>
            <div className=" flex flex-col overflow-y-scroll gap-5 h-[150px] pt-[10px] pb-[10px]" >
           <Card head = "Create your first playlist" text = "It's easy,we'll help you" btn = "Create playlist" />
           <Card head = "Let's find some podcasts to follow" text = "We'll keep you updated on new episodes" btn = "Browse poscasts" />
            
            </div>
            <div className="grid grid-cols-3 justify-items-start h-[90px]   px-[15px] text-gray-500 text-xs">
            <p classname="w-[100px]">Legal</p>
            <p classname="w-[100px]">Privacy Center</p>
            <p classname="w-[100px]">Privacy Policy</p>
            <p>Cookies</p>
            <p>About Ads</p>
            <p>Accessibility</p>
            <p>Cookies</p>
            </div>
            <div className="flex gap-1 justify-center items-center rounded-3xl text-white border p-[8px] w-[110px]">
            <RiGlobalLine/>
            <button>English</button>
            </div>
           
        </div>
      </div>
    </div>
  );
};

export default Spotify;
