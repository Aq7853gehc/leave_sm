import ProfileAI from "@/components/ProfileAI";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/constants/data";
import React from "react";

const Profile = () => {
  return (
    <section className=" flex flex-col w-full relative px-2 nax-h-screen  no-scrollbar">
      <h1 className="text-4xl font-bold ">Profile</h1>
      <Separator className="mb-1" />
      
      <ProfileAI/>
    </section>
  );
};

export default Profile;
