import Title from "../title";
import {
  Brush,
  Chromium,
  Database,
  Ghost,
  Smartphone,
  Wallpaper,
} from "lucide-react";
import CarouselSection from "../skills/carousel-section";
import { Separator } from "../ui/separator";

const carouseDevelopmentItems = [
  {
    id: 1,
    title: "JavaScript",
    image: "/skills/development/javascript.svg",
  },
  {
    id: 2,
    title: "Typescript",
    image: "/skills/development/typescript.svg",
  },
  {
    id: 3,
    title: "HTML5",
    image: "/skills/development/html5.svg",
  },
  {
    id: 4,
    title: "CSS3",
    image: "/skills/development/css3.svg",
  },
  {
    id: 5,
    title: "React",
    image: "/skills/development/react.svg",
  },
  {
    id: 6,
    title: "React Native",
    image: "/skills/development/reactnative.svg",
  },
  {
    id: 7,
    title: "Expo",
    image: "/skills/development/expo.svg",
  },
  {
    id: 8,
    title: "Next.js",
    image: "/skills/development/nextjs.svg",
  },
  {
    id: 9,
    title: "Angular",
    image: "/skills/development/angular.svg",
  },
  {
    id: 10,
    title: "Tailwind CSS",
    image: "/skills/development/tailwindcss.svg",
  },
  {
    id: 11,
    title: "Sass",
    image: "/skills/development/sass.svg",
  },
  {
    id: 12,
    title: "Shadcn UI",
    image: "/skills/development/shadcnui.svg",
  },
  {
    id: 13,
    title: "Git",
    image: "/skills/development/git.svg",
  },
  {
    id: 14,
    title: "Pnpm",
    image: "/skills/development/pnpm.svg",
  },
  {
    id: 15,
    title: "Yarn",
    image: "/skills/development/yarn.svg",
  },
];

const developmentDetails = [
  {
    id: 1,
    text: "Desenvolvimento de sistemas e sites responsivos",
    icon: <Smartphone size={50} />,
  },
  {
    id: 2,
    text: "Consumo de APIs e manipulação de dados",
    icon: <Database size={50} />,
  },
  {
    id: 3,
    text: "Deploy, gerenciamento de domínios e performance (SEO) com SSR",
    icon: <Chromium size={50} />,
  },
];

const carouselDesignItems = [
  {
    id: 1,
    title: "Figma",
    image: "/skills/design/figma.svg",
  },
  {
    id: 2,
    title: "Adobe Photoshop",
    image: "/skills/design/photoshop.svg",
  },
  {
    id: 3,
    title: "Adobe Illustrator",
    image: "/skills/design/illustrator.svg",
  },
  {
    id: 4,
    title: "Canva",
    image: "/skills/design/canva.svg",
  },
  {
    id: 5,
    title: "Rive",
    image: "/skills/design/rive.svg",
  },
];

const designDetails = [
  {
    id: 1,
    text: "Criação de logos e identidades visuais",
    icon: <Wallpaper size={50} />,
  },
  {
    id: 2,
    text: "Design de personagens e backgrounds",
    icon: <Ghost size={50} />,
  },
  {
    id: 3,
    text: "Criação de animações tanto estáticas quanto interativas",
    icon: <Brush size={50} />,
  },
];

export default function Skills() {
  return (
    <section className="bg-card-foreground p-28">
      <div className="flex flex-col items-center gap-20">
        <Title title="Technologies and Skills" color="bg-secondary" />
        <CarouselSection
          title="Development"
          carouselItems={carouseDevelopmentItems}
          detailItems={developmentDetails}
        />
        <CarouselSection
          title="Design, Illustration and Animation"
          carouselItems={carouselDesignItems}
          detailItems={designDetails}
        />
        <p className="font-bold text-lg text-end">
          “If you know the concepts of design and art, and also know how to
          develop, you can use technology to trully do anything you wish.”
        </p>
        <Separator />
      </div>
    </section>
  );
}
