"use client";
import ChartDemo from "@/components/ChartDemo";
import ListLeave from "@/components/ListLeave";
import { Separator } from "@/components/ui/separator";
import { bal } from "@/constants/data";
import { useRouter } from "next/navigation";
import React from "react";

const Users = () => {
  const routes = useRouter();
  return (
    <section className="mt-4 flex flex-col w-full relative  ">
      <h1 className="text-4xl font-bold ">Dashboard</h1>
      <Separator className="mb-2" />
      <div className="relative flex  h-[15rem] items-center justify-around  gap-5 w-full overflow-x-scroll sm:overflow-visible px-8 py-4  no-scrollbar">
        {/* balaced below  header part */}
        {bal.map((itmes) => (
          <div
            className="relative min-w-[12rem]  flex flex-col items-center justify-center  sm:p-4  border-black border rounded-xl"
          >
            <p className=" font-medium ">{itmes.leaveType}</p>
            <h1 className="text-2xl font-bold">
              {itmes.used} /{" "}
              <span className="font-semibold">{itmes.total}</span>{" "}
              <span>days</span>
            </h1>
            <p className="text-gray-500 text-sm">{itmes.text}</p>
            {/* button  */}
            <button
              className="relative md:top-4 md:left-5 text-sm font-medium rounded-full text-blue-700/80 hover:text-blue-700"
              onClick={() => routes.push("/user/leavesrequest")}
            >
              Apply leaves
            </button>
          </div>
        ))}
        <div className="relative min-w-[12rem]  flex flex-col items-center justify-center  sm:p-4  border-black border rounded-xl">
          {/* total balaced  */}
          <p className=" font-medium ">Total Balance</p>
          <h1 className="text-2xl font-bold">
            45 <span>days</span>
          </h1>
          <p className="text-gray-500 text-sm">forward to next year</p> 
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  border  w-full h-full">

        <div className="flex flex-col gap-10  w-full md:w-fit p-8 shadow-lg">
          {/* Charts of status */}
          <div className="w-full relative">
            <h1 className="text-4xl font-bold ">Status of Leaves</h1>
            <p>This is the status of last 50 days</p>
          </div>
          <ChartDemo className="md:w-[30rem] md:h-[25rem]" />
        </div>
        <div className="w-full p-8">
          {/* recent applied */}
          <h1 className="text-4xl font-bold text-[#010e59]">Recent Applied </h1>
          <p>This is the list of recent applied with in 10 days</p>
          <ListLeave />
        </div>
      </div>
    </section>
  );
};

export default Users;
