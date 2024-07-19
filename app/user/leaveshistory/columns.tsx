"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<LeavesHistory>[] = [
  {
    accessorKey: "type",
    header: ()=>(<div className="font-bold text-black">
      Type
    </div>),
  },
  {
    accessorKey: "status",
    header: ()=>(<div className="font-bold text-black">
      Status
    </div>),
    cell:({row})=>(

      <div className={`text-red-500`}>{row.getValue("status")==="pending"?<p className="text-yellow-400">{row.getValue("status")}</p>:row.getValue("status")==="approved"?<p className="text-green-500">{row.getValue("status")}</p>:<p className="text-red-500">{row.getValue("status")}</p>}</div>
    ) 
  },
  {
    accessorKey: "startdate",
    header: ()=>(<div className="font-bold text-black">
      Start Date
    </div>),
    
  },
  {
    accessorKey: "enddate",
    header: ()=>(<div className="font-bold text-black">
      End Date
    </div>),
    
  },
  {
    accessorKey: "duration",
    header: ()=>(<div className="font-bold text-black">
      Duration
    </div>),
    cell:({row})=>(
      <div className="">{row.getValue("duration")}</div>
    )
  },

]
