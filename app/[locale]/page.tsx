import CustomSeparator from "@/components/custom-separator";
import Navbar from "@/components/navbar";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Portfolio from "@/components/sections/portfolio";
import Skills from "@/components/sections/skills";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CustomSeparator className="px-20" />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
