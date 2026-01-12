import Image from "next/image";
import { Separator } from "../ui/separator";
import Title from "../title";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section
      id="about"
      className="flex-col flex min-h-screen gap-40 items-center px-5 py-15 lg:px-40 lg:py-0 lg:flex-row justify-center snap-start"
    >
      <div className="relative hidden lg:block">
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
          unoptimized
          className="absolute -top-18 left-10 -rotate-25"
        />
      </div>
      <div className="flex flex-col gap-8 lg:gap-16 lg:w-120">
        <Title title={t("title")} color="bg-tertiary" />
        <p className="font-bold text-lg">{t("text")}</p>
        <div className="relative lg:hidden size-85 self-center mt-20">
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
            unoptimized
            className="absolute -top-18 left-10 -rotate-25"
          />
        </div>
        <div className="flex items-center gap-5 w-full">
          <Separator className="flex-1" />
          <div className="w-[100px] h-[100px] relative shrink-0">
            <Image
              src="/animations/computer.gif"
              alt="Computer Animation"
              fill
              unoptimized
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
