import LoginForm from "@/components/LoginForm";
import TypingAnimation from "@/components/TypingAnimaton";
import Head from "next/head";
import { FaCheckSquare } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center ">
      <Head>
        <title>Leave Management System</title>
        <meta
          name="description"
          content="Welcome to the Leave Management System"
        />
      </Head>
      <div className="text-center mb-12">
        <div className="flex  gap-4 justify-center items-center">
          <div className="lg:w-32 w-24 max-sm:w-16">
            <img src="dbitlogo.png" alt="" />
          </div>

          <h1 className="text-3xl max-sm:text-2xl text-gray-700 lg:text-5xl font-bold">
            DON BOSCO <span className="text-[#f1cf39]">INSTITUTE</span>
            <br /><span className="text-[#e40f35]"> OF TECHNOLOGY</span>
          </h1>
        </div>
        <div className="mt-8">
          <TypingAnimation />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:items-start items-center gap-8 w-full max-w-6xl">
        <div className="bg-white max-lg:hidden p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h2 className="text-3xl text-center font-semibold text-gray-800 mb-4">
            System Specifications
          </h2>
          <div className="flex gap-8">
            <div className="w-[80%]">
              <img src="pesron2.jpg" />
            </div>
            <ul className="space-y-3 text-gray-700 text-md sm:text-lg">
              <li className="flex items-center">
                <FaCheckSquare className="text-green-600 mr-2" />
                Manage leaves for faculty and staff efficiently.
              </li>
              <li className="flex items-center">
                <FaCheckSquare className="text-green-600 mr-2" />
                Track leave history and approvals.
              </li>
              <li className="flex items-center">
                <FaCheckSquare className="text-green-600 mr-2" />
                User-friendly interface with secure login.
              </li>
              <li className="flex items-center">
                <FaCheckSquare className="text-green-600 mr-2" />
                Real-time notifications for leave approvals and rejections.
              </li>
              <li className="flex items-center">
                <FaCheckSquare className="text-green-600 mr-2" />
                Customizable leave policies and settings.
              </li>
            </ul>
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
