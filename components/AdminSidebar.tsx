"use client";

import Link from "next/link";
import { AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineDatabase } from "react-icons/hi";
import { SlSettings } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { RiBuilding3Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { GrInherit } from "react-icons/gr";
import { PiKeyholeDuotone } from "react-icons/pi";
import {
  FaBarsProgress,
  FaCodePullRequest,
  FaDatabase,
  FaUser,
  FaWhmcs,
} from "react-icons/fa6";
import { IoBookOutline, IoMenuSharp } from "react-icons/io5";
import { GoGitPullRequest } from "react-icons/go";
import { VscGroupByRefType } from "react-icons/vsc";
import { IconType } from "react-icons/lib";
import {
  FaBook,
  FaChartBar,
  FaHome,
  FaSitemap,
  FaTimes,
  FaUserCheck,
  FaUsersCog,
} from "react-icons/fa";

type NavLink = {
  title: string;
  route?: string;
  icon: IconType;
  submenu?: {
    title: string;
    routes: string;
    icons: IconType;
  }[];
};

const navlin: NavLink[] = [
  {
    title: "Dashboard",
    route: "/admin",
    icon: FaHome,
  },
  {
    title: "Employee",
    route: "/admin/employee",
    icon: FaDatabase,
  },
  {
    title: "User Management",
    icon: FaUser,
    submenu: [
      {
        title: "Role",
        routes: "/admin/user-management/role",
        icons: FaUsersCog,
      },
      {
        title: "Permission",
        routes: "/admin/user-management/permission",
        icons: FaUserCheck,
      },
    ],
  },
  {
    title: "Department",
    icon: FaSitemap,
    submenu: [
      {
        title: "Course",
        routes: "/admin/department/course",
        icons: FaBarsProgress,
      },
      {
        title: "Subject",
        routes: "/admin/department/subject",
        icons: FaBook,
      },
    ],
  },
  {
    title: "Leave",
    icon: FaChartBar,
    submenu: [
      {
        title: "Leave Types",
        routes: "/admin/leave/leave-types",
        icons: VscGroupByRefType,
      },
      {
        title: "Leave Request",
        routes: "/admin/leave/request",
        icons: FaCodePullRequest,
      },
    ],
  },
  {
    title: "Setting",
    route: "/admin/settings",
    icon: FaWhmcs,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);
  const path = usePathname();
  return (
    <aside className="h-screen relative">
      <button
        onClick={() => setShow(!show)}
        className="absolute box md:hidden z-[999] duration-75"
      >
        {show ? (
          <FaTimes size={23} />
        ) : (
          <IoMenuSharp size={23} className="absolute left-2" />
        )}
      </button>

      <div
        className={`max-md:absolute bg-white z-[90] flex items-center gap-6 md:relative px-4 py-2 h-screen flex-col w-[18rem] shadow-xl md:flex transition-all ${
          show
            ? "translate-x-[0%] delay-75"
            : "max-md:-translate-x-[100%] duration-200"
        }`}
      >
        {/*header */}
        <h1 className="text-3xl text-blue-500 text-center font-bold">Admin</h1>
        <div className="overflow-y-auto w-full flex flex-col h-[70%] gap-1">
          {navlin.map((items, idx) => {
            const [subMenu, setSubMenu] = useState<boolean>(false);
            return (
              <div
                className={`relative flex flex-col justify-between box ${
                  path === items.route ? "text-blue-500" : ""
                }`}
                key={idx}
              >
                <Link
                  href={items.route || "#"}
                  className={`box justify-start hover:bg-blue-100 hover:text-blue-600 w-full hover:active ${
                    subMenu && "text-blue-600 font-bold"
                  }`}
                  onClick={() => items.submenu && setSubMenu(!subMenu)}
                >
                  <items.icon size={23} className="w-fit" />
                  <h1 className={`text-base font-medium flex-1 hover:backdrop-blur-sm`}>
                    {items.title}
                  </h1>
                  {items.submenu && (
                    <IoIosArrowDown
                      size={23}
                      className={`${
                        subMenu
                          ? "rotate-180 transition-all delay-75"
                          : "rotate-0 transition-all delay-75"
                      }`}
                    />
                  )}
                </Link>

                <div
                  className={`${subMenu ? "box" : "hidden"} flex flex-col`}
                >
                  {items.submenu &&
                    items.submenu.map((subItems, idx) => (
                      <Link
                        href={subItems.routes}
                        key={idx}
                        className={`flex w-full gap-2 pl-8 ${
                          path === subItems.routes ? "text-blue-500" : ""
                        }`}
                      >
                        <subItems.icons size={18} />
                        <h1 className={`text-base font-medium`}>
                          {subItems.title}
                        </h1>
                      </Link>
                    ))}
                </div>
              </div>
            );
          })}
          <div className="absolute left-0 bottom-6 py-5 w-[16rem] flex justify-center items-center">
            <button className="w-[14rem] border active border-slate-400 box active flex justify-center">
              Logout
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
