import { useState, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { projects, projectFilters, type ProjectCategory } from "@/lib/portfolio/data";

type Filter = "All" | ProjectCategory;
type Project = (typeof projects)[number];

function TiltCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 250,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
    stiffness: 250,
    damping: 20,
  });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className="group glass-strong relative overflow-hidden rounded-3xl"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 via-accent/0 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:from-primary/10 group-hover:to-accent/10 group-hover:opacity-100" />

      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          width={1280}
          height={832}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary backdrop-blur">
          {project.category}
        </span>
      </div>

      <div style={{ transform: "translateZ(40px)" }} className="p-6">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-white/5 px-2 py-1 font-mono text-[10px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <a
            href={project.demo}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <ExternalLink className="h-3.5 w-3.5" /> Live Demo
          </a>
          <a
            href={project.github}
            className="glass inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-foreground transition-transform hover:scale-105"
          >
            <Github className="h-3.5 w-3.5" /> Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const filtered = projects.filter((p) => active === "All" || p.category === active);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects"
        subtitle="A curated set of products I've designed, built and shipped end-to-end."
      />

      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {projectFilters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              active === f
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[var(--shadow-glow-cyan)]"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <TiltCard key={project.title} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
