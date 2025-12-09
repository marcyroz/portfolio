import Header from "@/components/header";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Portfolio from "@/components/sections/portfolio";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}
