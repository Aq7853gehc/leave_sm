"use client"
import { DonutChart } from "@/components/DonoutChart";
import { RadarChart } from "@/components/RadarChart";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaFileExport } from "react-icons/fa";
import { DataTable } from "./(dashboard)/data-table";
import { employeColumn } from "./(dashboard)/columns";
import { bal } from "@/constants/data";
import { requests } from "./employee/page";

const page = () => {
  return (
    <div className="flex flex-col gap-4 md:justify-between max-h-screen w-full h-full py-3">
      {/* Dashboard */}
      <div className="w-full border-b-2 border-black pb-2 flex justify-between">
        <h1 className="text-3xl">Admin Dashboard</h1>
        <div className="flex gap-5">
          <Button className="bg-blue-600 text-white flex gap-2">
            <FaFileExport />
            Report
          </Button>
          <Button className="bg-blue-600 text-white flex gap-2">
            <FaFileExport />
            Report
          </Button>
        </div>
      </div>

      <div className="flex w-full h-[90vh] overflow-scroll no-scrollbar">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 h-full gap-3">
          <div className="border border-black w-full h-fit relative rounded-xl col-span-2 flex p-2 justify-around overflow-scroll no-scrollbar">
            <RadarChart />
            <DonutChart title="Leave type " />
            <DonutChart title="Employees" />
            <DonutChart title="Department " />
          </div>
          <div className="border border-black w-full h-full relative rounded-xl overflow-hidden items-center justify-evenly flex flex-col ">
            <h1 className="text-2xl font-bold">Employee Request</h1>
            <div className={"h-fit w-full px-2"}>
              <DataTable
                columns={employeColumn}
                data={requests.filter((d) => d.id <= 7)}
              />
            </div>
          </div>
          <div className="border border-black w-full h-full relative rounded-xl  flex p-2">
            <RadarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
