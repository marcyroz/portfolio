"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

interface ProjectInfoProps {
  item: {
    id: number;
    title: string;
    description: string;
    bannerImage: string;
    links: {
      icon?: string | React.ReactNode;
      title: string;
      url: string;
      hoverColor?: string;
    }[];
    technologies?: {
      name: string;
      icon: string;
    }[];
  };
  renderContent?: () => React.ReactNode;
}

export default function ProjectInfo({ item, renderContent }: ProjectInfoProps) {
  const t = useTranslations("common");

  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div className="flex flex-col gap-5 w-full">
      <h3 className="text-primary font-semibold text-4xl">{item.title}</h3>
      <p className="font-bold text-lg">{item.description}</p>
      <div className="flex relative w-full h-104 rounded-3xl">
        <Image
          src={item.bannerImage}
          alt={`${item.title} Banner`}
          fill
          className="object-cover rounded-3xl"
        />
      </div>
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <div className="flex gap-5">
          {item.links.map((link, index) => (
            <div
              key={index}
              className="flex gap-2 items-center group hover:scale-105"
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <div className="h-5 w-2 bg-primary" />
              {link.icon && typeof link.icon === "string" ? (
                <Image
                  src={link.icon}
                  alt={`${link.title} Icon`}
                  width={20}
                  height={20}
                  className="transition-all group-hover:brightness-200"
                />
              ) : (
                <div className="transition-all group-hover:brightness-200">
                  {link.icon}
                </div>
              )}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold transition-colors"
                style={{
                  color:
                    hoveredLink === index
                      ? link.hoverColor || "#FFFFFF"
                      : "inherit",
                }}
              >
                {link.title}
              </a>
            </div>
          ))}
        </div>
        <div className="flex gap-2 flex-wrap max-w-2xl lg:justify-end">
          {item.technologies?.map((tech, index) => (
            <Image
              key={index}
              src={tech.icon}
              alt={`${tech.name} Icon`}
              width={40}
              height={40}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {renderContent && renderContent()}
          </motion.div>
        )}
      </AnimatePresence>
      {renderContent && (
        <div className="w-full flex justify-center items-center gap-4">
          <Separator
            className={cn(
              "transition-colors flex-1 h-0.5",
              isButtonHovered ? "bg-white" : "bg-foreground"
            )}
          />
          <Button
            variant="ghost"
            className="group text-foreground shrink-0"
            onClick={() => setIsExpanded(!isExpanded)}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            {isExpanded ? t("showLess") : t("showMore")}
            <ChevronDown
              className={cn(
                "size-6 transition-transform duration-500",
                isExpanded && "rotate-180"
              )}
            />
          </Button>
          <Separator
            className={cn(
              "transition-colors flex-1 h-0.5",
              isButtonHovered ? "bg-white" : "bg-foreground"
            )}
          />
        </div>
      )}
    </div>
  );
}
