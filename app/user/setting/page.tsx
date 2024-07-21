import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const Setting = () => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-4xl font-black">Settings</h1>
      <p className="text-base text-gray-500">
        Here you make changes according to your prefrence
      </p>
      <Separator className="my-2" />
      <div>
        {/* Settings below */}
      
      </div>
    </div>
  );
};

export default Setting;
