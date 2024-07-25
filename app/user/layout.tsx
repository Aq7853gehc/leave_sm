"use client";
import Sidebar from "@/components/Sidebar";
import { ReactNode, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Ellipsis } from "lucide-react";
import Iconbar from "@/components/Iconbar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeToggle from "@/components/ThemeToggle";
export default function User({ children }: { children: ReactNode }) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className="max-h-screen">
        <div className=" flex md:hidden w-full border justify-between items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {show ? (
                  <IoClose
                    className="text-3xl dark:text-white"
                    onClick={() => setShow(!show)}
                  />
                ) : (
                  <IoMenu
                    className="text-3xl dark:text-white"
                    onClick={() => setShow(!show)}
                  />
                )}
              </TooltipTrigger>
              <TooltipContent side="bottom" asChild>
              {show ? (
                 <h1>Close</h1>
                ) : (
                  <h1>Menu</h1>
                )}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <h1 className="dark:text-white text-black">DBIT</h1>
          <ThemeToggle />
        </div>
        <div className="flex  overflow-hidden bg-white dark:bg-black dark:text-white">
          {show ? (
            <div className="flex  md:w-fit z-40 absolute md:relative bg-white dark:bg-black ">
              <Sidebar />

              <Ellipsis
                className="z-30 relative left-[-8%] cursor-pointer hidden md:block"
                onClick={() => setShow(!show)}
              />
            </div>
          ) : (
            <div className="md:flex flex-col hidden w-[3.5rem] items-center h-screen border rounded-xl py-2 mr-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <IoMenu
                      className="text-3xl"
                      onClick={() => setShow(!show)}
                    />
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
    </ThemeProvider>
  );
}
