"use client";

import { SendHorizonal } from "lucide-react";
import Title from "../title";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContactForm } from "@/firebase/hooks";
import { useEffect } from "react";

export default function Contact() {
  const t = useTranslations("contact");

  const contactSchema = z.object({
    name: z.string().min(2, t("formWarnings.nameRequired")),
    lastName: z
      .string()
      .min(2, t("formWarnings.lastNameMinLength"))
      .optional()
      .or(z.literal("")),
    email: z
      .string()
      .email(t("formWarnings.emailInvalid"))
      .optional()
      .or(z.literal("")),
    message: z.string().min(10, t("formWarnings.messageRequired")),
  });

  type ContactFormInputs = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const { submitContactForm, loading, error, success, resetForm } =
    useContactForm();

  const onSubmit = async (data: ContactFormInputs) => {
    const submitted = await submitContactForm(data);
    if (submitted) {
      reset();
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        resetForm();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, resetForm]);

  return (
    <section
      id="contact"
      className="py-20 px-5 lg:px-40 flex flex-col gap-5 justify-center mx-auto snap-start"
    >
      <Title color="bg-secondary" title={t("title")} />
      <h3 className="text-secondary font-semibold text-2xl">{t("subtitle")}</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="gap-4 flex flex-col w-full">
            <Label htmlFor="name">{t("nameLabel")}</Label>
            <Input
              id="name"
              placeholder={t("namePlaceholder")}
              {...register("name")}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p className="text-destructive text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="gap-4 flex flex-col w-full">
            <Label htmlFor="lastName">{t("lastNameLabel")}</Label>
            <Input
              id="lastName"
              placeholder={t("lastNamePlaceholder")}
              {...register("lastName")}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName && (
              <p className="text-destructive text-sm">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        <div className="gap-4 flex flex-col">
          <Label htmlFor="email">{t("emailLabel")}</Label>
          <Input
            id="email"
            type="email"
            placeholder={t("emailPlaceholder")}
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p className="text-destructive text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="gap-4 flex flex-col">
          <Label htmlFor="message">{t("messageLabel")}</Label>
          <Textarea
            id="message"
            placeholder={t("messagePlaceholder")}
            {...register("message")}
            aria-invalid={errors.message ? "true" : "false"}
          />
          {errors.message && (
            <p className="text-destructive text-sm">{errors.message.message}</p>
          )}
        </div>

        {error && (
          <p className="text-destructive text-lg font-semibold">{error}</p>
        )}

        {success && (
          <p className="text-secondary text-lg font-semibold">
            {t("successMessage")}
          </p>
        )}

        <Button
          type="submit"
          variant="secondary"
          className="w-fit"
          disabled={loading}
        >
          {loading ? t("sending") : t("sendButton")}
          <SendHorizonal />
        </Button>
      </form>

      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-4 lg:gap-8">
          <h3 className="text-secondary font-semibold text-2xl">
            {t("alternativeTitle")}
          </h3>
          <Button variant="secondary" className="w-fit">
            <a href="mailto:marcellyfarias.contato@gmail.com" target="_blank">
              {t("sendEmailButton")}
            </a>
            <SendHorizonal />
          </Button>
        </div>
        <div className="size-20 lg:size-auto items-end flex">
          <Image
            src="/asset-2.svg"
            alt="Contact Image"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}
