import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

export default function SalaoRosaDeSaron() {
  return (
    <div>
      <Card className="p-5 bg-white">
        <Image
          src="/portfolio/salao-rosa-de-saron/logo-salao.svg"
          alt="Salão Rosa de Saron Banner"
          width={800}
          height={400}
          className="object-cover rounded-3xl"
        />
      </Card>
    </div>
  );
}
