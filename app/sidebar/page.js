"use client"
import React, { useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";

const NameArray = [
  { icon: <BiSolidDashboard />, name: "Dashboard" },
  { icon: <BiSolidDashboard />, name: "Work-order" },
  { icon: <BiSolidDashboard />, name: "Online-booking" },
  { icon: <BiSolidDashboard />, name: "Services" },
  { icon: <BiSolidDashboard />, name: "Contracts" },
  { icon: <BiSolidDashboard />, name: "Customer" },
  { icon: <BiSolidDashboard />, name: "Teams" },
  { icon: <BiSolidDashboard />, name: "Appointment" },
  { icon: <BiSolidDashboard />, name: "Marketing-Tools" },
];

const sidebar = () => {
  const [selectText,setSelectText] = useState(NameArray[0].name)
  return (
    <div className="flex flex-col gap-5 bg-red-600 w-[250px] h-screen text-gray-400 ">
      <div className=" flex flex-col h-[50%] w-[70%] justify-around mx-auto  bg-slate-100  text-md">
        {NameArray.map((el) => {
         if(el.name===selectText){
          return (
            <div onClick = {()=>setSelectText(el.name)} className="flex flex-row gap-4 items-center cursor-pointer text-yellow-300 ">
              <div>{el.icon}</div>
              <p>{el.name}</p>
            </div>
          );
         }
         else {
          return (
            <div onClick = {()=>setSelectText(el.name)} className="flex flex-row gap-4 items-center cursor-pointer  ">
              <div>{el.icon}</div>
              <p>{el.name}</p>
            </div>
          );
         }
        })}
      </div>
      <div className="bg-slate-100 w-[70%] mx-auto flex-grow "></div>
    </div>
  );
};

export default sidebar;
