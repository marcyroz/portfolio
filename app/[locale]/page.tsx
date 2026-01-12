import CustomSeparator from "@/components/custom-separator";
import Navbar from "@/components/navbar";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Portfolio from "@/components/sections/portfolio";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="scroll-smooth snap-y h-screen overflow-y-scroll">
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
