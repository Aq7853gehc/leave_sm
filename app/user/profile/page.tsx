import ProfileAI from "@/components/ProfileAI";
import { Separator } from "@/components/ui/separator";
import { profile } from "@/constants/data";
import React from "react";

const Profile = () => {
  return (
    <section className="mt-2 flex flex-col w-full relative px-2 nax-h-screen overflow-scroll no-scrollbar">
      <h1 className="text-4xl font-bold ">Profile</h1>
      <Separator className="mb-2" />
      {/* <div className="flex flex-col w-full gap-10 border min-w-[20rem] max-w-lg shadow-md">
        <h1>{}</h1>
      </div> */}
      <ProfileAI/>
    </section>
  );
};

export default Profile;
