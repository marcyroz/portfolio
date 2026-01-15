"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import DrawerMenu from "./drawer-menu";

export default function Navbar() {
  const t = useTranslations("nav");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigationLinks = [
    { title: t("about"), url: "#about", color: "bg-secondary" },
    { title: t("skills"), url: "#skills", color: "bg-tertiary" },
    { title: t("portfolio"), url: "#portfolio", color: "bg-primary" },
    { title: t("contact"), url: "#contact", color: "bg-secondary" },
  ];

  return (
    <>
      <nav className="h-28 px-5 bg-popover w-full lg:px-40 flex items-center justify-between">
        <div className="items-center flex gap-4">
          <Image
            src="/star.svg"
            alt="Logo"
            width={40}
            height={40}
            className="inline-block ml-2"
          />
          <span className="text-3xl lg:text-4xl font-semibold text-primary">
            Marcelly Farias
          </span>
        </div>
        <Button
          variant="ghost"
          className="lg:hidden"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Menu className="size-8" />
        </Button>
        <div className="hidden lg:block">
          <ul className="flex gap-8 text-white text-xl font-semibold">
            {navigationLinks.map((link) => (
              <li
                key={link.title}
                className="relative flex group cursor-pointer hover:scale-105"
              >
                <a href={link.url}>{link.title}</a>
                <div
                  className={cn(
                    "group-hover:block hidden w-full h-4 absolute -z-10 -bottom-1 -left-2",
                    link.color
                  )}
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <DrawerMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        navigationLinks={navigationLinks}
      />
    </>
  );
}
