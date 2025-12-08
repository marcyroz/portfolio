import React from "react";
import { Button } from "../ui/button";
import { Download, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen flex px-40 items-center justify-between">
      <div className="flex flex-col gap-2 relative">
        <h1 className="text-white text-7xl font-bold">Hi! I am Marcelly.</h1>
        <h2 className="text-primary font-bold text-3xl">
          Frontend Developer and Designer
        </h2>
        <h3 className="font-semibold text-xl max-w-96">
          I’m guided by creativity, skill and love for what I do!
        </h3>
        <div className="flex gap-4">
          <Button variant="secondary">
            Contact me
            <Mail />
          </Button>
          <Button variant="outline" className="text-white">
            My CV
            <Download />
          </Button>
        </div>
        <div className="absolute -bottom-20 -left-20">
          <Image src="/star-2.svg" alt="Hero Image" width={80} height={80} />
        </div>
      </div>
      <Image src="/hero.svg" alt="Hero Image" width={550} height={550} />
    </section>
  );
}
