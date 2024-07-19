import React from 'react'

 const LeaveRequest = () => {
    return (
<div className='w-full h-full flex justify-center items-center'>
        <div className="flex items-center justify-center flex-col p-12">
            <div className='flex w-full justify-center items-center font-bold mb-3'>
                <h1 className='text-3xl'>Leave Application</h1>
            </div>
            <div className="mx-auto w-full max-w-[550px] p-5 border-2 rounded-lg border-gray-300 bg-white">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                    <div className="mb-5">
                        <label
                            htmlFor=''
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Leave Types
                        </label>
                        <select className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-600 focus:shadow-md" name="" id="">
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
                                    htmlFor=''
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-600 focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor=''
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-600 focus:shadow-md"
                                />
                            </div>
                        </div>
         
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor=''
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Alternate  Phone Number
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Enter your phone number"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-600 focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor=''
                            className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Alternate Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-600 focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5 pt-3">
                        <label
                            className="mb-5 block text-base text-[#07074D] sm:text-xl"
                        >
                            Reason for Leave
                        </label>
                        <div className="-mx-3 flex flex-wrap">

                            <div className="w-full px-3 sm:w-1/2">

                                <textarea
                                    placeholder="Reason...."

                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-blue-600 focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>


                    <div className='flex flex-col gap-5'>
                        <div>
                            <button
                                className="hover:bg-transparent hover:text-black hover:border-2 hover:border-gray-400 w-full rounded-md bg-blue-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                Submit Request
                            </button>
                        </div>
                        <div>
                            <button
                                className="hover:bg-blue-600 hover:text-white w-full  rounded-md py-3 px-8 text-center text-base border-2 font-semibold border-gray-400"
                            >
                                Cancel Request
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}
export default LeaveRequest 