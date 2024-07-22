import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { ImProfile } from "react-icons/im";
import { MdAccountCircle } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { VscLayoutActivitybarLeft } from "react-icons/vsc";
import { FaPalette } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdContactSupport } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import ListLeave from '@/components/ListLeave';
const Setting = () => {
  return (
    <div className="flex flex-col w-full max-h-screen h-full  no-scrollbar">
      <h1 className="text-4xl font-black">Settings</h1>
      <p className="text-base text-gray-500">
        Here you make changes according to your prefrence
      </p>
      <Separator className="my-2" />
      <div className=" border-l-2 border-t-2 border-black w-full h-full rounded-lg max-h-screen  overflow-scroll no-scrollbar">
        <div className="my-2 ml-5">
          <div className="flex gap-1">
            <ImProfile className="mt-1 text-3xl" />
            <h1 className="text-2xl font-extrabold"> Profile Setting</h1>
          </div>
          <div className="flex mt-5">

            <div className="w-full flex flex-col gap-2">
              <div className="flex">
                <p className="w-1/4 text-lg font-extrabold">Name:</p>
                <p className="">Saad Mehmood</p>
              </div>
              <div className="flex">
                <p className="w-1/4 text-lg font-extrabold">Date Of Birth:</p>
                <p >17-05-2006</p>
              </div>
              <div className="flex">
                <p className="w-1/4 text-lg font-extrabold">Gender:</p>
                <p >Male</p>
              </div>
              <div className="flex">
                <p className="w-1/4 text-lg font-extrabold">Contact:</p>
                <p >9783468480</p>
              </div>
              <div className="flex">
                <p className="w-1/4 text-lg font-extrabold">Address:</p>
                <p >D-27, Shaheen Bagh Okhla</p>
              </div>
            </div>
            <div className="w-full">
              <button className="text-white bg-blue-500 p-2 rounded-sm ">Edit Profile</button>
            </div>
          </div>
          <div className="mt-5 w-full border-b-2 border-black"></div>
        </div>
        <div className="ml-5">
          <div className="flex gap-1">
            <MdAccountCircle className="text-4xl" />
            <h1 className="text-2xl font-extrabold"> Account Setting</h1>
          </div>
          <div className="w-full gap-2 flex-col flex mt-5 mb-5">
            <div className="flex">
              <p className="w-1/4 text-lg font-extrabold">
                Your Password:
              </p>
              <p className="w-1/4 text-lg font-light">
                ************
              </p>
              <button className="text-white bg-blue-500 p-2 rounded-sm ">change</button>
            </div>
            <div className="flex">
              <p className="w-1/4 text-lg font-extrabold">
                Your email:
              </p>
              <p className="w-1/4 text-lg font-light">saadmehmood@gmail.com</p>
              <button className="text-white bg-blue-500 p-2 rounded-sm ">change</button>
            </div>
          </div>
        </div>

        <div className="ml-5 ">
          <div className="my-5 w-full border-b-2 border-black"></div>
          <div className="flex">
            <IoMdNotifications className="text-4xl" />
            <h1 className="text-2xl font-extrabold"> Notification Setting</h1>
          </div>
        </div>
        <div className="ml-5">
          <div className="my-5 w-full border-b-2 border-black"></div>
          <div className="flex gap-1">
            <VscLayoutActivitybarLeft className="text-3xl " />
            <h1 className="text-2xl font-extrabold"> Recent Activity</h1>
          </div>
          <div className="flex">
            <div className="w-5/6">
              <ListLeave className="w-full" />
            </div>
            <div className="ml-5 mt-5">
              <button className="text-white bg-red-500 p-2 rounded-sm ">Delete</button>
            </div>
          </div>
        </div>
        <div className="ml-5">
          <div className="my-5 w-full border-b-2 border-black"></div>
          <div className="flex gap-1">
            <FaPalette className="text-3xl" />
            <h1 className="text-2xl font-extrabold"> Theme Setting</h1>
          </div>
        </div>
        <div className="ml-5">
          <div className="my-5 w-full border-b-2 border-black"></div>
          <div className="flex gap-1">
            <SiGnuprivacyguard className="text-3xl mt-1" />
            <h1 className="text-2xl font-extrabold">  privacy setting</h1>
          </div>
        </div>
        <div className="ml-5">
          <div className="my-5 w-full border-b-2 border-black"></div>
          <div className="flex ">
            <MdContactSupport className="text-4xl" />
            <h1 className="text-2xl font-extrabold">   Help and Support</h1>
          </div>
        </div>
        <div className="ml-5 flex flex-col">
          <div className="my-5 w-full border-b-2 border-black"></div>
          <div className="flex">
            <IoLogOut className="text-4xl" />
            <h1 className="text-2xl font-extrabold">  logout</h1>
          </div>
          <div className="flex my-5">
            <p className="w-2/4 text-lg font-extrabold">Want to logout?</p>
            <button className="text-white bg-blue-500 p-2 rounded-sm ">Logout</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Setting;
