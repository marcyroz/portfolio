import CustomSeparator from "@/components/custom-separator";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import KeyAchievements from "../key-achievements";

export default function SalaoRosaDeSaron() {
  return (
    <div className="pt-5 flex flex-col gap-8">
      <KeyAchievements projectKey="salaoRosaDeSaron" />
      <CustomSeparator />
      <div className="flex gap-10">
        <Card className="p-5 lg:p-20 bg-white flex-1 justify-center">
          <Image
            src="/portfolio/salao-rosa-de-saron/logo-salao.svg"
            alt="Salão Rosa de Saron Logo"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
        <Card className="p-5 lg:p-20 bg-white flex-1 justify-center">
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
