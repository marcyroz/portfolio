import React from "react";
import { Toggle } from "./ui/toggle";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LanguageButtonProps {
  currentLanguage?: string | string[] | null;
  handleLanguageToggle: () => void;
}
export default function LanguageButton({
  currentLanguage,
  handleLanguageToggle,
}: LanguageButtonProps) {
  return (
    <Toggle
      className="p-0 h-auto hover:bg-transparent cursor-pointer data-[state=on]:bg-transparent"
      onClick={handleLanguageToggle}
    >
      <Image
        className={cn(
          "transition-opacity absolute",
          currentLanguage === "pt-br" ? "opacity-100" : "opacity-0",
        )}
        src="/languages/en.png"
        alt="English"
        width={24}
        height={24}
      />
      <Image
        className={cn(
          "transition-opacity absolute",
          currentLanguage === "en" ? "opacity-100" : "opacity-0",
        )}
        src="/languages/pt-br.png"
        alt="Portuguese"
        width={24}
        height={24}
      />
    </Toggle>
  );
}
