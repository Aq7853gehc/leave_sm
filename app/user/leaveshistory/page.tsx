
"use client";
import { Separator } from "@/components/ui/separator";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getData } from "@/constants/leavesdata";
import { useRouter } from "next/navigation";

export default async function DemoPage() {
  const router = useRouter();
  const data = await getData();
  return (
    <div className="mx-auto max-h-screen w-full px-2 h-full no-scrollbar scroll-smooth">
      <div className="flex items-center justify-between ">
        <div>
          <h1 className="text-4xl font-black ">Leave History</h1>
          <p className="font-medium text-base text-gray-400">
            This page is to view the leave history of the last year
          </p>
        </div>
        <div>
          <button
            className="bg-blue-500 p-3 rounded-lg text-white shadow"
            onClick={() => router.push("/user/leavebalance")}
          >
            View Balance
          </button>
        </div>
      </div>
      <Separator className="mb-2 mt-2" />
      <Tabs defaultValue="all" className="">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="decline">Decline</TabsTrigger>
          <TabsTrigger value="sickleave">Sick Leave</TabsTrigger>
          <TabsTrigger value="medicalleave">Medical Leave</TabsTrigger>
          <TabsTrigger value="shortleave">Short Leave</TabsTrigger>
          <TabsTrigger value="annualleave">Annual Leave</TabsTrigger>
        </TabsList>
        <TabsContent
          value="all"
          className="max-h-[110vh] overflow-scroll scroll-smooth border rounded-md no-scrollbar "
        >
          <DataTable columns={columns} data={data} />
        </TabsContent>
        <TabsContent
          value="approved"
          className="max-h-[110vh] overflow-scroll border scroll-smooth rounded-md no-scrollbar"
        >
          <DataTable
            columns={columns}
            data={data.filter((d) => d.status === "approved")}
          />
        </TabsContent>
        <TabsContent
          value="pending"
          className=" max-h-[110vh] overflow-scroll scroll-smooth border rounded-md no-scrollbar"
        >
          <DataTable
            columns={columns}
            data={data.filter((d) => d.status === "pending")}
          />
        </TabsContent>
        <TabsContent
          value="decline"
          className=" max-h-[110vh] overflow-scroll scroll-smooth border rounded-md no-scrollbar"
        >
          <DataTable
            columns={columns}
            data={data.filter((d) => d.status === "decline")}
          />
        </TabsContent>
        <TabsContent
          value="sickleave"
          className=" max-h-[110vh] overflow-scroll scroll-smooth border rounded-md no-scrollbar"
        >
          <DataTable
            columns={columns}
            data={data.filter((d) => d.type === "Sick Leave")}
          />
        </TabsContent>
        <TabsContent
          value="medicalleave"
          className=" max-h-[110vh] overflow-scroll scroll-smooth border rounded-md no-scrollbar"
        >
          <DataTable
            columns={columns}
            data={data.filter((d) => d.type === "Medical Leave")}
          />
        </TabsContent>
        <TabsContent
          value="shortleave"
          className=" max-h-[110vh] overflow-scroll scroll-smooth border rounded-md no-scrollbar"
        >
          <DataTable
            columns={columns}
            data={data.filter((d) => d.type === "Short Leave")}
          />
        </TabsContent>
        <TabsContent
          value="annualleave"
          className=" max-h-[110vh] overflow-scroll scroll-smooth border rounded-md no-scrollbar"
        >
          <DataTable
            columns={columns}
            data={data.filter((d) => d.type === "Annual Leave")}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

