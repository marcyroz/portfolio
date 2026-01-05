"use client";

import Image from "next/image";
import ProjectInfo from "../portfolio/project-info";
import GithubIcon from "../icons/github-icon";
import BehanceIcon from "../icons/behance-icon";
import SalaoRosaDeSaron from "../portfolio/projects/salao-rosa-de-saron";
import Desu from "../portfolio/projects/desu";

const projectData = [
  {
    id: 1,
    title: "DESU",
    description:
      "An AI-powered Japanese learning app designed for anime and Japanese culture enthusiasts. This innovative language course generates personalized lessons and progress sections through artificial intelligence, creating a highly tailored learning experience for each user. As a Junior Developer at Lisbom, I contributed to fullstack development and created the character design, animations, and overall illustrations for the app. Stay tuned!",
    bannerImage: "portfolio/desu/banner.svg",
    links: [
      {
        title: "Behance",
        icon: <BehanceIcon width={20} height={20} />,
        url: "https://www.behance.net/gallery/162202123/DESU-App-Illustrations-and-Character-Design",
      },
      {
        title: "Rive Animations",
        url: "https://rive.app/@marcyrozdoc/",
      },
    ],
    technologies: [
      {
        name: "React Native",
        icon: "skills/development/frontend/reactnative.svg",
      },
      {
        name: "TypeScript",
        icon: "skills/development/frontend/typescript.svg",
      },
      {
        name: "Expo",
        icon: "skills/development/frontend/expo.svg",
      },
      {
        name: "Zustand",
        icon: "skills/development/frontend/zustand.svg",
      },
      {
        name: "tailwindcss",
        icon: "skills/development/frontend/tailwindcss.svg",
      },
      {
        name: "Storybook",
        icon: "skills/development/frontend/storybook.svg",
      },
      {
        name: "Jest",
        icon: "skills/development/frontend/jest.svg",
      },
      {
        name: "Vitest",
        icon: "skills/development/frontend/vitest.svg",
      },
      {
        name: "Next.js",
        icon: "skills/development/frontend/nextjs.svg",
      },
      {
        name: "trpc",
        icon: "skills/development/backend/trpc.svg",
      },
      {
        name: "nestjs",
        icon: "skills/development/backend/nestjs.svg",
      },
      {
        name: "Docker",
        icon: "skills/development/backend/docker.svg",
      },
      {
        name: "PostgreSQL",
        icon: "skills/development/backend/postgres.svg",
      },
      {
        name: "MongoDB",
        icon: "skills/development/backend/mongodb.svg",
      },
      {
        name: "Neo4j",
        icon: "skills/development/backend/neo4j.svg",
      },
      {
        name: "Firebase",
        icon: "skills/development/backend/firebase.svg",
      },
      {
        name: "Adobe Illustrator",
        icon: "skills/design/illustrator.svg",
      },
      {
        name: "Adobe Photoshop",
        icon: "skills/design/photoshop.svg",
      },
      {
        name: "Rive",
        icon: "skills/design/rive.svg",
      },
      {
        name: "Figma",
        icon: "skills/design/figma.svg",
      },
    ],
    content: Desu,
  },
  {
    id: 2,
    title: "Salão Rosa de Saron",
    description:
      "A beauty salon website focused on providing an elegant and user-friendly experience for clients looking to book appointments and explore services. Developed with a modern tech stack to ensure responsiveness and performance.",
    bannerImage: "/portfolio/salao-rosa-de-saron/banner.png",
    links: [
      {
        title: "Website",
        url: "https://www.salaorosadesaronpg.com.br/",
      },
      {
        title: "Github",
        icon: <GithubIcon width={20} height={20} />,
        url: "https://github.com/marcyroz/salao-rosa-de-saron",
      },
    ],
    technologies: [
      {
        name: "TypeScript",
        icon: "skills/development/frontend/typescript.svg",
      },
      {
        name: "Next.js",
        icon: "skills/development/frontend/nextjs.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "skills/development/frontend/tailwindcss.svg",
      },
      {
        name: "Git",
        icon: "skills/development/frontend/git.svg",
      },
      {
        name: "Figma",
        icon: "skills/design/figma.svg",
      },
    ],
    content: SalaoRosaDeSaron,
  },
];

export default function Portfolio() {
  return (
    <section className="px-40 pt-40 pb-10 items-center flex flex-col gap-15">
      <div className="flex relative items-center gap-8 w-fit">
        <Image
          src="/star-3.svg"
          alt="Sparkles Icon"
          width={60}
          height={60}
          className="absolute -left-20 bottom-0"
        />
        <div className="w-32 h-2 bg-primary" />
        <h2 className="text-4xl text-white font-bold">Portfolio</h2>
        <div className="w-32 h-2 bg-primary" />
        <Image
          src="/star-3.svg"
          alt="Sparkles Icon"
          width={60}
          height={60}
          className="absolute -right-20 bottom-0"
        />
      </div>
      {projectData.map((project) => (
        <ProjectInfo
          key={project.id}
          item={project}
          renderContent={project.content}
        />
      ))}
    </section>
  );
}
