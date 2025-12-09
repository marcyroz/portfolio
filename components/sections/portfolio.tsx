import Image from "next/image";
import ProjectInfo from "../portfolio/project-info";
import GithubIcon from "../portfolio/github-icon";

const projectData = [
  {
    id: 1,
    title: "DESU",
    description:
      "A japanese learning app for those who love the japanese culture, especially anime! This is a Lisbom project, and I’m currently responsable for the character design, as well for the animation and overall illustrations that will come on the app. Stay tunned!",
    bannerImage: "portfolio/desu/banner.svg",
    links: [
      {
        title: "Behance",
        url: "https://www.behance.net/gallery/162202123/DESU-App-Illustrations-and-Character-Design",
      },
    ],
    technologies: [
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
  },
  {
    id: 2,
    title: "Salão Rosa de Saron",
    description:
      "A japanese learning app for those who love the japanese culture, especially anime! This is a Lisbom project, and I’m currently responsable for the character design, as well for the animation and overall illustrations that will come on the app. Stay tunned!",
    bannerImage: "/portfolio/salao-rosa-de-saron/banner.png",
    links: [
      {
        title: "Website",
        url: "https://www.salaorosadesaronpg.com.br/",
      },
      {
        icon: <GithubIcon width={20} height={21} />,
        title: "Github",
        url: "https://github.com/marcyroz/salao-rosa-de-saron",
      },
    ],
    technologies: [
      {
        name: "TypeScript",
        icon: "skills/development/typescript.svg",
      },
      {
        name: "Next.js",
        icon: "skills/development/nextjs.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "skills/development/tailwindcss.svg",
      },
      {
        name: "Git",
        icon: "skills/development/git.svg",
      },
      {
        name: "Figma",
        icon: "skills/design/figma.svg",
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <section className="p-40 items-center flex flex-col gap-20">
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
        <ProjectInfo key={project.id} item={project} />
      ))}
    </section>
  );
}
