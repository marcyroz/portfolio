import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Image from "next/image";
import { Card } from "../ui/card";
import DetailText from "./detail-text";

interface CarouselSectionProps {
  title: string;
  carouselItems: {
    id: number;
    title: string;
    image: string;
  }[];
  detailItems: {
    id: number;
    text: string;
    icon: React.ReactNode;
  }[];
}
export default function CarouselSection({
  title,
  carouselItems,
  detailItems,
}: CarouselSectionProps) {
  return (
    <div className="flex flex-col gap-10 w-full items-center">
      <div className="flex flex-col gap-8 items-center w-full">
        <h3 className="text-secondary font-semibold text-2xl">{title}</h3>
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {carouselItems.map((item) => (
              <CarouselItem key={item.id} className="basis-1/5">
                <Card className="bg-popover items-center gap-2 justify-center p-10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={150}
                    height={150}
                  />
                  <span className="text-white text-lg font-bold">
                    {item.title}
                  </span>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex mt-12 items-center gap-2">
        {detailItems.map((detail) => (
          <DetailText key={detail.id} text={detail.text} icon={detail.icon} />
        ))}
      </div>
    </div>
  );
}
