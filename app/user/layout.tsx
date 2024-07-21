"use client";
import Sidebar from "@/components/Sidebar";
import { ReactNode, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Ellipsis } from "lucide-react";
import Iconbar from "@/components/Iconbar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function User({ children }: { children: ReactNode }) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <main className="">
      <div className="flex overflow-hidden bg-white">
        {show ? (
          <div className="flex">
            <Sidebar />
            <Ellipsis
              className="z-30 relative left-[-8%] cursor-pointer"
              onClick={() => setShow(!show)}
            />
          </div>
        ) : (
          <div className="flex flex-col w-[3rem] items-center h-screen border rounded-xl">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <IoMenu className="text-3xl" onClick={() => setShow(!show)} />
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <h1>Menu</h1>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Iconbar />
          </div>
        )}
        {children}
      </div>
    </main>
  );
}
