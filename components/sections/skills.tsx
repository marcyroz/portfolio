import Title from "../title";
import {
  Brush,
  Chromium,
  Database,
  Ghost,
  Smartphone,
  Wallpaper,
  Server,
  Cloud,
} from "lucide-react";
import CarouselSection from "../skills/carousel-section";
import { Separator } from "../ui/separator";
import Image from "next/image";

const skillsSections = [
  {
    id: 1,
    title: "Frontend Development",
    carouselItems: [
      {
        id: 1,
        title: "JavaScript",
        image: "/skills/development/frontend/javascript.svg",
      },
      {
        id: 2,
        title: "TypeScript",
        image: "/skills/development/frontend/typescript.svg",
      },
      {
        id: 3,
        title: "HTML5",
        image: "/skills/development/frontend/html5.svg",
      },
      {
        id: 4,
        title: "CSS3",
        image: "/skills/development/frontend/css3.svg",
      },
      {
        id: 5,
        title: "React",
        image: "/skills/development/frontend/react.svg",
      },
      {
        id: 6,
        title: "React Native",
        image: "/skills/development/frontend/reactnative.svg",
      },
      {
        id: 7,
        title: "Expo",
        image: "/skills/development/frontend/expo.svg",
      },
      {
        id: 8,
        title: "Next.js",
        image: "/skills/development/frontend/nextjs.svg",
      },
      {
        id: 9,
        title: "Angular",
        image: "/skills/development/frontend/angular.svg",
      },
      {
        id: 10,
        title: "Tailwind CSS",
        image: "/skills/development/frontend/tailwindcss.svg",
      },
      {
        id: 11,
        title: "Sass",
        image: "/skills/development/frontend/sass.svg",
      },
      {
        id: 12,
        title: "Shadcn UI",
        image: "/skills/development/frontend/shadcnui.svg",
      },
      {
        id: 13,
        title: "Storybook",
        image: "/skills/development/frontend/storybook.svg",
      },
      {
        id: 14,
        title: "Git",
        image: "/skills/development/frontend/git.svg",
      },
      {
        id: 15,
        title: "Vite",
        image: "/skills/development/frontend/vite.svg",
      },
      {
        id: 16,
        title: "Pnpm",
        image: "/skills/development/frontend/pnpm.svg",
      },
      {
        id: 17,
        title: "Yarn",
        image: "/skills/development/frontend/yarn.svg",
      },
      {
        id: 18,
        title: "Zustand",
        image: "/skills/development/frontend/zustand.svg",
      },
      {
        id: 19,
        title: "Jest",
        image: "/skills/development/frontend/jest.svg",
      },
      {
        id: 20,
        title: "Vitest",
        image: "/skills/development/frontend/vitest.svg",
      },
    ],
    detailItems: [
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
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    carouselItems: [
      {
        id: 1,
        title: "C#",
        image: "/skills/development/backend/csharp.svg",
      },
      {
        id: 2,
        title: "Python",
        image: "/skills/development/backend/python.svg",
      },
      {
        id: 3,
        title: "Django REST",
        image: "/skills/development/backend/djangorest.svg",
      },
      {
        id: 4,
        title: "Node.js",
        image: "/skills/development/backend/nodejs.svg",
      },
      {
        id: 5,
        title: "Express",
        image: "/skills/development/backend/express.svg",
      },
      {
        id: 6,
        title: "GraphQL",
        image: "/skills/development/backend/graphql.svg",
      },
      {
        id: 7,
        title: "PHP",
        image: "/skills/development/backend/php.svg",
      },
      {
        id: 8,
        title: "Laravel",
        image: "/skills/development/backend/laravel.svg",
      },
      {
        id: 9,
        title: "MongoDB",
        image: "/skills/development/backend/mongodb.svg",
      },
      {
        id: 10,
        title: "PostgreSQL",
        image: "/skills/development/backend/postgres.svg",
      },
      {
        id: 11,
        title: "Neo4j",
        image: "/skills/development/backend/neo4j.svg",
      },
      {
        id: 12,
        title: "Firebase",
        image: "/skills/development/backend/firebase.svg",
      },
      {
        id: 13,
        title: "Docker",
        image: "/skills/development/backend/docker.svg",
      },
    ],
    detailItems: [
      {
        id: 1,
        text: "Desenvolvimento de APIs RESTful e GraphQL",
        icon: <Server size={50} />,
      },
      {
        id: 2,
        text: "Gerenciamento de bancos de dados SQL e NoSQL",
        icon: <Database size={50} />,
      },
      {
        id: 3,
        text: "Integração com serviços cloud e containerização",
        icon: <Cloud size={50} />,
      },
    ],
  },
  {
    id: 3,
    title: "Design, Illustration and Animation",
    carouselItems: [
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
    ],
    detailItems: [
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
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-card-foreground p-28 snap-start">
      <div className="flex flex-col items-center gap-20">
        <Title title="Technologies and Skills" color="bg-secondary" />
        {skillsSections.map((section) => (
          <CarouselSection
            key={section.id}
            title={section.title}
            carouselItems={section.carouselItems}
            detailItems={section.detailItems}
          />
        ))}
        <div className="flex gap-10 items-center">
          <div className="flex flex-col max-w-2xl gap-8">
            <p className="font-bold text-lg text-end">
              {
                '"If you know the concepts of design and art, and also know how to develop, you can use technology to trully do anything you wish."'
              }
            </p>
            <Separator />
          </div>
          <Image
            src="/animations/gatinho-2.gif"
            alt="Cat Animation"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}
