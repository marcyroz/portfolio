import { SendHorizonal } from "lucide-react";
import Title from "../title";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="py-28 flex flex-col gap-8 max-w-7xl justify-center mx-auto">
      <Title color="bg-secondary" title="Contact me" />
      <h3 className="text-secondary font-semibold text-2xl">
        By filling this form...
      </h3>
      <div className="flex gap-4 w-full">
        <div className="gap-4 flex flex-col w-full">
          <Label htmlFor="name">Name</Label>
          <Input placeholder="Your first name..." />
        </div>
        <div className="gap-4 flex flex-col w-full">
          <Label htmlFor="lastName">Last Name</Label>
          <Input placeholder="Your last name..." />
        </div>
      </div>
      <div className="gap-4 flex flex-col">
        <Label htmlFor="email">E-mail</Label>
        <Input placeholder="Your email address..." />
      </div>
      <div className="gap-4 flex flex-col">
        <Label htmlFor="email">E-mail</Label>
        <Textarea placeholder="Your message..." />
      </div>
      <Button variant="secondary">
        Send
        <SendHorizonal />
      </Button>

      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-8">
          <h3 className="text-secondary font-semibold text-2xl">
            Or directly at my e-mail!
          </h3>
          <Button variant="secondary">
            Send me an e-mail
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
