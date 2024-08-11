"use client";
import { DonutChart } from "@/components/DonoutChart";
import { RadarChart } from "@/components/RadarChart";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaFileExport } from "react-icons/fa";
import { DataTable } from "./(dashboard)/data-table";
import { employeColumn, requestColumne } from "./(dashboard)/columns";
import { bal } from "@/constants/data";
import { employee } from "./employee/page";
import { requests } from "./leave/request/page";

const page = () => {
  return (
    <div className="flex flex-col gap-4 md:justify-between max-h-screen w-full h-full py-3">
      {/* Dashboard */}
      <div className="w-full border-b-2 border-black pb-2 flex justify-between">
        <h1 className="text-3xl">Admin Dashboard</h1>
        <div className="flex gap-5">
          <Button className="bg-blue-600 text-white flex gap-2 hover:bg-blue-800">
            <FaFileExport />
            Report
          </Button>
          <Button className="bg-blue-600 text-white flex gap-2 hover:bg-blue-800">
            <FaFileExport />
            Report
          </Button>
        </div>
      </div>

      <div className="w-full grid  h-full grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="border border-black w-full  row-span-2 relative rounded-xl lg:col-span-2 flex gap-5 p-2 justify-around h-[30rem] overflow-y-hidden no-scrollbar">
          <RadarChart />
          <DonutChart title="Leave type " />
          <DonutChart title="Employees" />
          <DonutChart title="Department " />
        </div>
        <div
          className="border border-black w-full h-fit md:h-full pb-2 relative rounded-xl items-center justify-evenly flex 
         flex-col "
        >
          <div className="flex justify-between px-3 py-2 w-full">
            <h1 className="text-2xl font-bold">Employees Data</h1>
            <Button className="bg-blue-500 hover:bg-blue-800">Add New</Button>
          </div>
          <div className={"h-fit w-full px-2"}>
            <DataTable
              columns={employeColumn}
              data={employee.filter((d) => d.id <= 7)}
            />
          </div>
        </div>
        <div
          className="border border-black w-full h-fit md:h-full pb-2 relative rounded-xl items-center justify-evenly flex 
         flex-col "
        >
          <div className="flex justify-between px-3 py-2 w-full">
            <h1 className="text-2xl font-bold">Leaves Requests</h1>
            <Button className="bg-blue-500 hover:bg-blue-800">Visit</Button>
          </div>
          <div className={"h-fit w-full px-2"}>
            <DataTable
              columns={requestColumne}
              data={requests.filter((d) => d.id <= 7)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
