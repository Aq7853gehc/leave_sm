import { Separator } from "@/components/ui/separator";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getData } from "@/constants/leavesdata";

export default async function DemoPage() {
  const data = await getData();
  const approve = data.filter((d) => d.status === "approved");
  return (
    <div className="mx-auto max-h-screen w-full px-2 h-full no-scrollbar scroll-smooth">
      <div className="flex items-center justify-between ">
        <div>
          <h1 className="text-4xl font-black ">Leave History</h1>
          <p className="font-medium text-base text-gray-400">
            This page is take the history of last years{" "}
          </p>
        </div>
        {/* <h2 className="text-2xl font-semibold">
          Balance: <span className="text-2xl font-medium">43 days</span>
        </h2> */}
        <div>
          <button className="bg-blue-500 p-3 rounded-lg text-white">View Balance</button>
        </div>
      </div>
      <Separator className="mb-2 mt-2" />
      <Tabs defaultValue="all" className="">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>

          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="cancel">Cancel</TabsTrigger>
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
        <TabsContent value="pending" className=" max-h-[110vh] overflow-scroll scroll-smooth border rounded-md no-scrollbar">
          <DataTable
            columns={columns}
            data={data.filter((d) => d.status === "pending")}
          />
        </TabsContent>
        <TabsContent value="cancel" className=" max-h-[110vh] overflow-scroll border rounded-md no-scrollbar">
          <DataTable
            columns={columns}
            data={data.filter((d) => d.status === "cancel")}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
