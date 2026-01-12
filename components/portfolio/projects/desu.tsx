import CustomSeparator from "@/components/custom-separator";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import KeyAchievements from "../key-achievements";

const carouselItems = [
  {
    id: 1,
    title: "Okiji",
    image: "/portfolio/desu/okiji.svg",
  },
  {
    id: 2,
    title: "Sarunosuke",
    image: "/portfolio/desu/sarunosuke.svg",
  },
  {
    id: 3,
    title: "Inunosuke",
    image: "/portfolio/desu/inunosuke.svg",
  },
  {
    id: 4,
    title: "Daisuke",
    image: "/portfolio/desu/daisuke.svg",
  },
  {
    id: 5,
    title: "Momotaro",
    image: "/portfolio/desu/momotaro.svg",
  },
];

const autoplayPlugin = Autoplay({ delay: 3000, stopOnInteraction: false });

export default function Desu() {
  return (
    <div className="pt-5 flex flex-col gap-8 w-full max-w-full overflow-hidden">
      <KeyAchievements projectKey="desu" />
      <CustomSeparator />
      <div className="flex relative w-full h-150 rounded-3xl">
        <Image
          src="/portfolio/desu/desu-map.svg"
          alt="Desu sections map"
          fill
          className="object-cover rounded-3xl"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <Card className="p-5 lg:p-20 bg-white flex-1">
          <Image
            src="/portfolio/desu/characters-illustration.svg"
            alt="Desu Characters Illustration"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
        <Card className="p-5 lg:p-20 bg-white flex-1">
          <Image
            src="/portfolio/desu/characters-illustration-2.svg"
            alt="Desu Characters Illustration 2"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <Card className="p-5 lg:p-20 bg-white flex-1">
          <Image
            src="/portfolio/desu/characters-illustration-3.svg"
            alt="Desu Characters Illustration 3"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
        <Card className="p-0 bg-white flex-1 overflow-hidden">
          <div className="relative w-full h-full min-h-96">
            <Image
              src="/portfolio/desu/characters-illustration-4.svg"
              alt="Desu Characters Illustration 4"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="p-5 lg:p-8 bg-white">
          <Image
            src="/portfolio/desu/okiji-2.svg"
            alt="character Okiji Illustration"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
        <Card className="p-5 lg:p-4 bg-white">
          <Image
            src="/portfolio/desu/sarunosuke-2.svg"
            alt="character Sarunosuke Illustration"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
        <Card className="p-5 lg:p-4 bg-white">
          <Image
            src="/portfolio/desu/inunosuke-2.svg"
            alt="character Inunosuke Illustration"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
        <Card className="p-5 lg:p-4 bg-white justify-center">
          <Image
            src="/portfolio/desu/daisuke-okiji.svg"
            alt="character Okiji Daisuke Illustration"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
      </div>
      <Carousel
        className="w-full"
        plugins={[autoplayPlugin]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id} className="basis-1/1">
              <div className="items-center flex justify-center p-10">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={700}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Image
        src="/portfolio/desu/lisbom-logo.svg"
        alt="Lisbom Logo"
        width={150}
        height={100}
        className="self-end"
      />
    </div>
  );
}
