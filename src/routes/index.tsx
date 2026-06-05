import { createFileRoute } from "@tanstack/react-router";
import { ClientOnly } from "@/components/portfolio/ClientOnly";
import { GradientBlobs } from "@/components/portfolio/GradientBlobs";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { PageIntro } from "@/components/portfolio/PageIntro";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Articles } from "@/components/portfolio/Articles";
import { CodingProfiles } from "@/components/portfolio/CodingProfiles";
import { Resume } from "@/components/portfolio/Resume";
import { Social } from "@/components/portfolio/Social";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarav Kapoor — Creative Full-Stack Developer" },
      {
        name: "description",
        content:
          "Award-style portfolio of Aarav Kapoor, a creative full-stack developer crafting immersive, high-performance web experiences with React, Three.js and motion design.",
      },
      { property: "og:title", content: "Aarav Kapoor — Creative Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Immersive, animated developer portfolio featuring interactive 3D, particle backgrounds and cinematic motion.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <GradientBlobs />
      <ClientOnly>
        <ParticleBackground />
      </ClientOnly>
      <PageIntro />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Articles />
        <CodingProfiles />
        <Resume />
        <Social />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
