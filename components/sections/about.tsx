import Image from "next/image";
import { Separator } from "../ui/separator";
import Title from "../title";

export default function About() {
  return (
    <section className=" flex flex-col h-screen gap-44">
      <div className="self-start w-full px-20">
        <Separator />
      </div>
      <div className="flex px-40 gap-40 justify-center items-center">
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
          <Image
            src="/animations/gatinho.gif"
            alt="Cat Animation"
            width={150}
            height={150}
            className="absolute -top-18 left-10 -rotate-25"
          />
        </div>
        <div className="flex flex-col gap-16 w-120">
          <Title title="About Me" color="bg-tertiary" />
          <p className="font-bold text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex items-center gap-5 w-full">
            <Separator className="flex-1" />
            <div className="w-[100px] h-[100px] relative shrink-0">
              <Image
                src="/animations/computer.gif"
                alt="Computer Animation"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
