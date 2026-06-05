import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { codingProfiles } from "@/lib/portfolio/data";

export function CodingProfiles() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow="Competitive & Open Source"
        title="Coding Profiles"
        subtitle="Where I practice, compete and contribute across the developer ecosystem."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {codingProfiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="group glass relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 ring-1 ring-white/10">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-bold">{p.name}</h3>
            <p className="font-mono text-xs text-muted-foreground">{p.handle}</p>
            <p className="mt-3 text-sm font-medium text-gradient">{p.stat}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
