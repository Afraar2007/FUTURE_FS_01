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

const SOCIAL_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/vKywpksihFh2syJWPzXSwFiTgmX2/social-images/social-1780743965416-WhatsApp_Image_2026-06-02_at_6.01.11_PM.webp";
const SITE_URL = "https://stellar-showcase-41.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarav Kapoor — Creative Full-Stack Developer" },
      {
        name: "description",
        content:
          "Award-style portfolio of Aarav Kapoor, a creative full-stack developer building immersive, high-performance web experiences with React, Three.js and motion.",
      },
      { property: "og:title", content: "Aarav Kapoor — Creative Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Immersive, animated developer portfolio featuring interactive 3D, particle backgrounds and cinematic motion.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: SOCIAL_IMAGE },
      { name: "twitter:title", content: "Aarav Kapoor — Creative Full-Stack Developer" },
      {
        name: "twitter:description",
        content:
          "Immersive, animated developer portfolio featuring interactive 3D, particle backgrounds and cinematic motion.",
      },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: "Aarav Kapoor",
              jobTitle: "Creative Full-Stack Developer",
              url: `${SITE_URL}/`,
              image: SOCIAL_IMAGE,
              sameAs: [
                "https://github.com/",
                "https://www.linkedin.com/",
                "https://twitter.com/",
              ],
            },
            {
              "@type": "WebSite",
              name: "Aarav Kapoor — Portfolio",
              url: `${SITE_URL}/`,
            },
          ],
        }),
      },
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
