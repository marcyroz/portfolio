import React from "react";

interface DetailTextProps {
  text: string;
  icon: React.ReactNode;
}
export default function DetailText({ text, icon }: DetailTextProps) {
  return (
    <div className="text-center text-white items-center flex flex-col gap-4">
      <span className="text-lg font-bold max-w-60">{text}</span>
      {icon}
    </div>
  );
}
