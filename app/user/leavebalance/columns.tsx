"use client"

import { ColumnDef } from "@tanstack/react-table"



export const balanceColumns:ColumnDef<Balance>[]=[
  {
    accessorKey:"leaveType",
    header:()=>(
      <div className="text-black font-bold">Leave Type</div>
    )
  },
  {
    accessorKey:"used",
    header:()=>(
      <div className="text-black font-bold">Leaves Used</div>
    ),
    cell:({row})=>(
      <div className="px-2">{row.getValue("used")}</div>
    )
  },
  {
    accessorKey:"total",
    header:()=>(
      <div className="text-black font-bold">Total leaves</div>
    ),
    cell:({row})=>(
      <div className="px-2">{row.getValue("total")}</div>
    )
  },
]