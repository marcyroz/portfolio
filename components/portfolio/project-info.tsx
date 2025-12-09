import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ChevronDown } from "lucide-react";
import React from "react";

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
    }[];
    technologies?: {
      name: string;
      icon: string;
    }[];
  };
  children?: React.ReactNode;
}

export default function ProjectInfo({ item }: ProjectInfoProps) {
  return (
    <div className="flex flex-col gap-5">
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
      <div className="flex items-center justify-between">
        <div className="flex gap-5">
          {item.links.map((link, index) => (
            <div key={index} className="flex gap-2 items-center">
              <div className="h-5 w-2 bg-primary" />
              {link.icon && typeof link.icon === "string" ? (
                <Image
                  src={link.icon}
                  alt={`${link.title} Icon`}
                  width={20}
                  height={20}
                />
              ) : null}
              {typeof link.icon !== "string" && link.icon}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold hover:text-white transition-colors"
              >
                {link.title}
              </a>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
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
      <div className="w-full flex">
        <Button variant="ghost">
          <Separator />
          Ver mais
          <ChevronDown />
          <Separator />
        </Button>
      </div>
    </div>
  );
}
