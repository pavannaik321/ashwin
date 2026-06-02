import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Showreel from "@/components/Showreel";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="grain-overlay">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Showreel />
        <Services />
        <Portfolio />
        <Skills />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
