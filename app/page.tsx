import Hero from "../components/Hero";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";
import Skill from "../components/Skill";

export default function Home() {
  return (
    <main className="font-poppins">
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
