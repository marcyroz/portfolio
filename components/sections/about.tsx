import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import Title from "../title";

export default function About() {
  return (
    <section className="px-40 flex justify-center gap-40 items-center h-screen">
      <div className="relative">
        <Image
          src="/me.png"
          alt="Foto Marcelly Farias"
          width={400}
          height={400}
          className="rounded-full"
        />
        <Image
          src="/asset-1.svg"
          alt="Wave Icon"
          width={100}
          height={100}
          className="absolute bottom-5 right-0"
        />
      </div>
      <div className="flex flex-col gap-16 w-96">
        <div className="flex gap-4 relative items-center w-fit">
          <Title title="About Me" color="bg-tertiary" />
        </div>
        <p className="font-bold text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Separator />
      </div>
    </section>
  );
}
