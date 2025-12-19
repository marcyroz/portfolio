"use client";

import Image from "next/image";
import { cloneElement, useState } from "react";
import DiscordIcon from "../icons/discord-icon";
import LinkedinIcon from "../icons/linkedin-icon";
import GithubIcon from "../icons/github-icon";
import BehanceIcon from "../icons/behance-icon";

const socials = [
  {
    name: "LinkedIn",
    icon: <LinkedinIcon />,
  },
  {
    name: "GitHub",
    icon: <GithubIcon />,
  },
  {
    name: "Behance",
    icon: <BehanceIcon />,
  },
  {
    name: "Discord",
    icon: <DiscordIcon />,
  },
];

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <footer className="bg-card-foreground flex flex-col p-28 items-center">
      <div className="flex gap-8">
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/star.svg"
                alt="Logo"
                width={40}
                height={40}
                className="inline-block ml-2"
              />
              <h4 className="font-semibold text-2xl text-white">
                Thanks for visiting!
              </h4>
            </div>
            <p className="font-bold text-lg max-w-2xl">
              If you're here, you probably took an interest in my work, so feel
              free to reach out professionally or just say hi on LinkedIn
              sometime.
            </p>
            <p className="font-bold text-lg max-w-2xl">
              I'm pretty active there! To stay updated on what I'm up to, follow
              me on my socials and feel free to drop by here again soon. See you
              later! ;)
            </p>
            <span className="font-bold text-lg">- Marcy</span>
          </div>
          <div className="flex">
            <Image
              src="/animations/gatinho-3.gif"
              alt="Cat Animation"
              width={150}
              height={150}
              className="object-contain self-end"
            />
          </div>
        </div>
        <div className="w-2 bg-white/20 self-stretch" />
        <div className="relative flex flex-col">
          <div className="flex-col gap-4 flex px-10 mb-10">
            <h4 className="font-semibold text-2xl text-white">Socials</h4>
            <div className="grid grid-cols-2 gap-4">
              {socials.map((social) => (
                <div
                  key={social.name}
                  className="flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
                  onMouseEnter={() => setHoveredIcon(social.name)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  {cloneElement(social.icon, {
                    width: 50,
                    height: 50,
                    color: hoveredIcon === social.name ? "#FFFFFF" : "#838383",
                  })}
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/star-3.svg"
            alt="sparkle"
            width={60}
            height={60}
            className="self-end"
          />
        </div>
      </div>
      <span className="text-lg">© Copyright 2025 | Marcelly Farias</span>
    </footer>
  );
}
