import CustomSeparator from "@/components/custom-separator";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function SalaoRosaDeSaron() {
  return (
    <div className="pt-5 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h4 className="text-2xl font-bold text-primary">Key Achievements</h4>
        <ul className="text-lg space-y-2">
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Built with{" "}
              <strong className="text-white">Next.js App Router</strong> for
              optimal SEO and performance
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Implemented interactive animations using{" "}
              <strong className="text-white">Framer Motion</strong>,{" "}
              <strong className="text-white">AOS</strong>, and{" "}
              <strong className="text-white">Embla Carousel</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Deployed on <strong className="text-white">Vercel</strong> with
              custom domain from{" "}
              <strong className="text-white">Hostinger</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Collaborated with a designer to create a professional brand
              identity
            </span>
          </li>
        </ul>
      </div>
      <CustomSeparator />
      <div className="flex gap-10">
        <Card className="p-20 bg-white flex-1 justify-center">
          <Image
            src="/portfolio/salao-rosa-de-saron/logo-salao.svg"
            alt="Salão Rosa de Saron Logo"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
        <Card className="p-20 bg-white flex-1 justify-center">
          <Image
            src="/portfolio/salao-rosa-de-saron/logo-salao-2.svg"
            alt="Salão Rosa de Saron Alternative Logo"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
      </div>
    </div>
  );
}
