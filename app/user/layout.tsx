import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

export default function User({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navbar />
      <div className="flex gap-2 overflow-hidden ">
        <Sidebar />
        {children}
      </div>
    </main>
  );
}
