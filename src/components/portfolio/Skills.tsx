import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skills, skillCategories, type SkillCategory } from "@/lib/portfolio/data";

type Filter = "All" | SkillCategory;
const filters: Filter[] = ["All", ...skillCategories];

export function Skills() {
  const [active, setActive] = useState<Filter>("All");
  const filtered = skills.filter((s) => active === "All" || s.category === active);

  return (
    <section id="skills" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <SectionHeading
        eyebrow="Skills & Stack"
        title="The toolbox"
        subtitle="A versatile, battle-tested stack spanning the full product lifecycle."
      />

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
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

      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((skill, i) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -6 }}
              className="group glass relative overflow-hidden rounded-2xl p-5"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="mb-3 flex items-center justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="font-mono text-xs text-primary">{skill.level}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
              <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
