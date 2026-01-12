"use client";

import Image from "next/image";
import ProjectInfo from "../portfolio/project-info";
import GithubIcon from "../icons/github-icon";
import BehanceIcon from "../icons/behance-icon";
import SalaoRosaDeSaron from "../portfolio/projects/salao-rosa-de-saron";
import Desu from "../portfolio/projects/desu";
import YR432 from "../portfolio/projects/yr432";
import Mogo from "../portfolio/projects/mogo";

const projectData = [
  {
    id: 1,
    title: "DESU",
    description:
      "An AI-powered Japanese learning app designed for anime and Japanese culture enthusiasts. This innovative language course generates personalized lessons and progress sections through artificial intelligence, creating a highly tailored learning experience for each user.",
    bannerImage: "/portfolio/desu/banner.svg",
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
    title: "mogo",
    description:
      "O Mogo é um sistema digital destinado a analisar e avaliar a acessibilidade urbana na cidade de Praia Grande. Utilizando imagens do Google Street View e dados de mapas, o projeto identifica a presença de elementos de acessibilidade (como rampas, pisos táteis e outras estruturas essenciais) e atribui classificações em estrelas para trajetos, estabelecimentos e pontos turísticos.",
    bannerImage: "/portfolio/mogo/banner.svg",
    links: [
      {
        title: "Github",
        icon: <GithubIcon width={20} height={20} />,
        url: "https://github.com/marcyroz/mogo-mobile",
      },
      {
        title: "Figma",
        url: "https://www.figma.com/design/SR9AhPV6SZRLnTmllOVDxk/mogo?node-id=395-695&t=mYcTgyQzQ246XwPK-1",
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
        name: "Python",
        icon: "skills/development/backend/python.svg",
      },
      {
        name: "Django REST",
        icon: "skills/development/backend/djangorest.svg",
      },
      {
        name: "Figma",
        icon: "skills/design/figma.svg",
      },
      {
        name: "Adobe Illustrator",
        icon: "skills/design/illustrator.svg",
      },
    ],
    content: Mogo,
  },
  {
    id: 3,
    title: "YR432",
    description:
      'YR432 é um jogo de simulação celular em ambiente hospitalar. Você assume o controle de um operador biomédico de precisão, encarregado de salvar um paciente infectado com uma "gripe comum". Gerencie medicações, combata a infecção e tome decisões que podem levar à cura... ou ao fim.',
    bannerImage: "/portfolio/yr432/banner.png",
    links: [
      {
        title: "Github",
        icon: <GithubIcon width={20} height={20} />,
        url: "https://github.com/marcyroz/YR432-V2",
      },
    ],
    technologies: [
      {
        name: "Unity",
        icon: "skills/development/unity.svg",
      },
      {
        name: "C#",
        icon: "skills/development/backend/csharp.svg",
      },
      {
        name: "Git",
        icon: "skills/development/frontend/git.svg",
      },
      {
        name: "Photoshop",
        icon: "skills/design/photoshop.svg",
      },
    ],
    content: YR432,
  },
  {
    id: 4,
    title: "Salão Rosa de Saron",
    description:
      "A beauty salon website focused on providing an elegant and user-friendly experience for clients looking to book appointments and explore services.",
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
    <section
      id="portfolio"
      className="px-40 pt-20 pb-10 items-center flex flex-col gap-10 snap-start"
    >
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
      <div className="flex flex-col gap-5">
        {projectData.map((project) => (
          <ProjectInfo
            key={project.id}
            item={project}
            renderContent={project.content}
          />
        ))}
      </div>
    </section>
  );
}
