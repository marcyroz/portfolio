import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface CollapsibleButtonProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
  isButtonHovered: boolean;
  setIsButtonHovered: (hovered: boolean) => void;
  t: (key: string) => string;
}

export default function CollapsibleButton({
  isExpanded,
  setIsExpanded,
  isButtonHovered,
  setIsButtonHovered,
  t,
}: CollapsibleButtonProps) {
  return (
    <div className="w-full flex justify-center items-center gap-4">
      <Separator
        className={cn(
          "transition-colors flex-1 h-0.5",
          isButtonHovered ? "bg-white" : "bg-popover-foreground",
        )}
      />
      <Button
        variant="ghost"
        className="group text-popover-foreground shrink-0 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
      >
        {isExpanded ? t("showLess") : t("showMore")}
        <ChevronDown
          strokeWidth={4}
          className={cn(
            "size-6 transition-transform duration-500",
            isExpanded && "rotate-180",
          )}
        />
      </Button>
      <Separator
        className={cn(
          "transition-colors flex-1 h-0.5",
          isButtonHovered ? "bg-white" : "bg-popover-foreground",
        )}
      />
    </div>
  );
}
