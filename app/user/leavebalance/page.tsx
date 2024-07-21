import { Separator } from "@/components/ui/separator";
import { bal } from "@/constants/data";
import React from "react";
import { DataTable } from "./data-table";
import { balanceColumns } from "./columns";

const LeaveBalance = () => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-4xl font-black">Leaves Balance</h1>
      <p className="text-base text-gray-500">Here your's balances of leaves</p>
      <Separator className="my-2" />
      <div>
        {/* Balanced here*/}
        <div className="relative flex flex-wrap items-center  justify-around  gap-5 w-full pb-2  pr-7 no-scrollbar ">
          {bal.map((itmes) => (
            <div className="relative min-w-[10rem]  flex flex-col  justify-center  p-4 transition-all duration-150  border rounded-xl cursor-pointer hover:shadow-lg hover:border-black">
              <p className=" font-medium ">{itmes.leaveType}</p>
              <h1 className="text-2xl font-bold">
                {itmes.used} /{" "}
                <span className="font-semibold">{itmes.total}</span>{" "}
                <span>days</span>
              </h1>
              <p className="text-gray-500 text-xs">{itmes.text}</p>
            </div>
          ))}
        </div>
        <DataTable columns={balanceColumns} data={bal}/>
      </div>
    </div>
  );
};

export default LeaveBalance;
