"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { FaPersonCirclePlus } from "react-icons/fa6";
import { LuHome } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BiCloset, BiLogOut } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
  const [close , setClose] = useState<Boolean>(false)
  const path = usePathname();
  return (
    <aside className={`relative pt-2 ${close?'hidden':"flex"} sm:flex flex-col border border-black h-screen min-w-[18rem]  `}>
      {/* Header  */}
      <div className="block sm:hidden">
        <IoMdClose size={32} className="absolute right-1" onClick={()=>setClose(true)}/>
      </div>
      <section className="h-1/2 flex flex-col  flex-1 justify-evenly items-center gap-3">
        {/* Profile pic and heading */}
        <Image
          src={"/anime.jpg"}
          alt="profile"
          width={200}
          height={200}
          className="rounded-full object-cover border max-w-[20rem] max-h-[20rem]
           "
        />
        <div className="  rounded-3xl  flex justify-center items-center flex-col">
          <h1 className="text-3xl md:text-2xl font-semibold">Kamlesh Sahani</h1>
          <p className="text-gray-600 text-xl md:text-base font-medium">
            ID 123-456-789
          </p>
        </div>
      </section>

      {/* Nav links */}
      <section className=" flex flex-col p-5 gap-5  bg-blue-900/70 flex-1 ">
        {/* List of Link */}
        <Link
          href={"/user"}
          className={`${path === "/user" ? "bg-white text-black" : null}`}
        >
          <LuHome size={24} />
          Dashboard
        </Link>
        <Link
          href={"/user/profile"}
          className={`${
            path === "/user/profile" ? "bg-white text-black" : null
          }`}
        >
          <CgProfile size={24} />
          Profile
        </Link>
        <Link
          href={"/user/leavesrequest"}
          className={`${
            path === "/user/leavesrequest" ? "bg-white text-black" : null
          }`}
        >
          <FaPersonCirclePlus size={24} />
          Leave Request
        </Link>
        <Link
          href={"/user/leaveshistory"}
          className={`${
            path === "/user/leaveshistory" ? "bg-white text-black" : null
          } `}
        >
          <FaHistory size={24} />
          Leave History
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
