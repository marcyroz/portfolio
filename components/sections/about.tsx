import Image from "next/image";
import { Separator } from "../ui/separator";
import Title from "../title";

export default function About() {
  return (
    <section
      id="about"
      className="flex h-screen gap-40 items-center px-40 justify-center snap-start"
    >
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
          Sou uma Jovem de 21 anos recém formada em Análise e Desenvolvimento de
          Sistemas, e adoro o mundo da tecnologia e da arte! Sempre fui uma
          pessoa muito criativa, e encontrei na programação uma forma de unir
          minhas duas paixões. Gosto de desenvolver softwares, sites,
          aplicativos e jogos, e também de criar artes digitais, ilustrações e
          animações. Acredito que a tecnologia pode ser uma ferramenta poderosa
          para transformar o mundo, e quero contribuir para isso com meu
          trabalho e olhar artístico.
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
    </section>
  );
}
