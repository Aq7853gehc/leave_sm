"use client";

import { ColumnDef } from "@tanstack/react-table";
import { RequestEmployeeType, RequestHistory } from "../adminTypes";

export const employeColumn: ColumnDef<RequestEmployeeType>[] = [
  {
    accessorKey: "name",
    header: () => (
      <div className="text-black dark:text-white dark:bg-red font-bold">
        Name
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: () => (
      <div className="text-black dark:text-white font-bold">Email</div>
    ),
    cell: ({ row }) => <div className="px-2">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "role",
    header: () => (
      <div className="text-black dark:text-white font-bold">Role</div>
    ),
    cell: ({ row }) => <div className="px-2">{row.getValue("role")}</div>,
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="font-bold text-black dark:text-white">Status</div>
    ),
    cell: ({ row }) => (
      <div className={`text-red-500`}>
        {row.getValue("status") === "Active" ? (
          <p className="text-green-500 dark:text-green-400">
            {row.getValue("status")}
          </p>
        ) : (
          <p className="text-red-500 dark:text-red-400">
            {row.getValue("status")}
          </p>
        )}
      </div>
    ),
  },
];
export const requestColumne: ColumnDef<RequestHistory>[] = [
  {
    accessorKey: "employee",
    header: () => (
      <div className="text-black dark:text-white dark:bg-red font-bold">
        Name
      </div>
    ),
  },
 
  {
    accessorKey: "reason",
    header: () => (
      <div className="text-black dark:text-white font-bold">Reason</div>
    ),
    cell: ({ row }) => <div className="px-2">{row.getValue("reason")}</div>,
  },
  {
    accessorKey: "duration",
    header: () => (
      <div className="text-black dark:text-white font-bold">For Days</div>
    ),
    cell: ({ row }) => <div className="px-2">{row.getValue("duration")}</div>,
  },
  {
    accessorKey: "status",
    header: ()=>(<div className="font-bold text-black dark:text-white">
      Status
    </div>),
    cell:({row})=>(

      <div className={`text-red-500`}>{row.getValue("status")==="PENDING"?<p className="text-yellow-500 dark:text-yellow-300">{row.getValue("status")}</p>:row.getValue("status")==="APPROVED"?<p className="text-green-500 dark:text-green-400">{row.getValue("status")}</p>:<p className="text-red-500 dark:text-red-400">{row.getValue("status")}</p>}</div>
    ) 
  },
];
