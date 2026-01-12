import { SendHorizonal } from "lucide-react";
import Title from "../title";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      className="py-20 px-40 flex flex-col gap-5 justify-center mx-auto snap-start"
    >
      <Title color="bg-secondary" title={t("title")} />
      <h3 className="text-secondary font-semibold text-2xl">{t("subtitle")}</h3>
      <div className="flex gap-4 w-full">
        <div className="gap-4 flex flex-col w-full">
          <Label htmlFor="name">{t("nameLabel")}</Label>
          <Input placeholder={t("namePlaceholder")} />
        </div>
        <div className="gap-4 flex flex-col w-full">
          <Label htmlFor="lastName">{t("lastNameLabel")}</Label>
          <Input placeholder={t("lastNamePlaceholder")} />
        </div>
      </div>
      <div className="gap-4 flex flex-col">
        <Label htmlFor="email">{t("emailLabel")}</Label>
        <Input placeholder={t("emailPlaceholder")} />
      </div>
      <div className="gap-4 flex flex-col">
        <Label htmlFor="email">{t("emailLabel")}</Label>
        <Textarea placeholder={t("messagePlaceholder")} />
      </div>
      <Button variant="secondary">
        {t("sendButton")}
        <SendHorizonal />
      </Button>

      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-8">
          <h3 className="text-secondary font-semibold text-2xl">
            {t("alternativeTitle")}
          </h3>
          <Button variant="secondary">
            <a href="mailto:marcellyfarias.contato@gmail.com" target="_blank">
              {t("sendEmailButton")}
            </a>
            <SendHorizonal />
          </Button>
        </div>
        <Image
          src="/asset-2.svg"
          alt="Contact Image"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}
