import React, { SetStateAction } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoMenu } from 'react-icons/io5'
import { Dispatch } from '@reduxjs/toolkit'
import { CgProfile } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import {  BiLogOut } from "react-icons/bi";
import { LuHome } from "react-icons/lu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"



const Iconbar = () => {
  return (
    <div className='grid w-[3rem] py-5 border rounded-xl'>
      {/* avtar */}
      <Avatar>
        <AvatarImage src='/image_profile.jpg'/>
        <AvatarFallback>KS</AvatarFallback>
      </Avatar>
      {/* Icons for links */}
      <div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <LuHome size={24}/>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}

export default Iconbar