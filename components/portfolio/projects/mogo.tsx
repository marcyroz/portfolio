import CustomSeparator from "@/components/custom-separator";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import KeyAchievements from "../key-achievements";

export default function Mogo() {
  return (
    <div className="pt-5 flex flex-col gap-8">
      <KeyAchievements projectKey="mogo" />
      <CustomSeparator />
      <h5 className="text-2xl font-bold text-primary">Galeria</h5>
      <Card className="p-5 lg:p-20 bg-white flex-1 justify-center items-center">
        <Image
          src="/portfolio/mogo/logo.svg"
          alt="Mogo Logo"
          width={800}
          height={400}
          className="object-contain w-full h-auto max-h-screen"
        />
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="p-5 lg:p-20 bg-white justify-center items-center">
          <Image
            src="/portfolio/mogo/dog.svg"
            alt="Mogo Dog Illustration"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
        <Card className="p-5 lg:p-20 bg-white">
          <Image
            src="/portfolio/mogo/dog-2.svg"
            alt="Mogo Dog Illustration 2"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
        <Card className="p-5 lg:p-20 bg-white">
          <Image
            src="/portfolio/mogo/dog-3.svg"
            alt="Mogo Dog Illustration 3"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
      </div>
    </div>
  );
}
