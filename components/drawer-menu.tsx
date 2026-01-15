"use client";

import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationLinks: {
    title: string;
    url: string;
    color: string;
  }[];
}

export default function DrawerMenu({
  isOpen,
  onClose,
  navigationLinks,
}: DrawerMenuProps) {
  return (
    <div className="lg:hidden">
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

      <aside
        className={`fixed top-0 right-0 h-screen w-64 bg-popover shadow-lg p-6 flex flex-col transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="mb-6 self-end cursor-pointer" onClick={onClose}>
          <X size={28} className="text-white" />
        </button>

        <nav className="flex flex-col space-y-6 text-xl font-semibold">
          {navigationLinks.map((link) => (
            <a
              key={link.title}
              href={link.url}
              onClick={onClose}
              className="text-white transition-transform relative w-fit"
            >
              {link.title}
              <div
                className={cn(
                  "w-full h-4 absolute -z-10 -bottom-1 -right-2",
                  link.color
                )}
              />
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
}
