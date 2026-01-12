import React from "react";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

interface CustomSeparatorProps {
  className?: string;
}
export default function CustomSeparator({ className }: CustomSeparatorProps) {
  return (
    <div
      className={cn(
        "self-start w-full h-10 lg:h-15 flex items-center gap-4 lg:gap-8",
        className
      )}
    >
      <Separator className="flex-1" />
      <div className="w-10 lg:w-13 h-full flex flex-col gap-2">
        <div className=" bg-popover flex-1 rounded-sm" />
        <div className=" bg-popover h-2 lg:h-3 rounded-sm" />
      </div>
      <Separator className="flex-1" />
    </div>
  );
}
