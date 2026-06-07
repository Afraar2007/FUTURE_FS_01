import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Gauge, Layers3, Sparkles } from "lucide-react";

const SITE_URL = "https://stellar-showcase-41.lovable.app";

const experiments = [
  {
    title: "Instanced Particle Nebula",
    keyword: "three.js examples",
    description:
      "A galaxy-scale particle field built with instanced buffer geometry, additive blending and scroll-linked camera drift.",
    stack: ["Three.js", "Instancing", "GLSL", "Motion"],
    metrics: ["1 draw call", "60 FPS", "42 KB shader set"],
    snippet: "const mesh = new THREE.InstancedMesh(geometry, material, 12000);",
  },
  {
    title: "WebGL Product Reveal",
    keyword: "WebGL experiments",
    description:
      "A cinematic product stage using environment maps, custom easing curves and progressive texture loading for fast first paint.",
    stack: ["React Three Fiber", "HDRI", "Suspense", "Texture LOD"],
    metrics: ["1.4s LCP", "96 Lighthouse", "< 2 MB textures"],
    snippet: "useFrame((state) => group.current.rotation.y = state.clock.elapsedTime * 0.18);",
  },
  {
    title: "Interactive Shader Terrain",
    keyword: "creative coding portfolio",
    description:
      "A responsive terrain sketch with pointer-reactive uniforms, mobile-safe geometry density and reduced-motion fallbacks.",
    stack: ["Shaders", "Uniforms", "Raycasting", "A11y"],
    metrics: ["28k vertices", "< 5 ms frame", "Reduced motion"],
    snippet: "material.uniforms.uPointer.value.lerp(pointerTarget, 0.08);",
  },
];

export const Route = createFileRoute("/experiments")({
  head: () => ({
    meta: [
      { title: "Three.js Experiments Lab — Afraar M" },
      {
        name: "description",
        content:
          "Three.js examples, WebGL experiments and performance notes from Afraar M's creative coding portfolio.",
      },
      { property: "og:title", content: "Three.js Experiments Lab — Afraar M" },
      {
        property: "og:description",
        content:
          "Three.js examples, WebGL experiments and performance notes from a creative coding portfolio.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/experiments` },
      { name: "twitter:title", content: "Three.js Experiments Lab — Afraar M" },
      {
        name: "twitter:description",
        content:
          "Three.js examples, WebGL experiments and performance notes from a creative coding portfolio.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/experiments` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Three.js Experiments Lab",
          url: `${SITE_URL}/experiments`,
          about: ["three.js examples", "WebGL experiments", "creative coding portfolio"],
          mainEntity: {
            "@type": "ItemList",
            itemListElement: experiments.map((experiment, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: experiment.title,
              description: experiment.description,
            })),
          },
        }),
      },
    ],
  }),
  component: ExperimentsPage,
});

function ExperimentsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-6 py-8 text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,var(--primary)_0,transparent_28%),radial-gradient(circle_at_80%_0,var(--accent)_0,transparent_24%)] opacity-20" />

      <nav className="mx-auto flex max-w-6xl items-center justify-between py-4" aria-label="Lab navigation">
        <Link
          to="/"
          className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Portfolio
        </Link>
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.28em] text-primary">
          <Sparkles className="h-4 w-4" aria-hidden="true" /> Lab
        </span>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">WebGL field notes</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-bold tracking-normal sm:text-6xl lg:text-7xl">
            Three.js Experiments Lab
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            A compact gallery of Three.js examples, WebGL experiments and creative coding systems tuned for fast, polished portfolio work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="glass-strong relative overflow-hidden rounded-3xl p-6"
        >
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Layers3, label: "Scenes", value: "03" },
              { icon: Gauge, label: "Target", value: "60 FPS" },
              { icon: Cpu, label: "GPU", value: "Lean" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-secondary/60 p-4 text-center">
                <item.icon className="mx-auto h-5 w-5 text-primary" aria-hidden="true" />
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{item.label}</p>
                <p className="mt-1 text-lg font-bold">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 h-40 overflow-hidden rounded-2xl bg-card">
            <div className="grid h-full grid-cols-12 gap-1 p-3">
              {Array.from({ length: 72 }).map((_, index) => (
                <motion.span
                  key={index}
                  className="rounded-full bg-primary/30"
                  animate={{ opacity: [0.25, 1, 0.25], scale: [0.75, 1, 0.75] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.025 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 pb-20 lg:grid-cols-3" aria-label="Three.js experiment gallery">
        {experiments.map((experiment, index) => (
          <motion.article
            key={experiment.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass-strong flex min-h-[34rem] flex-col rounded-3xl p-6"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">{experiment.keyword}</p>
            <h2 className="mt-4 text-2xl font-bold tracking-normal">{experiment.title}</h2>
            <p className="mt-3 leading-7 text-muted-foreground">{experiment.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {experiment.stack.map((tech) => (
                <span key={tech} className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-2">
              {experiment.metrics.map((metric) => (
                <div key={metric} className="flex items-center justify-between rounded-xl border border-border bg-card/70 px-3 py-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Metric</span>
                  <span className="text-sm font-semibold">{metric}</span>
                </div>
              ))}
            </div>

            <pre className="mt-auto overflow-x-auto rounded-2xl bg-background/80 p-4 text-xs leading-6 text-muted-foreground">
              <code>{experiment.snippet}</code>
            </pre>
          </motion.article>
        ))}
      </section>
    </main>
  );
}