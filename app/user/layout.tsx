"use client"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ReactNode, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Ellipsis } from 'lucide-react';
export default function User({ children }: { children: ReactNode }) {
  const [show, setShow] = useState<boolean>(false)
  return (
    <main>
      <Navbar />
      <div className="flex  overflow-hidden bg-white">
        {
          show ?
            <div className="flex">
              <Sidebar />
              <Ellipsis className="z-30 relative left-[-8%]" onClick={() => setShow(!show)} />

            </div>
            : <IoMenu className="text-3xl mt-4 ml-5" onClick={() => setShow(!show)} />
        }
        {children}
      </div>
    </main>
  );
}
