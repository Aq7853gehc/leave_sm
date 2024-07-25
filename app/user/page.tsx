"use client";
import ChartDemo from "@/components/ChartDemo";
import ListLeave from "@/components/ListLeave";
import { Separator } from "@/components/ui/separator";
import { bal } from "@/constants/data";
import { useRouter } from "next/navigation";
import React from "react";
import LeaveHistory from "./leaveshistory/page";

const Users = () => {
  const routes = useRouter();
  return (
    <section className=" flex flex-col  w-full pt-2 h-screen overflow-x-hidden no-scrollbar">
      <div className="flex sm:flex-row justify-between items-center sm:pr-3 flex-col sm:px-4 pr-5">
        <h1 className="sm:text-4xl  text-3xl font-bold ">Dashboard</h1>
        {/* <div className="flex ml-[75%] w-16 h-16 rounded-[50%] bg-slate-500"></div> */}
        <p
          onClick={() => routes.push("/user/leavesrequest")}
          className="text-sm border p-2 cursor-pointer rounded-lg  bg-blue-500 text-white w-fit"
        >
          Apply for leaves
        </p>
      </div>
      <Separator className="my-2" />
      <div className="relative  flex flex-wrap items-center max-md:ml-4 my-4 justify-around gap-3 w-full  ">
        {bal.map((itmes) => (
          <div
            className="relative  flex flex-col  justify-center items-center  p-4 transition-all duration-150  shadow-md dark:shadow-white rounded-xl cursor-pointer hover:shadow hover:border-black dark:hover:border-white dark:hover:shadow-white"
            onClick={() => routes.push("/user/leavebalance")}
          >
            <p className=" font-bold text-2xl md:text-3xl ">
              {itmes.leaveType}
            </p>
            <h1 className="md:text-2xl mt-2 text-xl text-gray-600 font-bold">
              {itmes.used} /{" "}
              <span className="font-semibold">{itmes.total}</span>{" "}
              <span>days</span>
            </h1>
            <p className="text-gray-500 text-xs">{itmes.text}</p>
          </div>
        ))}
        <div className="relative w-[18rem]  flex flex-col justify-center items-center  rounded-xl shadow-md  dark:shadow-white">
          <p className="font-bold text-2xl md:text-3xl ">Total Balance</p>
          <h1 className="md:text-2xl mt-2 text-xl text-gray-600 font-bold">
            45 <span>days</span>
          </h1>
          <p className="text-gray-500 text-xs">forward to next year</p>
        </div>
      </div>
      {/* second division */}

      <div className="flex ">
        <div className="md:w-1/3 w-full flex gap-10  items-center flex-col   border">
          {/* Charts of status */}



          <div className="w-full flex justify-center  flex-col relative border">
            <h1 className="md:text-4xl text-2xl font-bold ">
              Status of Leaves
            </h1>
            <p className="md:text-lg text-sm">
              This is the status of last 50 days
            </p>
          </div>
          <ChartDemo className="md:w-[30rem] w-[20rem] h-[20rem] flex items-center justify-center text-center md:h-[25rem] " />
        </div>
        <div className="w-full flex-1 flex gap-5 justify-center items-center flex-col px-4  ">
          {/* recent applied */}



          <div className="w-full flex justify-center  flex-col relative">
            <h1 className="sm:text-4xl text-2xl font-bold ">Recent Applied </h1>
            <p className="md:text-lg text-sm">
              This is the list of recent applied with in 10 days
            </p>
          </div>
          <ListLeave className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Users;
