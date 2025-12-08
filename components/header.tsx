import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <nav className="h-28 bg-popover w-full gap-96 flex items-center justify-center sticky">
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
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
