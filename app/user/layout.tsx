"use client";
import Sidebar from "@/components/Sidebar";
import { ReactNode, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Ellipsis } from "lucide-react";
import Iconbar from "@/components/Iconbar";
export default function User({ children }: { children: ReactNode }) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <main>
      <div className="flex overflow-hidden bg-white">
        {show ? (
          <div className="flex">
            <Sidebar />
            <Ellipsis
              className="z-30 relative left-[-8%]"
              onClick={() => setShow(!show)}
            />
          </div>
        ) : (
          
          <Iconbar />
        )}
        {children}
      </div>
    </main>
  );
}
