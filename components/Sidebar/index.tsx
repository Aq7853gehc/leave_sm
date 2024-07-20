"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { LuHome } from "react-icons/lu";
import { usePathname } from "next/navigation";
import {  BiLogOut } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { Separator } from "../ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label"


const Sidebar = () => {
  const [close, setClose] = useState<Boolean>(false);
  const path = usePathname();
  return (
    <aside
      className={`relative pt-2  sm:flex flex-col border h-screen min-w-[18rem]  shadow`}
    >
    
      
      {/* Header 
      // <div className="block sm:hidden">
      //   <IoMdClose
      //     size={32}
      //     className="absolute right-1"
      //     onClick={() => setClose(true)}
      //   />
      // </div> */}
 
      <section className="h-[20rem] flex flex-col justify-center gap-2 flex-1 items-center">
        {/* Profile pic and heading */}
        <div className="rounded-full w-[200px] h-[200px]">
          <Image
            src={"/image_profile.jpg"}
            alt="profile"
            width={200}
            height={200}
            className="rounded-full w-full h-full object-cover border-black  "
          />
        </div>

        <div className="  rounded-3xl  flex justify-center items-center flex-col">
          <Popover >
            <PopoverTrigger className="text-blue-500 text-sm">Edit</PopoverTrigger>
            <PopoverContent className="max-w-xs border-2" >
              <div className="flex max-w-xs w-full bg-transparent ">
                <div className="grid w-full max-w-sm items-center gap-1.5 bg-transparent">
                  <Label>Profile Pic</Label>
                  <Input id="picture" type="file" />
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <h1 className="text-3xl md:text-2xl font-semibold">Ritik Kohli</h1>
          <p className="text-gray-600 text-xl md:text-base font-medium">
            ID 123-456-789
          </p>
        </div>
      </section>
      <Separator />

      {/* Nav links */}
      <section className=" flex flex-col p-5 gap-5  bg-white flex-1 ">
        {/* List of Link */}
        <Link
          href={"/user"}
          className={`${path === "/user" ? "bg-blue-500 text-white" : null}`}
        >
          <LuHome size={24} />
          Dashboard
        </Link>
        <Link
          href={"/user/profile"}
          className={`${
            path === "/user/profile" ? "text-white bg-blue-500" : null
          }`}
        >
          <CgProfile size={24} />
          Profile
        </Link>
        <Link
          href={"/user/leavesrequest"}
          className={`${
            path === "/user/leavesrequest" ? "text-white bg-blue-500" : null
          }`}
        >
          <FaPersonCirclePlus size={24} />
          Leave Request
        </Link>
        <Link
          href={"/user/leaveshistory"}
          className={`${
            path === "/user/leaveshistory" ? "bg-blue-500 text-white" : null
          } `}
        >
          <FaHistory size={24} />
          Leave History
        </Link>
        <Link
          href={"/user/setting"}
          className={` ${
            path === "/user/setting" ? "bg-blue-500 text-white" : null
          }  `}
        >
          <IoSettingsOutline size={24} />
          Setting
        </Link>
        <Link href={"/login"} className={`   `}>
          <BiLogOut size={24} />
          Logout
        </Link>
      </section>
    </aside>
  
  );
};

export default Sidebar;

