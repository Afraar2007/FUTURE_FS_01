import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { ClientOnly } from "./ClientOnly";
import { Hero3D } from "./Hero3D";
import { profile } from "@/lib/portfolio/data";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28"
    >
      {/* 3D scene layer */}
      <div className="absolute inset-0 opacity-90">
        <ClientOnly>
          <Hero3D />
        </ClientOnly>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="glass mx-auto mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for select freelance projects
          </motion.div>

          <motion.p
            variants={item}
            className="font-mono text-sm uppercase tracking-[0.4em] text-primary"
          >
            Hi, I&apos;m {profile.name.split(" ")[0]}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 text-5xl font-bold leading-[1.05] sm:text-7xl lg:text-8xl"
          >
            <span className="text-gradient animate-gradient">{profile.title}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              onClick={() => scrollToId("projects")}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow-cyan)] transition-transform hover:scale-105 sm:w-auto"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("resume");
              }}
              className="glass-strong inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-105 sm:w-auto"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <button
              onClick={() => scrollToId("contact")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
