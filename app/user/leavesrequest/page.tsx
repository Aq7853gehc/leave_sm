"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  leaveType: string;
  startDate: string;
  endDate: string;
  alternatePhoneNumber: string;
  leaveReason: string;
  startTime: string;
  endTime: string;
  document: File | null; // Changed to File or null
}

const LeaveRequest: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    leaveType: "",
    startDate: "",
    endDate: "",
    alternatePhoneNumber: "",
    leaveReason: "",
    startTime: "",
    endTime: "",
    document: null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0], // Set the first file
      }));
    }
  };

  const handleLeaveTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      leaveType: event.target.value,
    }));
  };

  return (
    <div className="h-screen w-full flex flex-col ">
      <h1 className="text-4xl font-bold">Leaves Request</h1>
      <p className="text-base text-gray-500">Here apply for leaves</p>
      <Separator className="mb-1" />
      <div className="flex w-full h-full  py-20 gap-20 px-3">
        <div className="w-full max-w-2xl  sm:max-w-3xl lg:max-w-2xl rounded border-gray-300 dark:border-input">
          <form className="">
            <div className="mb-3">
              <label
                htmlFor="leaveType"
                className="mb-1 block text-base font-medium text-[#07074D] dark:text-white"
              >
                Leave Types
              </label>
              <select
                className="w-full rounded-md border border-input bg-background py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-blue-600 focus:shadow-md"
                name="leaveType"
                id="leaveType"
                value={formData.leaveType}
                onChange={handleLeaveTypeChange}
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
                    htmlFor="startDate"
                    className="mb-1 block text-base font-medium text-[#07074D] dark:text-white"
                  >
                    Start Date
                  </label>
                  <Input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="endDate"
                    className="mb-1 block text-base font-medium text-[#07074D] dark:text-white"
                  >
                    End Date
                  </label>
                  <Input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            {formData.leaveType === "short" && (
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="startTime"
                      className="mb-1 block text-base font-medium text-[#07074D] dark:text-white"
                    >
                      Start Time
                    </label>
                    <Input
                      type="time"
                      id="startTime"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="endTime"
                      className="mb-1 block text-base font-medium text-[#07074D] dark:text-white"
                    >
                      End Time
                    </label>
                    <Input
                      type="time"
                      id="endTime"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="mb-5">
              <label
                htmlFor="alternatePhoneNumber"
                className="mb-1 block text-base font-medium text-[#07074D] dark:text-white"
              >
                Alternate Phone Number (optional)
              </label>
              <Input
                placeholder="Enter your phone number"
                type="tel"
                name="alternatePhoneNumber" // Fixed name
                id="alternatePhoneNumber"
                value={formData.alternatePhoneNumber}
                onChange={handleChange}
              />
            </div>
            {formData.leaveType === "medical" && (
              <div className="mb-2">
                <label
                  htmlFor="document"
                  className="mb-1 block text-base font-medium text-[#07074D] dark:text-white"
                >
                  Upload Documents (if any)
                </label>
                <Input
                  id="document"
                  type="file"
                  name="document"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                />
              </div>
            )}
            <div className="mb-2 pt-3">
              <label className="mb-2 block text-base text-[#07074D] dark:text-white sm:text-xl">
                Reason for Leave
              </label>
              <div className="flex flex-wrap">
                <div className="w-full sm:w-full">
                  <Textarea
                    placeholder="Type reason here..."
                    name="leaveReason"
                    value={formData.leaveReason}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap md:justify-between  flex-col gap-5 ">
              <Button variant="destructive" type="reset">
                Cancel Request
              </Button>
              <Button
                className="bg-blue-500 hover:bg-blue-600 dark:text-white"
                type="submit"
              >
                Submit Request
              </Button>
              <Button variant="outline" type="button">
                Save as Draft
              </Button>
            </div>
          </form>
        </div>
        <div className="bg-gray-300/20 dark:bg-transparent rounded-md w-fit hidden md:block">
          <Image
            src={"/request.svg"}
            alt="img"
            width={0}
            height={0}
            className="object-cover w-fit h-fit "
          />
        </div>
      </div>
    </div>
  );
};

export default LeaveRequest;
