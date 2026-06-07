import { About } from "./components/About";
import { Capabilities } from "./components/Capabilities";
import { Contact } from "./components/Contact";
import { DecorativeFloaters } from "./components/DecorativeFloaters";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Lab } from "./components/Lab";
import { Navigation } from "./components/Navigation";
import { OrbitSkills } from "./components/OrbitSkills";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";

export default function Home() {
  return (
    <div className="site-shell relative min-h-screen text-[#2f261f]">
      <DecorativeFloaters />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <OrbitSkills />
        <Capabilities />
        <Projects />
        <Experience />
        <Services />
        <Lab />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
