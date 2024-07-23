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


// "use client"

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Separator } from "@/components/ui/separator";
// import { Textarea } from "@/components/ui/textarea";
// import React, { useState, ChangeEvent, FormEvent } from 'react';

// interface FormData {
//   leaveType: string;
//   startDate: string;
//   endDate: string;
//   alternatePhoneNumber: string;
//   leaveReason: string;
//   startTime: string;
//   endTime: string;
//   document: File | null;  // Changed to File or null
// }

// const LeaveRequest: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     leaveType: '',
//     startDate: '',
//     endDate: '',
//     alternatePhoneNumber: '',
//     leaveReason: '',
//     startTime: '',
//     endTime: '',
//     document: null
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, files } = e.target;
//     if (files && files.length > 0) {
//       setFormData(prevState => ({
//         ...prevState,
//         [name]: files[0] // Set the first file
//       }));
//     }
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const formDataToSend = new FormData();
//     for (const key in formData) {
//       if (key === 'document' && formData[key]) {
//         formDataToSend.append(key, formData[key]);
//       } else {
//         formDataToSend.append(key, formData[key]);
//       }
//     }

//     try {
//       const response = await fetch('/api/leave-request', {
//         method: 'POST',
//         body: formDataToSend,
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Success:', data);
//         // Handle successful response here
//       } else {
//         console.error('Error:', response.statusText);
//         // Handle error response here
//       }
//     } catch (error) {
//       console.error('Network Error:', error);
//       // Handle network error here
//     }
//   };

//   const handleLeaveTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setFormData(prevState => ({
//       ...prevState,
//       leaveType: event.target.value
//     }));
//   };

//   return (
//     <div className="h-screen w-full flex flex-col overflow-scroll">
//       <h1 className="text-4xl font-bold">Leaves Request</h1>
//       <p className="text-base text-gray-500">Here apply for leaves</p>
//       <Separator className="mb-1" />
//       <div className="flex w-full h-full items-center py-5 flex-col">
//         <div className="mx-auto w-full max-w-2xl p-3 border-2 rounded-lg border-gray-300 bg-white">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label
//                 htmlFor="leaveType"
//                 className="mb-1 block text-base font-medium text-[#07074D]"
//               >
//                 Leave Types
//               </label>
//               <select
//                 className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-blue-600 focus:shadow-md"
//                 name="leaveType"
//                 id="leaveType"
//                 value={formData.leaveType}
//                 onChange={handleLeaveTypeChange} // Fixed handler function
//               >
//                 <option value="">Select Leave Type</option>
//                 <option value="annual">Annual Leave</option>
//                 <option value="sick">Sick Leave</option>
//                 <option value="maternity">Maternity Leave</option>
//                 <option value="paternity">Paternity Leave</option>
//                 <option value="parental">Parental Leave</option>
//                 <option value="half">Half Day Leave</option>
//                 <option value="compassionate">Compassionate Leave</option>
//                 <option value="personal">Personal Leave</option>
//                 <option value="short">Short Leave</option>
//                 <option value="study">Study Leave</option>
//                 <option value="medical">Medical Leave</option>
//                 <option value="publicHoliday">Public Holiday Leave</option>
//                 <option value="others">Others</option>
//               </select>
//             </div>
//             <div className="-mx-3 flex flex-wrap">
//               <div className="w-full px-3 sm:w-1/2">
//                 <div className="mb-5">
//                   <label
//                     htmlFor="startDate"
//                     className="mb-1 block text-base font-medium text-[#07074D]"
//                   >
//                     Start Date
//                   </label>
//                   <Input
//                     type="date"
//                     id="startDate"
//                     name="startDate"
//                     value={formData.startDate}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//               <div className="w-full px-3 sm:w-1/2">
//                 <div className="mb-5">
//                   <label
//                     htmlFor="endDate"
//                     className="mb-1 block text-base font-medium text-[#07074D]"
//                   >
//                     End Date
//                   </label>
//                   <Input
//                     type="date"
//                     id="endDate"
//                     name="endDate"
//                     value={formData.endDate}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//             </div>
//             {formData.leaveType === "short" && (
//               <div className="-mx-3 flex flex-wrap">
//                 <div className="w-full px-3 sm:w-1/2">
//                   <div className="mb-5">
//                     <label
//                       htmlFor="startTime"
//                       className="mb-1 block text-base font-medium text-[#07074D]"
//                     >
//                       Start Time
//                     </label>
//                     <Input
//                       type="time"
//                       id="startTime"
//                       name="startTime"
//                       value={formData.startTime}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="w-full px-3 sm:w-1/2">
//                   <div className="mb-5">
//                     <label
//                       htmlFor="endTime"
//                       className="mb-1 block text-base font-medium text-[#07074D]"
//                     >
//                       End Time
//                     </label>
//                     <Input
//                       type="time"
//                       id="endTime"
//                       name="endTime"
//                       value={formData.endTime}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div className="mb-5">
//               <label
//                 htmlFor="alternatePhoneNumber"
//                 className="mb-1 block text-base font-medium text-[#07074D]"
//               >
//                 Alternate Phone Number (optional)
//               </label>
//               <Input
//                 placeholder="Enter your phone number"
//                 type="tel"
//                 name="alternatePhoneNumber" // Fixed name
//                 id="alternatePhoneNumber"
//                 value={formData.alternatePhoneNumber}
//                 onChange={handleChange}
//               />
//             </div>
//             {formData.leaveType === "medical" && (
//               <div className="mb-2">
//                 <label
//                   htmlFor="document"
//                   className="mb-1 block text-base font-medium text-[#07074D]"
//                 >
//                   Upload Documents (if any)
//                 </label>
//                 <input
//                   className="mb-1 block text-base w-56 font-medium text-[#07074D]"
//                   id="document"
//                   type="file"
//                   name="document"
//                   onChange={handleFileChange}
//                   accept=".pdf,.doc,.docx"
//                 />
//               </div>
//             )}
//             <div className="mb-2 pt-3">
//               <label className="mb-2 block text-base text-[#07074D] sm:text-xl">
//                 Reason for Leave
//               </label>
//               <div className="flex flex-wrap">
//                 <div className="w-full sm:w-full">
//                   <Textarea
//                     placeholder="Type reason here..."
//                     name="leaveReason"
//                     value={formData.leaveReason}
//                     onChange={handleChange}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-wrap justify-around">
//               <Button variant="destructive" type="reset">
//                 Cancel Request
//               </Button>
//               <Button className="bg-blue-500 hover:bg-blue-600" type="submit">
//                 Submit Request
//               </Button>
//               <Button variant="outline" type="button">
//                 Save as Draft
//               </Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeaveRequest;
