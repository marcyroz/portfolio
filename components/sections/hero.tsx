import { Button } from "../ui/button";
import { Download, Mail } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function Hero() {
  const locale = useLocale();
  const t = useTranslations("hero");
  const cvPath =
    locale === "pt-br" ? "/cv/marcelly-cv-pt-br.pdf" : "/cv/marcelly-cv-en.pdf";

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-7rem)] lg:h-[calc(100vh-7rem)] flex items-center justify-center flex-col px-5 gap-10 lg:flex-row lg:justify-between lg:px-40 lg:gap-0"
    >
      <div className="flex flex-col gap-2 relative">
        <h1 className="text-white text-5xl lg:text-7xl font-bold">
          {t("greeting")}
        </h1>
        <h2 className="text-primary font-bold text-3xl">{t("title")}</h2>
        <h3 className="font-semibold text-xl max-w-96">{t("subtitle")}</h3>
        <div className="flex gap-4">
          <Button variant="secondary">
            <a href="mailto:marcellyfarias.contato@gmail.com" target="_blank">
              {t("contactButton")}
            </a>
            <Mail />
          </Button>
          <Button variant="outline" className="text-white" asChild>
            <a href={cvPath} download>
              {t("cvButton")}
              <Download />
            </a>
          </Button>
        </div>
        <div className="absolute -bottom-30 lg:-bottom-20 lg:-left-20">
          <Image src="/star-2.svg" alt="Hero Image" width={80} height={80} />
        </div>
      </div>
      <div className="relative flex size-80 lg:size-auto">
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
