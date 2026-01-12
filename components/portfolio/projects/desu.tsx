import CustomSeparator from "@/components/custom-separator";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

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
    <div className="pt-5 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h4 className="text-2xl font-bold text-primary">Key Achievements</h4>
        <ul className="text-lg space-y-2">
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Developed complex screens and features in{" "}
              <strong className="text-white">React Native with Expo</strong> and{" "}
              <strong className="text-white">TypeScript</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Built responsive and animated landing pages with{" "}
              <strong className="text-white">Next.js</strong> and{" "}
              <strong className="text-white">shadcn/ui</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Implemented{" "}
              <strong className="text-white">internationalization</strong> with{" "}
              <strong className="text-white">i18n</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Active participation in design process, creating illustrations,
              animations, and screens using{" "}
              <strong className="text-white">Figma</strong>,{" "}
              <strong className="text-white">Illustrator</strong>, and{" "}
              <strong className="text-white">Photoshop</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Worked with SVG rendering and styling on native platform using{" "}
              <strong className="text-white">Skia library</strong>,{" "}
              <strong className="text-white">React reusables</strong>, and{" "}
              <strong className="text-white">NativeWind</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Developed gamified backend features with{" "}
              <strong className="text-white">tRPC</strong>,{" "}
              <strong className="text-white">Nest.js</strong>, and{" "}
              <strong className="text-white">
                Docker PostgreSQL/Neo4j/MongoDB
              </strong>{" "}
              container
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Worked in a{" "}
              <strong className="text-white">monorepo environment</strong> with{" "}
              <strong className="text-white">Turborepo</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Built AI-powered features, mainly chatbots using{" "}
              <strong className="text-white">LangChain</strong> and{" "}
              <strong className="text-white">Vercel AI SDK</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Participated in{" "}
              <strong className="text-white">Scrum rituals</strong> including
              dailies, reviews, and planning sessions
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Developed features for{" "}
              <strong className="text-white">browser extensions</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Created automated tests using{" "}
              <strong className="text-white">Jest</strong> and{" "}
              <strong className="text-white">Vitest</strong>
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">•</span>
            <span className="font-bold text-lg">
              Documented frontend components through{" "}
              <strong className="text-white">Storybook</strong>
            </span>
          </li>
        </ul>
      </div>
      <CustomSeparator />
      <div className="flex relative w-full h-150 rounded-3xl">
        <Image
          src="/portfolio/desu/desu-map.svg"
          alt="Desu sections map"
          fill
          className="object-cover rounded-3xl"
        />
      </div>
      <div className="flex gap-8">
        <Card className="p-20 bg-white flex-1 justify-center items-center">
          <Image
            src="/portfolio/desu/characters-illustration.svg"
            alt="Desu Characters Illustration"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
        <Card className="p-20 bg-white flex-1">
          <Image
            src="/portfolio/desu/characters-illustration-2.svg"
            alt="Desu Characters Illustration 2"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
      </div>
      <div className="flex gap-8">
        <Card className="p-20 bg-white flex-1">
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
      <div className="flex gap-8">
        <Card className="p-8 bg-white flex-1 justify-center">
          <Image
            src="/portfolio/desu/okiji-2.svg"
            alt="character Okiji Illustration"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
        <Card className="p-4 bg-white flex-1 justify-center">
          <Image
            src="/portfolio/desu/sarunosuke-2.svg"
            alt="character Sarunosuke Illustration"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
        <Card className="p-4 bg-white flex-1 justify-center">
          <Image
            src="/portfolio/desu/inunosuke-2.svg"
            alt="character Inunosuke Illustration"
            width={800}
            height={400}
            className="object-contain w-full h-auto"
          />
        </Card>
        <Card className="p-4 bg-white flex-1 justify-center">
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
