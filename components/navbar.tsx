"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import DrawerMenu from "./drawer-menu";
import { Toggle } from "./ui/toggle";
import { useParams, useRouter } from "next/navigation";

export default function Navbar() {
  const t = useTranslations("nav");
  const router = useRouter();
  const { locale } = useParams();

  const [currentLanguage, setCurrentLanguage] = useState(locale);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigationLinks = [
    { title: t("about"), url: "#about", color: "bg-secondary" },
    { title: t("skills"), url: "#skills", color: "bg-tertiary" },
    { title: t("portfolio"), url: "#portfolio", color: "bg-primary" },
    { title: t("contact"), url: "#contact", color: "bg-secondary" },
  ];

  const handleLanguageToggle = () => {
    if (currentLanguage === "en") {
      setCurrentLanguage("pt");
      router.replace("/pt-br");
    } else {
      setCurrentLanguage("en");
      router.replace("/en");
    }
  };

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
                    link.color,
                  )}
                />
              </li>
            ))}
            <li className="relative flex">
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
            </li>
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
