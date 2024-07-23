"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const LeaveRequest: React.FC = () => {
  const [leaveType, setLeaveType] = useState<string>("");

  const handleLeaveTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLeaveType(event.target.value);
  };

  return (
    <div className="h-screen w-full flex flex-col overflow-scroll">
      <h1 className="text-4xl font-bold">Leaves Request</h1>
      <p className="text-base text-gray-500">Here apply for leaves</p>
      <Separator className="mb-1" />
      <div className="flex w-full h-full items-center py-5 flex-col">
        <div className="mx-auto w-full max-w-2xl p-3 border-2 rounded-lg border-gray-300 bg-white dark:bg-black">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="mb-3">
              <label
                htmlFor=""
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Leave Types
              </label>
              <select
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-blue-600 focus:shadow-md"
                name=""
                id=""
              >
                <option value="">Select Leave Type</option>
                <option value="annual">Annual Leave</option>
                <option value="sick">Sick Leave</option>
                <option value="maternity">Maternity Leave</option>
                <option value="paternity">Paternity Leave</option>
                <option value="parental">Parental Leave</option>
                <option value="half">Half Day Leave</option>
                <option value="compassionate">Compassionate Leave</option>
                <option value="personal">Personal Leave</option>
                <option value="short">Short Leave</option>
                <option value="study">Study Leave</option>
                <option value="medical">Medical Leave</option>
                <option value="publicHoliday">Public Holiday Leave</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor=""
                    className="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    Start Date
                  </label>
                  <Input type="date" id="startDate" name="startDate" />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor=""
                    className="mb-1 block text-base font-medium text-[#07074D]"
                  >
                    End Date
                  </label>
                  <Input type="date" id="endDate" name="endDate" />
                </div>
              </div>
            </div>
            {leaveType === "short" && (

              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="startDate"
                      className="mb-1 block text-base font-medium text-[#07074D]"
                    >
                      Start Time
                    </label>
                    <Input type="time" id="startTime" name="startTime" />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="endTime"
                      className="mb-1 block text-base font-medium text-[#07074D]"
                    >
                      End Time
                    </label>
                    <Input type="time" id="endTime" name="endTime" />
                  </div>
                </div>
              </div>
            )}
            <div className="mb-5">
              <label
                htmlFor=""
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Alternate Phone Number (optional)
              </label>
              <Input
                placeholder="Enter your phone number"
                type="tel"
                name="phone"
                id="phone"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor=""
                className="mb-1 block text-base font-medium text-[#07074D]"
              >
                Alternate Email Address
              </label>

              <Input type="email" placeholder="Enter your email" required />
            </div>
            <div className="mb-2 pt-3">
              <label className="mb-2 block text-base text-[#07074D] sm:text-xl dark:text-white">
                Reason for Leave
              </label>
              <div className="flex flex-wrap">
                <div className="w-full sm:w-full">
                  <Textarea placeholder="Type reason here..." name="reason" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-around">
              <Button variant={"destructive"}>Cancel Request</Button>
              <Button className="bg-blue-500 hover:bg-blue-600 ">
                Submit Request
              </Button>
              <Button variant="outline" type="button">
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


