import { ReactNode } from "react";
import   Sidebar from "@/components/AdminSidebar";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    // <div className="flex w-full h-screen">
    //   <main className="max-w-6xl flex-1 mx-auto py-4">{children}</main>
    // </div>

    <div className="flex w-full max-h-[100vh] gap-5 overflow-hidden">
      <Sidebar />
      <main className="w-full px-5 max-h-screen overflow-scroll no-scrollbar">{children}</main>
    </div>
  );
};

export default Layout;
