"use client";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { ImProfile } from "react-icons/im";
import { MdAccountCircle } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { VscLayoutActivitybarLeft } from "react-icons/vsc";
import { FaPalette } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdContactSupport } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import ListLeave from "@/components/ListLeave";
import { profile } from "@/constants/data";
import { useTheme } from "next-themes";
const ProfileSetting = ({ edit, setEdit }:{
  edit: boolean,
  setEdit:React.Dispatch<React.SetStateAction<boolean>>
}) => (
  <div className="ml-5 shadow-md dark:shadow-white border mb-8 rounded-lg p-5 mr-5">
    <div className="flex gap-1">
      <ImProfile className="mt-1 text-3xl" />
      <h1 className="text-2xl">Profile Setting</h1>
    </div>
    {edit ? (
      <div className="flex max-sm:flex-col mt-5">
        <div className="w-full flex flex-col gap-2">
          {["Name", "DOB", "Gender", "Contact", "Address"].map((field, index) => (
            <div className="flex" key={index}>
              <p className="w-1/2 text-lg">{field}:</p>
              <p>{field === "Address" ? "D-27, Shaheen Bagh Okhla" : "Sample Data"}</p>
            </div>
          ))}
        </div>
        <div className="sm:w-full max-sm:flex mt-2">
          <button onClick={() => setEdit(!edit)} className="text-white max-sm:w-full max-sm:mr-4 bg-blue-500 p-2 mr-4 rounded-sm">
            Edit Profile
          </button>
        </div>
      </div>
    ) : (
      <div className="flex max-lg:flex-col mt-5">
        <div className="w-full flex flex-col gap-2">
          {["Name", "DOB", "Gender", "Contact", "Address"].map((field, index) => (
            <div className="flex max-lg:flex-col" key={index}>
              <label className="w-1/2 text-lg">{field}:</label>
              <input type={field === "DOB" ? "date" : "text"} className="p-2 lg:w-1/4 border dark:border-black rounded-lg outline-none" placeholder={`Sample ${field}`} />
            </div>
          ))}
        </div>
        <div className="sm:w-full max-sm:flex mt-2">
          <button onClick={() => setEdit(!edit)} className="text-white max-sm:w-full max-sm:mr-4 bg-blue-500 p-2 mr-4 rounded-sm">
            Save Changes
          </button>
        </div>
      </div>
    )}
  </div>
);

const AccountSetting = () => (
  <div className="ml-5 shadow-md dark:shadow-white border mb-8 rounded-lg p-5 mr-5">
    <div className="flex gap-1">
      <MdAccountCircle className="text-4xl" />
      <h1 className="text-2xl">Account Setting</h1>
    </div>
    <div className="w-full gap-2 flex-col flex mt-5 mb-5">
      <div className="flex sm:flex-row flex-col">
        <p className="sm:w-1/4 text-lg">Your email:</p>
        <p className="sm:w-1/4 text-lg font-light">saadmehmood@gmail.com</p>
      </div>
      <div className="flex max-sm:flex-col">
        <p className="sm:w-1/4 text-lg">Your Password:</p>
        <p className="sm:w-1/4 text-lg font-light">************</p>
        <button className="text-white max-sm:mr-4 bg-blue-500 p-2 rounded-sm">change</button>
      </div>
    </div>
  </div>
);

