import { cn } from "@/lib/utils";
import Image from "next/image";

const navigationLinks = [
  { title: "Home", url: "#", color: "bg-primary" },
  { title: "About", url: "#", color: "bg-secondary" },
  { title: "Skills", url: "#", color: "bg-tertiary" },
  { title: "Portfolio", url: "#", color: "bg-primary" },
  { title: "Contact", url: "#", color: "bg-secondary" },
];

export default function Navbar() {
  return (
    <nav className="h-28 bg-popover w-full px-40 flex items-center justify-between sticky">
      <div className="items-center flex gap-4">
        <Image
          src="/star.svg"
          alt="Logo"
          width={40}
          height={40}
          className="inline-block ml-2"
        />
        <span className="text-4xl font-semibold text-primary">
          Marcelly Farias
        </span>
      </div>
      <div>
        <ul className="flex gap-8 text-white text-xl font-semibold">
          {navigationLinks.map((link) => (
            <li
              key={link.title}
              className="relative flex group cursor-pointer hover:scale-105"
            >
              {link.title}
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
  );
}
