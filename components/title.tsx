import { cn } from "@/lib/utils";
import Image from "next/image";

interface TitleProps {
  title: string;
  color: string;
  className?: string;
}
export default function Title({ title, color, className }: TitleProps) {
  return (
    <div className="flex gap-4 relative items-center w-fit">
      <div className={cn("w-2 h-7", color)} />
      <h2 className={cn("text-4xl text-white font-bold", className)}>
        {title}
      </h2>
      <Image
        src="/star-3.svg"
        alt="Sparkles Icon"
        width={60}
        height={60}
        className="absolute -right-16 -top-10 rotate -scale-x-100"
      />
    </div>
  );
}
