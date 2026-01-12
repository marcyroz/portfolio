import { Button } from "../ui/button";
import { Download, Mail } from "lucide-react";
import Image from "next/image";
import { useLocale } from "next-intl";

export default function Hero() {
  const locale = useLocale();
  const cvPath =
    locale === "pt-br" ? "/cv/marcelly-cv-pt-br.pdf" : "/cv/marcelly-cv-en.pdf";

  return (
    <section
      id="home"
      className="h-[calc(100vh-7rem)] flex px-40 items-center justify-between"
    >
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
            <a href="mailto:marcellyfarias.contato@gmail.com" target="_blank">
              Contact me
            </a>
            <Mail />
          </Button>
          <Button variant="outline" className="text-white" asChild>
            <a href={cvPath} download>
              My CV
              <Download />
            </a>
          </Button>
        </div>
        <div className="absolute -bottom-20 -left-20">
          <Image src="/star-2.svg" alt="Hero Image" width={80} height={80} />
        </div>
      </div>
      <div className="relative">
        <Image
          src="/hero.svg"
          alt="Hero background image"
          width={550}
          height={550}
          className="-z-10"
        />
        <Image
          src="/animations/me.gif"
          alt="Hero Image"
          width={800}
          height={800}
          className="absolute top-28 left-20"
        />
      </div>
    </section>
  );
}
