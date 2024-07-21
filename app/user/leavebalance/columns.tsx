"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaCentSign } from "react-icons/fa6";
import { BiDownArrow } from "react-icons/bi";

export const balanceColumns: ColumnDef<Balance>[] = [
  {
    accessorKey: "leaveType",
    header: () => <div className="text-black font-bold">Leave Type</div>,
  },
  {
    accessorKey: "used",
    header: () => <div className="text-black font-bold">Leaves Used</div>,
    cell: ({ row }) => <div className="px-2">{row.getValue("used")}</div>,
  },
  {
    accessorKey: "total",
    header: () => <div className="text-black font-bold">Total leaves</div>,
    cell: ({ row }) => <div className="px-2">{row.getValue("total")}</div>,
  },
  {
    accessorKey: "rules",
    header:()=>(
      <div className="text-black font-bold">Rules</div>
    ),
    cell: ({ row }) => (
      <div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger/>
            <AccordionContent>
             {row.getValue("text")}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    ),
  },
];
