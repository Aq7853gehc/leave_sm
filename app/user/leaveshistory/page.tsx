import { Separator } from "@/components/ui/separator"
import {  columns } from "./columns"
import { DataTable } from "./data-table"

 export async function getData(): Promise<LeavesHistory[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      type: "Casual leaves",
      status: "pending",
      startdate: "May 4,2024",
      enddate:"May 7, 2024"
    },
    {
      id: "728ed52f",
      type: "sick leave",
      status: "cancel",
      startdate: "May 4,2024",
      enddate:"May 7, 2024"
    },
    {
      id: "728ed52f",
      type: "Casual leaves",
      status: "approved",
      startdate: "May 4,2024",
      enddate:"May 7, 2024"
    },
    {
      id: "728ed52f",
      type: "Casual leaves",
      status: "pending",
      startdate: "May 4,2024",
      enddate:"May 7, 2024"
    },
    {
      id: "728ed52f",
      type: "Casual leaves",
      status: "pending",
      startdate: "May 4,2024",
      enddate:"May 7, 2024"
    },
    {
      id: "728ed52f",
      type: "Casual leaves",
      status: "pending",
      startdate: "May 4,2024",
      enddate:"May 7, 2024"
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold">Leave History</h1>
      <Separator className="mb-5 mt-2"/>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