const NotificationSetting = () => (
  <div className="ml-5 shadow-md dark:shadow-white border mb-8 rounded-lg p-5 mr-5">
    <div className="flex gap-1">
      <IoMdNotifications className="text-4xl" />
      <h1 className="text-2xl">Notification Setting</h1>
    </div>
    <div className="flex max-sm:flex-col mt-5">
      <div className="w-full flex flex-col gap-2">
        {["Email Notifications", "SMS Notifications", "Push Notifications"].map((notification, index) => (
          <div className="flex max-lg:flex-col" key={index}>
            <p className="lg:w-1/4 text-lg">{notification}:</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ThemeSetting = ({ setTheme, theme }:{
  theme:string | undefined,
  setTheme:React.Dispatch<React.SetStateAction<string>>

}) => (
  <div className="ml-5 shadow-md dark:shadow-white border mb-8 rounded-lg p-5 mr-5">
    <div className="flex gap-1">
      <FaPalette className="text-3xl" />
      <h1 className="text-2xl">Theme Setting</h1>
    </div>
    <div className="flex mt-5">
      <div className="w-full flex items-center">
        <p className="text-lg lg:w-1/4">Select Theme:</p>
        <div className="ml-4 lg:w-1/4 flex items-center">
          <label className="mr-2">Light</label>
          <input type="radio" name="theme" value="light" className="mr-4" onClick={() => setTheme("light")} defaultChecked={theme === "light"} />
          <label className="mr-2">Dark</label>
          <input type="radio" name="theme" onClick={() => setTheme("dark")} defaultChecked={theme === "dark"} />
        </div>
      </div>
    </div>
  </div>
);

const PrivacySetting = () => (
  <div className="ml-5 shadow-md dark:shadow-white border mb-8 rounded-lg p-5 mr-5">
    <div className="my-5 w-full border-b-2 border-black"></div>
    <div className="flex gap-1">
      <SiGnuprivacyguard className="text-3xl mt-1" />
      <h1 className="text-2xl">Privacy Setting</h1>
    </div>
    <div className="flex max-sm:flex-col mt-5">
      <div className="w-full flex flex-col">
        {["Data Sharing", "Cookies"].map((setting, index) => (
          <div className="w-full flex items-center" key={index}>
            <p className="text-lg w-1/2">{setting}:</p>
            <div className="ml-4 w-1/2 flex items-center">
              <label className="mr-2">{setting === "Data Sharing" ? "Enable" : "Accept"}</label>
              <input type="checkbox" name={setting.toLowerCase().replace(" ", "")} className="mr-4" />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center">
        <button className="text-white max-sm:w-full max-sm:mr-4 max-sm:mt-3 bg-blue-500 p-2 rounded-sm">Save Privacy Settings</button>
      </div>
    </div>
  </div>
);

const HelpAndSupport = () => (
  <div className="ml-5 shadow-md dark:shadow-white border mb-8 rounded-lg p-5 mr-5">
    <div className="flex">
      <MdContactSupport className="text-4xl" />
      <h1 className="text-2xl">Help and Support</h1>
    </div>
    <div className="w-full flex flex-col mt-5 gap-4">
      {["FAQ", "Contact Support", "Help Resources"].map((item, index) => (
        <div className="max-sm:w-[95%] border-2 p-2" key={index}>{item}</div>
      ))}
    </div>
  </div>
);

const Logout = () => (
  <div className="ml-5 shadow-md dark:shadow-white border mb-8 rounded-lg p-5 mr-5">
    <div className="flex">
      <IoLogOut className="text-4xl" />
      <h1 className="text-2xl">Logout</h1>
    </div>
    <div className="flex my-5 max-sm:flex-col">
      <p className="w-2/4 text-lg">Want to logout?</p>
      <button className="text-white bg-blue-500 p-2 max-sm:mt-4 max-sm:mr-4 rounded-sm">Logout</button>
    </div>
  </div>
);

const Setting = () => {
  const { setTheme, theme } = useTheme();
  const [edit, setEdit] = useState<boolean>(true);

  return (
    <div className="flex flex-col w-full max-w-screen max-h-screen h-full no-scrollbar">
      <div className="flex w-full flex-col text-center justify-center items-center">
        <h1 className="text-4xl mt-2 ml-5 font-black">Settings</h1>
        <p className="text-base ml-5 text-gray-500">Here you make changes according to your preference</p>
      </div>
      <Separator className="my-2" />
      <div className="w-full h-full rounded-lg max-h-screen overflow-scroll no-scrollbar">
        <ProfileSetting edit={edit} setEdit={setEdit} />
        <AccountSetting />
        <NotificationSetting />
        <ThemeSetting setTheme={setTheme} theme={theme} />
        <PrivacySetting />
        <HelpAndSupport />
        <Logout />
      </div>
    </div>
  );
};

export default Setting;
