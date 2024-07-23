import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const LeaveRequest = () => {
  return (
    <div className="h-screen w-full flex  flex-col overflow-scroll">
      <h1 className="text-4xl font-bold ">Leaves Request</h1>
      <p className="text-base text-gray-500">Here apply for leaves</p>
      <Separator className="mb-1" />
      <div className="flex w-full h-full items-center py-5 flex-col">
        <div className="mx-auto w-full max-w-2xl p-3 border-2 rounded-lg border-gray-300 bg-white dark:bg-black">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="mb-3">
              <label
                htmlFor=""
                className="mb-1 block text-base font-medium text-[#07074D] dark:text-white"
              >
                Leave Types
              </label>
              <select
                className="w-full rounded-md border border-input bg-background py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-blue-600 focus:shadow-md"
                name=""
                id=""
              >
                <option value="">Annual Leave</option>
                <option value="">Sick Leave</option>
                <option value="">Maternity Leave</option>
                <option value="">Paternity Leave</option>
                <option value="">Parental Leave</option>
                <option value="">Bereavement Leave</option>
                <option value="">Compassionate Leave</option>
                <option value="">Personal Leave</option>
                <option value="">Unpaid Leave</option>
                <option value="">Study Leave</option>
                <option value="">Medical Leave</option>
                <option value="">Public Holiday Leave</option>
                <option value="">Others</option>
              </select>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor=""
                    className="mb-1 block text-base font-medium text-[#07074D] dark:text-white"
                  >
                    Start Date
                  </label>

                  <Input type="date" />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor=""
                    className="mb-1 block text-base font-medium text-[#07074D] dark:text-white"
                  >
                    End Date
                  </label>

                  <Input type="date" />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor=""
                className="mb-1 block text-base font-medium text-[#07074D] dark:text-white"
              >
                Alternate Phone Number
              </label>

              <Input
                placeholder="Enter your phone number"
                type={"tel"}
                name="phone"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor=""
                className="mb-1 block text-base font-medium text-[#07074D] dark:text-white"
              >
                Alternate Email Address
              </label>

              <Input type="email" placeholder="Enter your email" required />
            </div>
            <div className="mb-2 pt-3">
              <label className="mb-2 block text-base text-[#07074D] sm:text-xl dark:text-white">
                Reason for Leave
              </label>
              <div className=" flex flex-wrap">
                <div className="w-full sm:w-full">
                  <Textarea placeholder="Type reason here..." />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-around">
              <Button variant={"destructive"}>Cancel Request</Button>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Submit Request
              </Button>
              <Button variant={"outline"} className="">
                Save as Draft
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LeaveRequest;
